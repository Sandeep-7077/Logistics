<template>
<Header  />
<div class=" container" style="margin-top: 0px !important;margin-bottom: 0px !important;">
    <div class="row justify-content-center">
        <div class=" col ">
            <div class="card-header bg-transparent">
                <div class="row">
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
            </div>
            <div class="card-body">
            <div class="row icon-examples">
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/create_shipment`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/1.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Create Shipment
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/shipment_tracking`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/2.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Shipment Tracking
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/shipment_history`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/3.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Shipment History
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/my_profile`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/4.png" style="width:50px;margin-left: 15px;">
                    <span>
                        My Profile
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/raise_query`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/5.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Raise Query
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/cancel_shipment`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/6.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Cancel Shipment
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/address_book`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/7.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Address Book
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/unbilled_shipment`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/8.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Unbilled Shipment
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/outstanding_amount`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/9.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Outstanding Amount
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/ledger_details`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/10.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Ledger Detail
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/my_invoices`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/11.png" style="width:50px;margin-left: 15px;">
                    <span>
                        My Invoice
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/schedule_pickup`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/12.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Schedule Pickup
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/create_shipment`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/13.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Cancel Pickup
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/create_shipment`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/14.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Reschedule Pickup
                    </span>
                    </div>
                </router-link>
                </div>
                <div class="col-lg-4 col-md-6">
                <router-link :to="`/create_shipment`" type="button" class="btn-icon-clipboard border">
                    <div>
                        <img src="/src/assets/images/icons/15.png" style="width:50px;margin-left: 15px;">
                    <span>
                        Download Forms
                    </span>
                    </div>
                </router-link>
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
