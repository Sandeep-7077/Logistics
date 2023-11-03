<template>
<Header/>
<div class="container pb-5">
    <div class="text-center mb-5"> 
        <h1><b>Create Shipment</b></h1>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-lg-12 mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-5">
        <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
            <li class="nav-item">
            <a href="#nav-tab-export" class="nav-link rounded-pill" @click="changeTab('nav-tab-export')" :class="{ 'active bg-danger': activeTab === 'nav-tab-export' , 'link-danger': activeTab === 'nav-tab-import' }">
                Export
            </a>
            </li>
            <li class="nav-item">
            <a href="#nav-tab-import" class="nav-link rounded-pill" @click="changeTab('nav-tab-import')" :class="{ 'active bg-danger': activeTab === 'nav-tab-import', 'link-danger': activeTab === 'nav-tab-export' }">
                Import
            </a>
            </li>
        </ul>
        <!-- Export info-->
        <div class="tab-content">
            <div id="nav-tab-export" class="tab-pane fade" :class="{ 'show active': activeTab === 'nav-tab-export' }">
            <form @submit.prevent="getquote"> 
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group mb-4">
                            <label data-toggle="tooltip">Origin(UAE Only)<sup> <i class="bi bi-asterisk"></i></sup></label>
                            <input id="origin" type="text" required class="form-control" v-model="origin_uae"  @input="updateOrigin" >
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group mb-4">
                            <label data-toggle="tooltip"  >Origin City<sup> <i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" required class="form-control" v-model="origin_city">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group mb-4">
                            <label data-toggle="tooltip"  >Destination<sup> <i class="bi bi-asterisk"></i></sup></label>
                            <input id="destination" type="text" required class="form-control" v-model="destination" @input="updateDestination">
                        </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Destination Pincode<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="destination_pincode">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Destination City<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="destination_city">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Shipment Type<sup> <i class="bi bi-asterisk"></i></sup></label>
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
                        <label data-toggle="tooltip"  >Total Pieces<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="total_pieces" @input="createRows">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Parcel Weight in Kg<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="weight">
                    </div>
                    </div>
                </div>
                <div class="col-md-10" v-if="showTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Weight(KGS)<sup> <i class="bi bi-asterisk"></i></sup></th>
                                <th>Length(CM)<sup> <i class="bi bi-asterisk"></i></sup></th>
                                <th>Width(CM)<sup> <i class="bi bi-asterisk"></i></sup></th>
                                <th>Height(CM)<sup> <i class="bi bi-asterisk"></i></sup></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in total_pieces" :key="index">
                                <td><input type="text" required class="form-control mb-1" ></td>
                                <td><input type="text" required class="form-control mb-1" ></td>
                                <td><input type="text" required class="form-control mb-1" ></td>
                                <td><input type="text" required class="form-control mb-1" ></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr style="font-size: 14px;">
                                <td>Acutal Weight: 25.000 KG</td>
                                <td colspan="2">Volumetric Weight(L*W*H/5000): 2.433 KG</td>
                                <td>Charged Weight: 25.000 KG</td>
                            </tr>
                            <tr>
                                <td colspan="4" style="font-size: 14px; color: red;">Please note Invoice will be raised on Actual or Volumetric Weight, which is higher.</td> 
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="text-center"> 
                    <!-- <button type="submit" class="subscribe btn btn-danger col-4 rounded-pill shadow-sm"> GET QUOTE  </button> -->
                    <router-link :to="`/select_carrier`" type="button" class="subscribe btn btn-danger col-4 rounded-pill shadow-sm"> GET QUOTE </router-link>
                </div>
            </form>
            </div>
            <!-- End -->
            <!-- Import info-->
            <div id="nav-tab-import" class="tab-pane fade" :class="{ 'show active': activeTab === 'nav-tab-import' }">
            <!-- ... (Credit Card tab content) ... -->
            <form role="form">
                <div class="row">
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Origin(UAE Only)<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="origin_uae" >
                        <!-- <input type="text" required class="form-control" v-model="origin_uae" @input="searchPlace('origin')"> -->
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Origin City<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="origin_city">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Destination<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="destination">
                        <!-- <input type="text" required class="form-control" v-model="destination" @input="searchPlace('destination')"> -->
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Destination Pincode<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="destination_pincode">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Destination City<sup> <i class="bi bi-asterisk"></i></sup></label>
                        <input type="text" required class="form-control" v-model="destination_city">
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="form-group mb-4">
                        <label data-toggle="tooltip"  >Shipment Type<sup> <i class="bi bi-asterisk"></i></sup></label>
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
                <div class="text-center"> 
                    <button type="button" class="subscribe btn btn-danger col-4 rounded-pill shadow-sm"> GET QUOTE  </button>
                </div>            
            </form>
            </div>
            <!-- End -->
        </div>
    </div>
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
        Footer,
    },
    data() {
        return {
        origin_uae: "",
        origin_city: "",
        destination: "",
        destination_pincode: "",
        destination_city: "",
        shipment_type: "",
        total_pieces: 0,
        weight: "",
        activeTab: "nav-tab-export",
        showTable: false,
        };
    },
    methods: {
        async loadGoogleMapsAPI() {
            const googleMapsApiKey = "AIzaSyD364zQNQWLRtQyqslftm3bFlo1SxsVbCk"; // Replace with your API key
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            return new Promise((resolve) => {
                script.onload = () => {
                resolve();
                };
            });
        },
        async updateOrigin() {
            await this.loadGoogleMapsAPI();

            var origin = new google.maps.places.Autocomplete(
                document.getElementById("origin")
            );
            origin.setComponentRestrictions({
                country: ["sa"],
            });
            origin.addListener("place_changed", () => {
                var place = origin.getPlace();

                if (place.address_components) {
                this.origin_uae = place.formatted_address;
                this.origin_city = "";

                place.address_components.forEach((component) => {
                    if (component.types.includes("locality")) {
                    this.origin_city = component.long_name;
                    }
                });
                }
            });
        },
        async updateDestination() {
            await this.loadGoogleMapsAPI();

            var destination = new google.maps.places.Autocomplete(
                document.getElementById("destination")
            );

            destination.addListener("place_changed", () => {
                var place = destination.getPlace();

                if (place.address_components) {
                this.destination = place.formatted_address;
                this.destination_pincode = "";
                this.destination_city = "";

                place.address_components.forEach((component) => {
                    if (component.types.includes("postal_code")) {
                    this.destination_pincode = component.long_name;
                    } else if (component.types.includes("locality")) {
                    this.destination_city = component.long_name;
                    }
                });
                }
            });
        },
        createRows() {
            const num = parseInt(this.total_pieces);
            if (Number.isInteger(num) && num >= 0) {
                this.showTable = true;
                this.total_pieces = num;
            } else {
                this.showTable = false;
                this.total_pieces = 0;
            }
        },
        async getquote() {
            const values = {
                origin_uae: this.origin_uae,
                origin_city: this.origin_city,
                destination: this.destination,
                destination_pincode: this.destination_pincode,
                destination_city: this.destination_city,
                shipment_type: this.shipment_type,
                total_pieces: this.total_pieces,
                weight: this.weight,
            };
            const key = this.$cookies.get("sid");
            const response = await axios
            .post("/api/method/logistics.api.create_shipment",{ data: values },{
                headers: {
                    Authorization: "token" + key,
                }})
            .then((response) => {
                this.$router.push({ name: "Home" });
            })
            .catch((response) => { 
                alert("Values not entered properly");
            })
        },
        changeTab(tabId) {
            this.activeTab = tabId;
        },
    },
    mounted() {
        this.updateOrigin();
        this.updateDestination();
    },
};
</script>
<style>
th {
    background: none;
    color: black;
    font-weight: bold;
    cursor: none;
}
tr:nth-of-type(2n+1) {
    background: none !important;
}
</style>