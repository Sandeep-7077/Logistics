<template>
<Header />
<div class="container my-5">
    <div class="text-center mb-5"> 
        <h1><b>My Profile</b></h1>
    </div>
    <div class="row gutters">
    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 rounded-lg shadow-lg">
    <div class="card h-100">
        <div class="card-body">
            <div class="account-settings">
                <div class="user-profile">
                    <div class="user-avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin">
                    </div>
                </div>
                <div class="about">
                    <a href="#"> <i class="bi bi-upload"></i><p>Upload Image</p></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 rounded-lg shadow-lg">
    <div class="card h-100">
        <div class="card-body">
            <div class="row gutters">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" class="form-control" id="fullName"  v-model="profileDetails.name" placeholder="Enter full name" readonly>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="eMail">Email</label>
                        <input type="email" class="form-control" id="eMail" v-model="profileDetails.email" placeholder="Enter email ID">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" id="phone" v-model="profileDetails.phone" placeholder="Enter phone number">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="Address">Address</label>
                        <input type="text" class="form-control" id="website" v-model="profileDetails.address" placeholder="Address">
                    </div>
                </div>
            </div>
            <div class="row gutters">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="Street">Country</label>
                        <input type="name" class="form-control" id="Street" v-model="profileDetails.country" placeholder="Enter Country">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="ciTy">City</label>
                        <input type="name" class="form-control" id="ciTy" v-model="profileDetails.city" placeholder="Enter City">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="sTate">State</label>
                        <input type="text" class="form-control" id="sTate" v-model="profileDetails.state" placeholder="Enter State">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="zIp">Pin Code</label>
                        <input type="text" class="form-control" id="zIp" v-model="profileDetails.pin_code" placeholder="Pin Code">
                    </div>
                </div>
            </div>
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
                        <button type="button" v-on:click="update()" name="submit" class="btn btn-success rounded-pill col-4">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</div>
<Footer />
</template>
<script>
import Header from '/src/pages/components/Header.vue';
import Footer from '/src/pages/components/Footer.vue';
import axios from 'axios';
export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            profileDetails: [],
            full_name: '',
        }
    },
    async created() {
        const user = this.$cookies.get('full_name');
        const key = this.$cookies.get('sid');
        const response = await axios.get("/api/resource/Profile/"+user,{
                                headers:{
                                    Authorization: 'token ' + key
                                }})
        console.log(response.data);
        this.profileDetails = response.data.data
		},
    methods: {
        async update() {
            const values={
                email:this.profileDetails.email,
                phone:this.profileDetails.phone ,
                address:this.profileDetails.address ,
                country:this.profileDetails.country ,
                city:this.profileDetails.city ,
                state:this.profileDetails.state ,
                pin_code:this.profileDetails.pin_code ,
                };
                const user = this.$cookies.get('full_name');
                const key = this.$cookies.get('sid');
                const res = await axios.put("/api/resource/Profile/"+user,{data:values},{
                        headers:{
                            Authorization: 'token'+ key
                        }
                    })
                if(res.status == 200) {
                    this.$router.push({name:"Home"});
                }
        },
    }
}
</script>
<style>
    .account-settings .user-profile {
        margin: 0 0 1rem 0;
        padding-bottom: 1rem;
        text-align: center;
    }
    .account-settings .user-profile .user-avatar {
        margin: 0 0 1rem 0;
    }
    .account-settings .user-profile .user-avatar img {
        width: 200px;
        height: 200px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        border-style: dotted;
    }
    .account-settings .user-profile h5.user-name {
        margin: 0 0 0.5rem 0;
    }
    .account-settings .user-profile h6.user-email {
        margin: 0;
        font-size: 0.8rem;
        font-weight: 400;
        color: #9fa8b9;
    }
    .account-settings .about {
        margin: 2rem 0 0 0;
        text-align: center;
    }
    .account-settings .about h5 {
        margin: 0 0 15px 0;
        color: #007ae1;
    }
    .account-settings .about p {
        font-size: 0.825rem;
    }
    .form-control {
        border: 1px solid #cfd1d8;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        font-size: .825rem;
        background: #ffffff;
        color: #2e323c;
    }
    
    .card {
        background: #ffffff;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 0;
        margin-bottom: 1rem;
    }
</style>