<template>
<section class="custom-header snipcss-Id4Qy">
    <div>
        <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-5 col-12">
            <a href="/">
            <img src="/src/assets/images/onex_logo.jpeg" style="width:100px; margin-left: 72px; margin-top: 12px;" alt="OneX – Courier Services">
            </a>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <ul class="nav justify-content-center navbar">
            <li class="nav-item">
                <router-link :to="`/dashboard`" class="nav-link active" style="text-decoration: none; color: inherit;">Home</router-link>
                <!-- <a class="nav-link active" href="#" style="color:black">Home</a> -->
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#" style="color:black">Shipment Tracking</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#" style="color:black">More</a>
            </li>
            <li class="nav-item">
                <i class="bi bi-bell-fill"></i>
                <span class="badge position-absolute top-1 translate-middle" style="color:red">
                0 <!-- Your count goes here -->
                </span>
            </li>
            </ul>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div class="navbar-collapse" id="navbar-list-4" style="margin-top: 60px">
            <ul class="navbar-nav">
                <li class="nav-item dropbtn">
                <div class="dropdown">
                    <a class="nav-link dropdown-toggle" href="#" >
                    <img src="/src/assets/images/onex_logo.jpeg" width="30" height="30" class="rounded-circle border">
                    {{ customer_name }}
                    </a>
                    <div class="dropdown-content">
                    <a v-on:click="logout()" class="dropdown-item" >Log Out</a>
                    </div>
                </div>
                </li>   
            </ul>
            </div>
        </div>
        </div>
    </div>
</section>
</template>
<script>
import axios from 'axios';
export default{
    data() {
        return {
        customer_name: '',
        }
    },
    async created() {
            const user = this.$cookies.get('full_name');
            this.customer_name = user;
		},
    methods:{
        async logout(){
			axios
				.post("/api/method/logistics.api.logout")
				.then((response) => {
						this.$router.push({name:"Login"});
				})
				
		},
    },
};
</script>