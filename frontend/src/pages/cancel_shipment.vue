<template>
    <Header />
    <div class="container pb-5">
        <div class="text-center mb-5"> 
                <h1><b>Cancel Shipment</b></h1>
        </div>
        <div class="container rounded-lg shadow-lg p-5">
            <form @submit.prevent="fetchDetails"> 
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-3 col-form-label">Search Your Shipment</label>
                    <div class="col-sm-9">
                    <input type="text" required class="form-control" id="inputEmail3" placeholder="Enter Tracking no. /Order No." v-model="tracking">
                    </div>
                </div>
                <div class="text-center"> 
                    <button type="submit" class="btn btn-success col-4 rounded-pill ">Search</button>
                </div>
            </form>
        </div>
        <div class="container rounded-lg shadow-lg p-5" v-if="showDetails">
            <article class="card">
                <header class="card-header"> My Orders / Tracking </header>
                <div class="card-body">
                    <h6>Order ID: {{ trackingDetails['order_id'] }}</h6>
                    <article class="card">
                        <div class="card-body row">
                            <div class="col"> <strong>Estimated Delivery Date:</strong> <br>{{ trackingDetails['estimated_date'] }} </div>
                            <div class="col"> <strong>Shipping By:</strong> <br> {{ trackingDetails['shipping_by'] }} | <i class="bi bi-telephone"></i>
                                {{ trackingDetails.shipping_number }}</div>
                            <div class="col"> <strong>Status:</strong> <br> {{ trackingDetails['status'] }} </div>
                            <div class="col"> <strong>Tracking #:</strong> <br> {{ trackingDetails['name'] }} </div>
                        </div>
                    </article>
                    <div class="track">
                        <div class="step" :class="{'active': trackingDetails['status'] == 'Order Confirmed' || trackingDetails['status'] == 'Picked by courier' || trackingDetails['status'] == 'On the way' || trackingDetails['status'] == 'Ready for pickup'}"> <span class="icon"> <i class="bi bi-bag-check"></i> </span> 
                            <span class="text">Order confirmed</span> 
                        </div>
                        <div class="step" :class="{'active': trackingDetails['status'] == 'Picked by courier' || trackingDetails['status'] == 'On the way' || trackingDetails['status'] == 'Ready for pickup'}"> <span class="icon"> <i class="bi bi-person-check"></i> </span> 
                            <span class="text">Picked by courier</span> 
                        </div>
                        <div class="step" :class="{'active': trackingDetails['status'] == 'On the way' || trackingDetails['status'] == 'Ready for pickup'}"> <span class="icon"> <i class="bi bi-truck"></i> </span> 
                            <span class="text">On the way</span> 
                        </div>
                        <div class="step" :class="{'active': trackingDetails['status'] == 'Ready for pickup'}"> <span class="icon"> <i class="bi bi-box-seam"></i> </span> 
                            <span class="text">Ready for pickup</span> 
                        </div>
                    </div>
                    <hr>
                </div>
            </article>
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
        tracking: "",
        showDetails: false,
        trackingDetails: [] // This will hold the tracking details once fetched.
        };
    },
    methods: {
        async fetchDetails() {
            const values={ value:this.tracking }
            const key = this.$cookies.get('sid');
            const response = await axios
            .post('/api/method/logistics.api.tracking_details',{data:values},{
                    headers:{
                        Authorization: 'token ' + key
                    }})
            .then((response) => {
                this.trackingDetails = response.data.message
                this.showDetails = true;
            })
            .catch((response) => { 
                this.showDetails = false;
                alert("No Records");
            })
        },
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

body {
    font-family: 'Open Sans', serif
}

.container {
    margin-top: 50px;
    margin-bottom: 50px
}

.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.10rem
}

.card-header:first-child {
    border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0
}

.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.track {
    position: relative;
    background-color: #ddd;
    height: 7px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 60px;
    margin-top: 50px
}

.track .step {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 25%;
    margin-top: -18px;
    text-align: center;
    position: relative
}

.track .step.active:before {
    background: #dc3545;
}

.track .step::before {
    height: 7px;
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 18px
}

.track .step.active .icon {
    background:#dc3545;
    color: #fff
}

.track .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: relative;
    border-radius: 100%;
    background: #ddd
}

.track .step.active .text {
    font-weight: 400;
    color: #000
}

.track .text {
    display: block;
    margin-top: 7px
}

.itemside {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.itemside .aside {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.img-sm {
    width: 80px;
    height: 80px;
    padding: 7px
}

ul.row,
ul.row-sm {
    list-style: none;
    padding: 0
}

.itemside .info {
    padding-left: 15px;
    padding-right: 7px
}

.itemside .title {
    display: block;
    margin-bottom: 5px;
    color: #212529
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

.btn-warning {
    color: #ffffff;
    background-color: #ee5435;
    border-color: #ee5435;
    border-radius: 1px
}

.btn-warning:hover {
    color: #ffffff;
    background-color: #ff2b00;
    border-color: #ff2b00;
    border-radius: 1px
}</style>