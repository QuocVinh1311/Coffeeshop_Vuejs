<template>

<NavAdmin />
    <div class="container-fluid" style="padding: 20px; margin-top: 120px;">
    <h1>Quản lí sản phẩm</h1>
            <router-link to="/admin/addcategory"  class="button">
                Thêm Danh Mục
            </router-link>
        <div class="row" style="background-color: white; margin-top: 20px;">
         
            <table class="table  mt-3">
                <thead>
                    <tr>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in category_list" :key="category._id">
                        <td>{{ category.name_category}}</td>
                        <td>
                            <router-link :to="{name: 'EditCategory', params: {id:`${category._id}`}}" class="edit-button">Sửa</router-link><br/>

                            <button id="btn_delete_category" class="delete-button"  @click="deleteCategory(category._id)">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import NavAdmin from '../components/NavAdmin.vue';
import CategoryService from '../services/category.service';
// import OrderService from '../services/order.service';
export default{
    components:{
        NavAdmin,
    },

    data(){
        return{
            category_list: [], 
        }
    },

    created(){
        this.getCategory()
    },

    methods:{
        async getCategory(){
            try{
        
                const response = await CategoryService.getCategory();
                this.category_list = response;

            }catch(error){
                alert("Đã xảy ra lỗi khi lấy thông tin danh mục");
            }
        },

        async deleteCategory(id){
            const confirm = window.confirm("Bạn có chắc muốn xóa danh mục!");
            if(confirm){
                try{

                    await CategoryService.deleteCategory(id);
                    alert("Xóa sản phẩm thành công!");
                    this.$router.push({name: "AdminCategory"});
                }catch(error){
                    alert("Có lỗi xảy ra khi xóa sản phẩm");
                    this.$router.push({name: "AdminCategory"});
                } 

            }
               
        },
    }

}

</script>