<script>
import CategoryService from '../services/category.service';
import NavAdmin from '../components/NavAdmin.vue';
export default{
    components:{
        NavAdmin,
    },

    data(){
        return{
            name_category: '',
        }
    },

 

    methods:{
        // async getAllProductCategory(){ //hàm lấy danh sách tất cả các loại sản phẩm
        //     try{
        //         this.category_list = await ProductCategoryService.getAllProductCategory();
        //     }catch(error){
        //         alert("Có lỗi xảy ra khi lấy thông tin các loại sản phẩm");
        //     }
        // },

        async addNewCategory(){
            const confirm = window.confirm("Bạn có chắc muốn thêm sản phẩm này không?");
            if(confirm){
                try{
                    
                    const response = await CategoryService.createCategory({
                        name_category: this.name_category,
    
                    });
                    alert("Thêm danh mục mới thành công!");
                    this.$router.push({name: "AdminCategory"});
                }catch(error){
                    alert("Có lỗi xảy ra khi thêm danh mục!");
                } 
            }
        },

        inputOnlyNumber(event){
            if(event.keyCode<48 || event.keyCode>57){
                event.preventDefault();
            }else{
                return true;
            }
        }
    }
}
</script>
<template>       
    <NavAdmin></NavAdmin>
    <div class="container main">
        <div class="title">
                <i class="fa-solid fa-grid-2-plus"></i>Thêm Danh Mục Sản Phẩm
            </div>
        <div class="row ">
            <div class="col-12" id="contain_form_add_category">
                <form @submit.prevent="addNewCategory()">
                    <div class="mt-3">
                        <label for="input_namecategory" class="form-label">Nhập tên danh mục muốn thêm <span>*</span></label>
                        <input type="text" id="input_namecategory" class="form-control" required v-model="name_category">
                    </div>
                   
                    <button class="mt-4" id="btn_add_product" type="submit">Thêm danh mục</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.main {
    margin: 120px auto;
    font-family: serif;
}

.title{
    text-align: center;
    font-size: 45px;
    color: #ff4500;
}
form span{
    color: red;
}
</style>