<template>
<Header/>
<div class="container py-5">
    <h1 style="padding-left: 380px;padding-bottom: 20px;"><b></b>Create Shipment</h1>
    <div class="row">
    <div class="col-lg-8 mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-5">
        <!-- Credit card form tabs -->
        <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
            <li class="nav-item">
            <a href="#nav-tab-export" class="nav-link  rounded-pill" @click="changeTab('nav-tab-export')" :class="{ 'active': activeTab === 'nav-tab-export' }">
                <i class="fa fa-credit-card"></i> Export
            </a>
            </li>
            <li class="nav-item">
            <a href="#nav-tab-import" class="nav-link  rounded-pill" @click="changeTab('nav-tab-import')" :class="{ 'active': activeTab === 'nav-tab-import' }">
                <i class="fa fa-paypal"></i> Import
            </a>
            </li>
        </ul>
        <!-- End -->
        <!-- Credit card form content -->
        <div class="tab-content">
            <!-- credit card info-->
            <div id="nav-tab-export" class="tab-pane fade" :class="{ 'show active': activeTab === 'nav-tab-export' }">
            <!-- ... (Credit Card tab content) ... -->
            <form role="form">
                <div class="row">
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Origin(UAE Only)<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="origin_uae" >
                        <!-- <input type="text" required class="form-control" v-model="origin_uae" @input="searchPlace('origin')"> -->
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Origin City<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="origin_city">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Destination<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="destination">
                        <!-- <input type="text" required class="form-control" v-model="destination" @input="searchPlace('destination')"> -->
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Destination Pincode<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="destination_pincode">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Destination City<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="destination_city">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Shipment Type<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <div class="select-wrapper">
                            <select required class="form-control" v-model="shipment_type">
                                <option value="">Select</option>
                                <option value="Air freight">Air freight</option>
                                <option value="Ocean freight">Ocean freight</option>
                                <option value="Ground freight">Ground freight</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Total Pieces<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="total_pieces">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Parcel Weight in Kg<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="weight">
                    </div>
                    </div>
                </div>
                <button type="button" v-on:click="getquote()" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> GET QUOTE  </button>
            </form>
            </div>
            <!-- End -->
            <!-- credit card info-->
            <div id="nav-tab-import" class="tab-pane fade" :class="{ 'show active': activeTab === 'nav-tab-import' }">
            <!-- ... (Credit Card tab content) ... -->
            <form role="form">
                <div class="row">
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Origin(UAE Only)<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="origin_uae" >
                        <!-- <input type="text" required class="form-control" v-model="origin_uae" @input="searchPlace('origin')"> -->
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Origin City<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="origin_city">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Destination<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="destination">
                        <!-- <input type="text" required class="form-control" v-model="destination" @input="searchPlace('destination')"> -->
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Destination Pincode<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="destination_pincode">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Destination City<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <input type="text" required class="form-control" v-model="destination_city">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip" title="Three-digits code on the back of your card">Shipment Type<i class="bi bi-asterisk" style="color:red;font-size: 7px;"></i></label>
                        <div class="select-wrapper">
                            <select required class="form-control" v-model="shipment_type">
                                <option value="">Select</option>
                                <option value="Air freight">Air freight</option>
                                <option value="Ocean freight">Ocean freight</option>
                                <option value="Ground freight">Ground freight</option>
                            </select>
                        </div>
                    </div>
                    </div>
                </div>
                <button type="button" v-on:click="getquote()" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> GET QUOTE  </button>
            </form>
            </div>
            <!-- End -->
        </div>
        <!-- End -->

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
// import { gmapApi } from 'vue2-google-maps';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            origin_uae:'',
            origin_city:'',
            destination:'',
            destination_pincode:'',
            destination_city:'',
            shipment_type:'',
            total_pieces:'',
            weight:'',
             activeTab: 'nav-tab-export', // Set the initial active tab
        };
    },
    methods: {
        // searchPlace(type) {
        //     const inputField = type === 'origin' ? this.origin : this.destination;

        //     if (inputField && this.autocompleteService) {
        //         this.autocompleteService.getPlacePredictions(
        //         { input: inputField },
        //         (predictions, status) => {
        //             if (status === 'OK') {
        //             if (type === 'origin') {
        //                 // Handle origin predictions
        //                 // You may want to display the predictions in a dropdown or list
        //             } else if (type === 'destination') {
        //                 // Handle destination predictions
        //                 // You may want to display the predictions in a dropdown or list
        //             }
        //             }
        //         }
        //         );
        //     }
        //     },
        async getquote() {
            const values={
                origin_uae:this.origin_uae,
                origin_city:this.origin_city,
                destination:this.destination,
                destination_pincode:this.destination_pincode,
                destination_city:this.destination_city,
                shipment_type:this.shipment_type,
                total_pieces:this.total_pieces,
                weight:this.weight,
                };
                const key = this.$cookies.get('sid');
                const response = await axios.post("/api/method/logistics.api.create_shipment",{data:values},{
                    headers:{
                        Authorization: 'token'+ key
                    }
                })
                if(response.status == 200) {
                    this.$router.push({name:"Home"});
                }
        },
        changeTab(tabId) {
            console.log("changed");
        this.activeTab = tabId; // Update the activeTab data property
        },
    },
    // mounted() {
    //     // this.autocompleteService = new gmapApi.places.AutocompleteService();
    // },
};
</script>
<style>
.black-background {
  background-color: rgb(236, 235, 233); /* Add the background color here */
}
</style>