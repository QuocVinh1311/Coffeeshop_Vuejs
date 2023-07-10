<script>
import CategoryService from '../services/category.service';
import NavAdmin from '../components/NavAdmin.vue';
export default{
    components:{
        NavAdmin,
    },

    data(){
        return{
            // category_list: [], //danh sách tất cả các loại sản phẩm trong DB
            name_category: '',
        }
    },

    created(){
         this.getCategory()
    },

    methods:{
        async getCategory(){
            this.name_category = await CategoryService.getCategory(this.$route.params.id);
            
        },
        async updateCategory(){
            const confirm = window.confirm("Bạn muốn cập nhật sản phẩm này?");
            if(confirm){
                try{
                    const response = await CategoryService.updateCategory({
                        name_category: this.name_category,
                    }, this.$route.params.id);
                    alert("Cập nhật danh mục sản phẩm thành công");
                    this.$router.push({name: "AdminCategory"});
                }catch(error){
                    alert("Có lỗi xảy ra khi cập nhật danh mục sản phẩm");
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
    <NavAdmin />
    <div class="container main">
        <div class="title">
                <i class="fa-solid fa-grid-2-plus"></i>Cập nhật danh mục sản phẩm
            </div>
        <div class="row ">
            <div class="col-12" id="contain_form_add_product">
                <form @submit.prevent="updateCategogy()">
                    <div class="mt-3">
                        <label for="input_namecategory" class="form-label">Nhập tên danh mục bạn muốn thay đổi <span>*</span></label>
                        <input type="text" id="" class="form-control" required v-model="name_category">
                    </div>
                    <button class="mt-4 button" id="btn_update_category" type="submit">Cập nhật danh mục</button>
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