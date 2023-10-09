<template>
<Header  />
<section >
  <div class="container mt-2">
    <div class="row display">
      <div class="col-lg-6 col-md-4 col-sm-5 col-6">
        <h3 class="fs-5">Welcome {{ customer_name }}</h3>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <p class="text-center" style="font-size: 15px;">Credit Limit: {{ creditlimit }}</p>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <p class="text-center" style="font-size: 15px;">Utilized: 5000</p>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <p class="text-center" style="font-size: 15px;">Available: {{ getAvailable() }}</p>
      </div>
    </div>
    <hr class="border border-grey border-1 opacity-50">
  </div>
</section>
<section>
  <div class="container mb-5">
    <div class="row display mb-5">
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <router-link :to="`/create_shipment`" style="text-decoration: none; color: inherit;">
          <div class="why-choose-us-box">
            <div class="row">
              <div class="col-3">
                <img src="/src/assets/images/icons/1.png" style="width:50px;margin-left: 15px;">
              </div>
              <div class="col-8 justify-content-start">
                <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Create Shipment</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <router-link :to="`/shipment_tracking`" style="text-decoration: none; color: inherit;">
          <div class="why-choose-us-box">
            <div class="row">
              <div class="col-3">
                <img src="/src/assets/images/icons/2.png" style="width:50px;margin-left: 15px;">
              </div>
              <div class="col-8 justify-content-start">
                <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Shipment Tracking</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/3.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Shipment History</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <router-link :to="`/my_profile`" style="text-decoration: none; color: inherit;">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">My Profile</p>
            </div>
          </div>
        </div>
      </router-link>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <router-link :to="`/raise_query`" style="text-decoration: none; color: inherit;">
          <div class="why-choose-us-box">
            <div class="row">
              <div class="col-3">
                <img src="/src/assets/images/icons/5.png" style="width:50px;margin-left: 15px;">
              </div>
              <div class="col-8 justify-content-start">
                <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Raise Query</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/6.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Cancel Shipment</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/7.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Address Book</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/8.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Unbilled Shipment</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Outstanding Amount</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Ledger Detail</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">My Invoice</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Schedule Pickup</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Cancel Pickup</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Reschedule Pickup</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="why-choose-us-box">
          <div class="row">
            <div class="col-3">
              <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
            </div>
            <div class="col-8 justify-content-start">
              <p class="mr-5 pr-4" style="color: black; font-size: 15px;">Download Forms</p>
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
        customer_name: '',
        creditlimit:'',
        }
    },
    async created() {
            const key = this.$cookies.get('sid');
            const user = this.$cookies.get('full_name');
            const response = await axios.get('/api/resource/Customer/'+user, {
                                    headers:{
                                        Authorization: 'token ' + key
                                    }})
            this.customer_name = user;
            this.creditlimit = response.data.data.credit_limits[0].credit_limit
		},

    methods:{
      getAvailable() {
            let value = 0;
            value = this.creditlimit - 5000
            return value;
        },
    },
    // mounted(){
    //     let key = Cookies.get('sid');
    //     if(!key){
    //         this.$router.push({name:"Login"});
    //     }
    // },
}
</script>
