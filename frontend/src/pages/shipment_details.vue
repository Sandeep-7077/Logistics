<template>
<Header/>
<div class="pb-5">
    <div class="row mb-5"> 
        <div class="col-md-3">
        <div class="border-item rounded-3 shadow">
                <div class="border-head">
                <div class="border rounded-3 shadow bg-white">
                    <img
                    src="/src/assets/images/1.png"
                    style="
                        height: 66px;
                        padding: 7px;
                    "
                    />
                </div>
                </div>
                <h1 class="text-center" style="font-weight: bold;">1<sup style="font-size: large;vertical-align: super;font-weight: lighter;">Shipment Booking</sup></h1>
            </div>
        </div>
        <div class="col-md-3">
        <div class="border-item rounded-3 shadow">
                <div class="border-head">
                <div class="border rounded-3 shadow bg-white">
                    <img
                    src="/src/assets/images/2.png"
                    style="
                        height: 66px;
                        padding: 7px;
                    "
                    />
                </div>
                </div>
                <h1 class="text-center" style="font-weight: bold;">2<sup style="font-size: large;vertical-align: super;font-weight: lighter;">Select Carrier</sup></h1>
            </div>
        </div>
        <div class="col-md-3">
        <div class="border-item rounded-3 shadow" style="background-color: red;">
                <div class="border-head">
                <div class="border rounded-3 shadow bg-white">
                    <img
                    src="/src/assets/images/3.png"
                    style="
                        height: 66px;
                        padding: 7px;
                    "
                    />
                </div>
                </div>
                <h1 class="text-center" style="font-weight: bold;">3<sup style="font-size: large;vertical-align: super;font-weight: lighter;">Shipment Details</sup></h1>
            </div>
        </div>
        <div class="col-md-3">
        <div class="border-item rounded-3 shadow">
                <div class="border-head">
                <div class="border rounded-3 shadow bg-white">
                    <img
                    src="/src/assets/images/4.png"
                    style="
                        height: 66px;
                        padding: 7px;
                    "
                    />
                </div>
                </div>
                <h1 class="text-center" style="font-weight: bold;">4<sup style="font-size: large;vertical-align: super;font-weight: lighter;">Booking Confirmed</sup></h1>
            </div>
        </div>
    </div>
    <div class="row col-md-12">
        <div class="col-md-6">
                <div class="card rounded-lg shadow p-4">
                    <form class="row">
                        <div class="col-md-4">
                            <h3 style="font-weight: bold;font-family: monospace;">Shipper</h3>
                        </div>
                        <div class="col-md-8">
                            <div class="form-group">
                                <select v-model="selectedAddress" @change="fetchAddressDetails" class="custom-select">
                                <option value="">--Select Shipper Details--</option>
                                <option v-for="address in address_list" :key="address">{{ address.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label for="name">Shipper Name <sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" v-model="addressDetails.address_title" placeholder="Shipper Name">
                            </div>
                            <div class="form-group">
                            <label for="phone">Shipper Phone No.<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" v-model="addressDetails.phone" placeholder="Shipper Phone No.">
                            </div>
                            <div class="form-group">
                            <label for="email">Shipper Address 2</label>
                            <input type="text" class="form-control" v-model="addressDetails.address_line2" placeholder="Shipper Address 2">
                            </div>
                            <div class="form-group">
                            <label for="address">Shipper Zip Code</label>
                            <input type="text" class="form-control" v-model="addressDetails.pincode" placeholder="Shipper Zip Code">
                            </div>   
                            <div class="form-group">
                            <label for="income">Shipper City<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" v-model="addressDetails.city" placeholder="Shipper City">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label for="name">Shipper Company</label>
                            <input type="text" class="form-control" v-model="addressDetails.company" placeholder="Shipper Company">
                            </div>
                            <div class="form-group">
                            <label for="dob">Shipper Address 1<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" v-model="addressDetails.address_line1" placeholder="Shipper Address 1">
                            </div>
                            <div class="form-group">
                            <label for="email">Shipper Country<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" v-model="addressDetails.country" placeholder="Shipper Country">
                            </div>
                            <div class="form-group">
                            <label for="address">Shipper State</label>
                            <input type="text" class="form-control" v-model="addressDetails.state" placeholder="Shipper State">
                            </div>   
                            <div class="form-group">
                            <label for="income">Shipper Email ID<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="email" class="form-control" v-model="addressDetails.email_id" placeholder="Shipper Email ID">
                            </div>
                        </div> 
                        <div class="col-6">
                            <button type="submit" class="subscribe btn btn-success col-10 rounded-pill shadow-sm"> ADD ADDRESS TO BOOK </button>
                        </div>
                        </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card rounded-lg shadow p-4">
                    <form class="row">
                        <div class="col-md-4">
                            <h3 style="font-weight: bold;font-family: monospace;">Recipient</h3>
                        </div>
                        <div class="col-md-8">
                            <div class="form-group">
                                <select class="custom-select" required>
                                <option value="">--Select Recipient Details--</option>
                                <!-- <option v-for="address in address_list" :key="address">{{ address.name }}</option> -->
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label for="name">Recipient Name <sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="Recipient Name">
                            </div>
                            <div class="form-group">
                            <label for="phone">Recipient Phone No.<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="Recipient Phone No.">
                            </div>
                            <div class="form-group">
                            <label for="email">Recipient Address 2</label>
                            <input type="text" class="form-control" placeholder="Recipient Address 2">
                            </div>
                            <div class="form-group">
                            <label for="address">Recipient Zip Code</label>
                            <input type="text" class="form-control" placeholder="Recipient Zip Code">
                            </div>   
                            <div class="form-group">
                            <label for="income">Recipient City<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="Recipient City">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label for="name">Recipient Company</label>
                            <input type="text" class="form-control" placeholder="Recipient Company">
                            </div>
                            <div class="form-group">
                            <label for="dob">Recipient Address 1<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="Recipient Address 1">
                            </div>
                            <div class="form-group">
                            <label for="email">Recipient Country<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="Recipient Country">
                            </div>
                            <div class="form-group">
                            <label for="address">Recipient State</label>
                            <input type="text" class="form-control" placeholder="Recipient State">
                            </div>   
                            <div class="form-group">
                            <label for="income">Recipient Email ID<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="email" class="form-control" placeholder="Recipient Email ID">
                            </div>
                        </div> 
                        <div class="col-6">
                            <button type="submit" class="subscribe btn btn-success col-10 rounded-pill shadow-sm"> ADD ADDRESS TO BOOK </button>
                        </div>
                        </form>
                </div>
            </div>
    </div>
    <div class="row col-md-12">
        <div class="col-md-12">
                <div class="card rounded-lg shadow p-4">
                    <form class="row">
                        <div class="col-md-12">
                            <h3 style="font-weight: bold;font-family: monospace;">Shipment Information</h3>
                        </div>
                        <div class=" row col-md-8">
                            <div class="form-group col-md-3">
                                <label for="phone">Shipment Type<sup><i class="bi bi-asterisk"></i></sup></label>
                                <select class="custom-select" required>
                                <option value="">--Select Package--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                            <label for="phone">Total Pieces<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="dob">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="email">Weight<sup><i class="bi bi-asterisk"></i></sup></label>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="weight">
                                    <div class="input-group-append">
                                        <select class="custom-select" required>
                                            <option value="KG">KG</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="phone">Invoice Currency<sup><i class="bi bi-asterisk"></i></sup></label>
                                <select class="custom-select" required>
                                <option value="AED">AED</option>
                                <option value="EURO">EURO</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class=" row col-md-12">
                            <div class="form-group col-md-1">
                            <label for="name">weight(KGS)</label>
                            <input type="text" class="form-control" placeholder="Weight" required>
                            </div>
                            <div class="form-group col-md-1">
                            <label for="phone">Length(CM)</label>
                            <input type="text" class="form-control" placeholder="Length" required>
                            </div>
                            <div class="form-group col-md-1">
                            <label for="email">Width(CM)</label>
                            <input type="email" class="form-control" placeholder="Width" required>
                            </div>
                            <div class="form-group col-md-1">
                            <label for="address">Height(CM)</label>
                            <input type="text" class="form-control" placeholder="Height" required>
                            </div>
                            <div class="form-group col-md-1">
                            <label for="name">HS Code</label>
                            <input type="text" class="form-control" placeholder="HS Code">
                            </div>
                            <div class="form-group col-md-1">
                            <label for="phone">Description</label>
                            <input type="text" class="form-control" placeholder="Description" required>
                            </div>
                            <div class="form-group col-md-2">
                            <label for="email">Declared Value(AED)<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="email" class="form-control" placeholder="Declared Value">
                            </div>
                            <div class="form-group col-md-2">
                            <label for="address">Insurance Value(AED)<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="Insurance Value">
                            </div>
                            <div class="form-group col-md-2">
                            <label for="address">Manufacture Country<sup><i class="bi bi-asterisk"></i></sup></label>
                            <input type="text" class="form-control" placeholder="Manufacture Country">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <h6 class="text-right" style="font-size: 14px;">Acutal Weight: 25.000 KG  Volumetric Weight(L*W*H/5000): 2.433 KG  Charged Weight: 25.000 KG</h6>
                        </div>
                        <div class="col-md-12">
                            <h6 class="text-center" style="font-size: 14px; color: red;">Please note Invoice will be raised on Actual or Volumetric Weight, which is higher.</h6>
                        </div>
                        <div class="col-md-12">
                            <h6 class="text-left" style="font-size: 14px;color: red;">Any Query with respect to DG shipments, please contact ONEX support T : +971-4-884-2008 Ext : 510</h6>
                        </div>
                        </form>
                </div>
        </div>
        <div class="col-md-8">
                <div class="card rounded-lg shadow p-3">
                    <img
                    src="/src/assets/images/dhl.png"
                    style="height: 80px;width: 100px;"
                    />
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                            <th scope="col">Expected Delivery</th>
                            <th scope="col">Expected Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th><input class="form-check-input" type="radio" checked>EXPRESS WORLDWIDE</th>
                            <td>118.9 AED</td>
                            <td>23-OCT-2023</td>
                            <td>11.50</td>
                            </tr>
                            <tr>
                            <th><input class="form-check-input" type="radio">EXPRESS WORLDWIDE</th>
                            <td>118.9 AED</td>
                            <td>23-OCT-2023</td>
                            <td>11.50</td>
                            </tr>
                            <tr>
                            <th><input class="form-check-input" type="radio">EXPRESS WORLDWIDE</th>
                            <td>118.9 AED</td>
                            <td>23-OCT-2023</td>
                            <td>11.50</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
        </div>
        <div class="col-md-4">
                <div class="card rounded-lg shadow p-4">
                    <form class="row">
                        <div class="row form-group">
                            <div class="col-6">
                                <label>Base Rate</label>
                            </div>
                            <div class="col-auto text-right">
                                <input type="text" class="form-control ">
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-6">
                                <label>Emergency Situation</label>
                            </div>
                            <div class="col-auto text-right">
                                <input type="text" class="form-control ">
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-6">
                                <label>Fuel Surcharge</label>
                            </div>
                            <div class="col-auto text-right">
                                <input type="text" class="form-control ">
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-6">
                                <label>Payable Amount</label>
                            </div>
                            <div class="col-auto text-right">
                                <input type="text" class="form-control ">
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="PROMO CODE">
                            </div>
                            <div class="col-6">
                                <button type="submit" class="subscribe btn btn-success col-10 rounded-pill shadow-sm"> APPLY</button>
                            </div>
                        </div>
                        </form>
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
            address_list:[],
            selectedAddress: '',
            addressDetails: {
                address_title: '',
                address_line1:'',
                address_line2:'',
                address_type:'',
                city: '',
                country: '',
                email_id: '',
                phone: '',
                pincode: '',
                state: '',
                company: '',
            },
        };
    },
    async created() {
            const key = this.$cookies.get('sid');
            const response = await axios.get('/api/resource/Address', {
                                    headers:{
                                        Authorization: 'token ' + key
                                    }})
            this.address_list = response.data.data;
		},
    methods: {
        fetchAddressDetails() {
            if (this.selectedAddress) {
                const key = this.$cookies.get('sid');
                axios.get('/api/resource/Address/'+this.selectedAddress, { headers:{ Authorization: 'token ' + key }})
                .then(response => {
                    this.addressDetails = response.data.data;
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching address details:', error);
                });
            }
        },
    },
};
</script>