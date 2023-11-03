<template>
<Header/>
<div class="container pb-5">
    <div class="text-center mb-5"> 
        <h1><b>Outstanding Amount</b></h1>
    </div>
    <div class="container rounded-lg shadow-lg p-4 mb-3">
        <form @submit.prevent="__">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="tracking">Date From</label>
                    <input type="date" required class="form-control" v-model="dt_from">
                </div>
                <div class="form-group col-md-4">
                    <label for="order">Date To</label>
                    <input type="date" required class="form-control" v-model="dt_to">
                </div>
                <div class="form-group col-md-4">
                    <label for="order">Order No.</label>
                    <input type="text" required class="form-control" placeholder="Order Number" v-model="order">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="order">Tracking No.</label>
                    <input type="text" required class="form-control" placeholder="Tracking Number" v-model="tracking">
                </div>
                <div class="form-group col-md-4">
                    <label for="order">Invoice No.</label>
                    <input type="text" required class="form-control" placeholder="Invoice Number" v-model="invoice">
                </div>
                <div class="col-md-4" style="margin-top: 35px;"> 
                    <button type="submit" class="btn btn-danger col-5 ml-2 rounded-pill">Search</button>
                    <button type="submit" class="btn btn-success col-5 ml-2 rounded-pill">Export</button>
                </div>
            </div>
        </form>
    </div>
    <div class="rounded-lg shadow-lg p-3">
        <div class="row note m-1">
            <div class="col-8">
                <h6>Outstanding Amount : AED 0</h6>
            </div>
            <div class="col-4 text-right">
                <h6>No Record Found!!!</h6>
            </div>
        </div>
    </div>
</div>
<Footer/>
</template>
<script>
import Header from '/src/pages/components/Header.vue';
import Footer from '/src/pages/components/Footer.vue';
import axios from 'axios';
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            priority_list:[],
            category_list:[],
            tracking:'',
            order:'',
            category:'',
            priority:'',
            remarks:'',
            activeTab: 'nav-tab-export', // Set the initial active tab
        };
    },
    async created() {
            const key = this.$cookies.get('sid');
            const response = await axios.get('/api/resource/Issue Priority', {
                                    headers:{
                                        Authorization: 'token ' + key
                                    }})
            const response2 = await axios.get('/api/resource/Issue Type', {
                                    headers:{
                                        Authorization: 'token ' + key
                                    }})
            this.priority_list = response.data.data;
            this.category_list = response2.data.data;
        },
    methods: {
        async postissue() {
            const values={
                tracking:this.tracking ,
                order:this.order ,
                category:this.category ,
                priority:this.priority ,
                remarks:this.remarks ,
                };
                const key = this.$cookies.get('sid');
                const response = await axios
                .post("/api/method/logistics.api.raise_query",{data:values},{
                        headers:{
                            Authorization: 'token'+ key
                        }})
                .then((response) => {
                    this.$router.push({name:"Home"});
                })
                .catch((response) => {
                    alert("Values not entered properly");
                })
        },
    },
}
</script>