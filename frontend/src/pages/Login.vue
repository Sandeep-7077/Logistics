<template> 

<section class="custom-header1 snipcss-PhDvQ">
    <div class="container">
        <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-5 col-12">
            <a href="/">
            <img src="/src/assets/images/one-x-logo2.png" class="img-fluid" alt="OneX – Courier Services">
            </a>
        </div>
        <div class="offset-lg-3 col-lg-5 col-md-8 col-sm-5 col-12">
            <div class="container track-container">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-md-6 col-sm-6 col-6 track-col">
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-md-6 col-sm-6 col-6 customer-login">
                <a href="/" class="customer-login">
                    Customer Login
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>

<section class="login-wrapper snipcss-jrQas">
    <div class="container rounded-lg shadow-lg mt-5 mb-5 ">
        <div class="row">
        <div class="col-12">
            <div class="common-heading text-center mt-5">
            <div class="">
                <h2>
                Login Here
                </h2>
            </div>
            </div>
        </div>
        <div class="col-lg-10 offset-lg-1 mb-5">
            <div class="row align-items-center">
            <div class="col-md-6 mt-5 d-none d-md-block">
                <div class="login-left">
                <img src="/src/assets/images/login.jpg" class="img-fluid" alt="OneX – Courier Services">
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <div class="login-right">
                    <div class="login-box" style="padding:30px;">
                    <div class="input-cover mb-3">
                        <label>Email ID <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Email ID" maxlength="100" v-model="email" autocomplete="off">
                    </div>
                    <div class="input-cover mb-3">
                        <label>Password <span class="text-danger">*</span></label>
                        <input :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Password" maxlength="100" v-model="password" >
                        <i class="bi bi-eye" @click="togglePasswordVisibility"></i>
                    </div>
                    <div class="col-12 style-KW126" id="ErrorMsg">
                        <div class="alert alert-danger" role="alert">
                            <span id="msg"></span>
                        </div>
                    </div>
                    <div class="col-12 style-4NsA9" id="SuccessMsg">
                        <div class="alert alert-success" role="alert">
                            <span id="success"></span>
                        </div>
                    </div>
                    <div class="form-group text-end">
                        <label class="form-check-label">
                            <a href="" id="BtnForgotPass">Forgot Password?</a>
                        </label>
                    </div>
                    <div>
                        <button class="login-btn" id="BtnLogin" v-on:click="login()">Login</button>
                    </div>
                    <div class="mt-3">
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
<Footer />
</template>
<script>
import Footer from '/src/pages/components/Footer.vue';
import axios from 'axios';
export default{
	name: "Login",
    components: {
        Footer
    },
	data(){
		return{
			email:"",
			password:"",
            showPassword: false,
			};
	},
	methods:{
		login(){
			axios
				.post("/api/method/logistics.api.login",{usr:this.email,pwd:this.password,})
				.then((response) => {
					if(response.data.message.success_key != 0){
                        localStorage.setItem( 'token', JSON.stringify(response.data.message.sid) );
						this.$router.push({name:"Home"});
                        // console.log(response.data.message.sid)
					}else{
						alert("Login Credentials do not match.");
					}
				})
				.catch((response) => { alert("You don't have permission to access.Please contact Admin");})
		},
        togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
        },
	},
};
</script>