<script>
import NavAdmin from '../components/NavAdmin.vue';
import OrderService from '../services/order.service';
export default{
    components:{
        NavAdmin,
    },

    data(){
        return{
            detailOrder: {},
            status_order: '',
            disableButton: false,
        }
    },

    created(){
        this.getDetailOrderByID()
    },

    methods:{
        async getDetailOrderByID(){
            try{
                this.detailOrder = await OrderService.getOrderById(this.$route.params.id);
                this.status_order = this.detailOrder.status;
                if(this.detailOrder.status == "Đã hủy"){
                    this.disableButton = true;
                }
                if(this.detailOrder.status == "Đã nhận hàng"){
                    this.disableButton = true;
                }
            }catch(error){
                alert("Có lỗi xảy ra khi lấy thông tin chi tiết đơn hàng");
            }
        },

        async updateStatusOrder(){
            if(confirm){
                try{   
                    const response = await OrderService.updateOrder({status: this.status_order}, this.detailOrder._id)
                    alert("Cập nhật trạng thái đơn hàng thành công");
                }catch(error){
                    alert('Có lỗi xảy ra khi cập nhật đơn hàng');
                }
            }
        },

        async cancelOrder(){
            const confirm = window.confirm("Bạn có chắc muốn hủy đơn hàng");
            if(confirm){
                try{
                    const response = await OrderService.cancelOrderById({
                        products: this.detailOrder.products,
                        status: "Đã hủy",
                    }, this.detailOrder._id);
                    this.disableButton = true;
                    alert("Đã hủy đơn hàng thành công");
                    this.getDetailOrderByID();
                }catch(error){
                    alert("Có lỗi xảy ra khi hủy đơn hàng");
                }
            }
        }
    }
}
</script>

<template>
    <NavAdmin></NavAdmin>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 text-center" style="background-color: white;">
                <h4>Thông tin chi tiết của đơn hàng</h4>
                <hr>

                <p>Mã đơn hàng: {{detailOrder._id}}</p>
                <p>Tên người nhận: {{detailOrder.fullname }}</p>
                <p>Số điện thoại: {{detailOrder.phonenumber}}</p>
                <p>Email: {{ detailOrder.email }}</p>
                <p>Địa chỉ nhận: {{ detailOrder.address }}</p>
                <p>Tổng: {{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(detailOrder.total) }}</p>

                <p v-if="disableButton == true">Trạng thái: {{ detailOrder.status }}</p>
                <div v-else-if="disableButton == false">
                    <label for="input_status_order">Trạng thái:</label>
                    <select class="input_status_order" v-model="status_order">
                        <option value="Chưa xử lý">Chờ xử lý</option>
                        <option value="Đã xử lý">Đã xử lý</option>
                        <option value="Đang giao hàng">Đang giao hàng</option>
                        <option value="Đã nhận hàng">Đã nhận hàng</option>
                    </select>
                </div>

                <div class="mt-4">
                    <button :disabled="disableButton" @click="cancelOrder()" class="cancel_order">Hủy đơn hàng</button>
                    <button :disabled="disableButton" @click="updateStatusOrder()" class="update_order">Cập nhật</button>           
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>

.update_order{
    background-color: #ff4500;
    border: none;
    border-radius:20px;
    color:#fff;
    padding: 5px 30px;
    transition: 0.4s;
}

.cancel_order{
    background-color: #202020;
    color:#fff;
    margin-right: 10px;
    border: none;
    border-radius:20px;
    padding: 5px 30px;
    transition: 0.4;
}

.update_order:hover, .cancel_order:hover{
    padding: 5px 40px;
}
.btn_cancel_order, .btn_update_order{
    border-radius: 5px;
}

.input_status_order{
    margin-left: 20px;
}
</style>