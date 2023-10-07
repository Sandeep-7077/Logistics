<template>
<Header/>
<div class="container py-5">
    <h1 style="padding-left: 380px;padding-bottom: 20px;"><b></b>Raise Query</h1>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="tracking">Tracking No.</label>
            <input type="test" class="form-control" id="tracking" placeholder="Tracking Number" v-model="tracking">
            </div>
            <div class="form-group col-md-6">
            <label for="order">Order No.</label>
            <input type="text" class="form-control" id="order" placeholder="Order Number" v-model="order">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputState">Select Category</label>
                <select id="inputState" class="form-control" v-model="category">
                    <option selected>Choose...</option>
                    <option v-for="category in category_list" :key="category">{{ category.name }}</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="inputState">Select Priority</label>
                <select id="inputState" class="form-control" v-model="priority">
                    <option selected>Choose...</option>
                    <option v-for="priority in priority_list" :key="priority">{{ priority.name }}</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Your Complain/Remarks Here</label>
            <textarea type="text" class="form-control" id="inputAddress" placeholder="comment" v-model="remarks"></textarea>
        </div>
        <button type="submit" v-on:click="postissue()" class="btn btn-primary col-3">Save</button>
    </form>
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
                const res = await axios.post("/api/method/logistics.api.raise_query",{data:values},{
                        headers:{
                            Authorization: 'token'+ key
                        }
                    })

                if(res.status == 200) {
                    this.$router.push({name:"Home"});
                }
        },
        changeTab(tabId) {
            console.log("changed");
        this.activeTab = tabId; // Update the activeTab data property
        },
    },
}
</script>