<template>
<Header/>
<div class="container py-5">
    <div class="text-center mb-5"> 
        <h1><b>Raise Query</b></h1>
    </div>
    <div class="container rounded-lg shadow-lg p-5">
        <form @submit.prevent="postissue">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="tracking">Tracking No.</label>
                    <input type="test" required class="form-control" id="tracking" placeholder="Tracking Number" v-model="tracking">
                </div>
                <div class="form-group col-md-6">
                    <label for="order">Order No.</label>
                    <input type="text" required class="form-control" id="order" placeholder="Order Number" v-model="order">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputState">Select Category</label>
                    <select required class="form-control" v-model="category">
                        <option value="">Select</option>
                        <option v-for="category in category_list" :key="category">{{ category.name }}</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputState">Select Priority</label>
                    <select required class="form-control" v-model="priority">
                        <option value="">Select</option>
                        <option v-for="priority in priority_list" :key="priority">{{ priority.name }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Your Complain/Remarks Here</label>
                <textarea type="text" required class="form-control" id="inputAddress" placeholder="comment" v-model="remarks"></textarea>
            </div>
            <div class="text-center"> 
                <button type="submit" class="btn btn-danger col-4 rounded-pill">Save</button>
            </div>
            
        </form>
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
                subject:this.order ,
                issue_type:this.category ,
                priority:this.priority ,
                description:"("+this.tracking+ ")" +this.remarks,
                };
                const key = this.$cookies.get('sid');
                const response = await axios
                .post("/api/resource/Issue",{data:values},{
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