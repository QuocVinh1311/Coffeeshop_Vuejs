import { createWebHistory, createRouter } from "vue-router";
import store from "vuex";
// import ProductBook from "@/views/ProductAdmin.vue";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import Home from "../view/Home.vue";
import Profile from "../view/Profile.vue";
import Product from "../view/Product.vue";
import DetailProduct from "../view/DetailProduct.vue";
import ShoppingCart from "../view/Cart.vue";
import Order from "../view/Order.vue";
import ChangePassword from "../view/ChangePassword.vue";
import ChangeInfo from "../view/ChangeProfileInfo.vue";
import SearchProduct from "../view/SearchProduct.vue";

import EditProduct from '../admin/AdminEditProduct.vue';
import AdminProduct from "../admin/AdminProduct.vue";
import AddProduct from "../admin/AdminAddProduct.vue";
import AdminOrder from "../admin/AdminOrder.vue";
import AdminDetailOrder from "../admin/AdminDetailOrder.vue";
import AdminUser from "../admin/AdminUser.vue";
import AdminCategory from "../admin/AdminCategory.vue";
import AddCategory from "../admin/AdminAddCategory.vue";
import EditCategory from "../admin/AdminEditCategory.vue";


const routes = [{
        path: "/home",
        name: "Home",
        component: Home,

    },
    {
        path: "/admin/addproduct",
        name: "AddProduct",
        component: AddProduct,
    },
    {
        path: "/admin/product",
        name: "AdminProduct",
        component: AdminProduct,
    },
    {
        path: "/admin/:id",
        name: "EditProduct",
        component: EditProduct,
    },
    {
        path: "/admin/order",
        name: "AdminOrder",
        component: AdminOrder,
    },
    {
        path: "/admin/detailorder/:id",
        name: "AdminDetailOrder",
        component: AdminDetailOrder,
    },
    {
        path: "/admin/user",
        name: "AdminUser",
        component: AdminUser,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/detail/:id",
        name: "DetailProduct",
        component: DetailProduct,
    },
    {
        path: "/searchproduct",
        name: "SearchProduct",
        components: SearchProduct,
    },
    {
        path: "/admin/category",
        name: "AdminCategory",
        component: AdminCategory,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () =>
            import ("@/views/NotFound.vue"),
    },


    {
        path: "/",
        name: "Login",
        component: Login,

    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        props: true
    },
    {
        path: "/admin/addproduct",
        name: "AddProduct",
        component: AddProduct,
    },
    {
        path: "/admin/addcategory",
        name: "AddCategory",
        component: AddCategory,
    },
    {
        path: "/admin/editcategory",
        name: "EditCategory",
        component: EditCategory,
    },


    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/changepwd",
        name: "ChangePWD",
        component: ChangePassword,
    },
    {
        path: "/changeinfo",
        name: "ChangeInfo",
        component: ChangeInfo,
    },

    {
        path: "/shoppingcart",
        name: "ShoppingCart",
        component: ShoppingCart
    },
    {
        path: "/order",
        name: "Order",
        component: Order
    },

];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});


export default router;