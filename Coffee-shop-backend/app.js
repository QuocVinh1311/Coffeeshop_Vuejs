const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const mongoose = require('mongoose');
const config = require("./app/config");
const Auth = require("./app/router/user.route");
const Order = require("./app/router/order.router");
const Product = require("./app/router/product.route");
const Category = require("./app/router/category.route");

const app = express();

app.use(cors());
app.use(express.json());

//Kết nối đến cơ sở dữ liệu
mongoose.connect(config.db.uri)
    .then(() => {
        console.log("Kết nối thành công đến cơ sở dữ liệu.");
    }).catch((error) => {
        console.log("Kết nối thất bại");
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to home page" });
});

//route đăng ký đăng nhập
app.use("/api/auth", Auth);

//route cho api order
app.use("/api/orders", Order);

//route cho api xử lý sản phẩm
app.use("/api/product", Product);

//route cho api xử lý danh muc sản phẩm
app.use("/api/category", Category);



app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    // Middleware xử lý lỗi tập trung.
    // Trong các đoạn code xử lý ở các route, gọi next(error)
    // sẽ chuyển về middleware xử lý lỗi này
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;