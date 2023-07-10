const CategoryModel = require('../models/category.model');
const ApiErrorModel = require('../api-error');

exports.createCategory = async(req, res, next) => {
    const categoryInfo = new CategoryModel(req.body);
    try {
        const newCategory = await categoryInfo.save();
        return res.send(newCategory);
    } catch (error) {
        return next(new ApiError(500, "Không thể thêm danh mục!"));
    }
}

exports.findCategory = async(req, res, next) => {
    try {
        const list_category = await CategoryModel.find();
        return res.send(list_category);
    } catch (error) {
        return next(new ApiError(500, "Không thể lấy thông tin danh mục!"));
    }
}

exports.updateCategory = async(req, res, next) => {
    try {
        const updateDoc = req.body;
        const options = { returnDocument: "after" };
        const update = await CategoryModel.findByIdAndUpdate(req.params.id, updateDoc, options);
        return res.send(update);
    } catch (error) {
        return next(new ApiError(500, "Không thể cập nhật danh mục sản phẩm!"));
    }
}

exports.deleteCategory = async(req, res, next) => {
    try {
        const options = { returnDocument: "after" };
        const deleteC = await CategoryModel.findByIdAndDelete(req.params.id, options);
        return res.send(deleteC);
    } catch (error) {
        return next(new ApiError(500, "Không thể xóa danh mục sản phẩm!"));
    }
}