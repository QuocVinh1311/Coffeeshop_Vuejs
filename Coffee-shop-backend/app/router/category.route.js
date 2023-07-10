const express = require('express');
const Category = require('../controller/categogy.controller');

const router = express.Router();

router.route("/create").post(Category.createCategory);

router.route("/").get(Category.findCategory);

router.route("/update/:id").get(Category.updateCategory);

router.route("/delete/:id").delete(Category.deleteCategory);

module.exports = router;