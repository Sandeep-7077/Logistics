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
        <div class="border-item rounded-3 shadow" style="background-color: red;">
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
        <div class="border-item rounded-3 shadow">
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
    <div class="col-lg-12 mx-auto">
            <div class="bg-white selection rounded-lg shadow-lg p-4">
              <h3>Select Carrier(<span style="font-size: 17px;"><span class="text-danger">From</span>:--------<span class="text-danger">To</span>:------------</span>)<a class="text-danger" href="#">Edit</a></h3>
                <div class="row">
                    <label for="radio-card-1" class="radio-card col-md-4">
                        <input type="radio" name="radio-card" id="radio-card-1"  />
                        <div class="card-content-wrapper border">
                        <div class="card-content">
                          <span class="check-icon"></span>
                            <img
                            src="/src/assets/images/ups.png"
                            alt="" 
                            style="
                                margin-left: 10px;
                                margin-top: -5px;
                                height: 50px;
                            "
                            />
                            <h4>UPS SAVER</h4>
                            <table style="min-width: -webkit-fill-available;">
                              <tbody>
                              <tr>
                                <td><h5>Price:</h5></td>
                                <td><h5 class="text-right">3148.41 AED</h5></td>
                              </tr>
                              <tr>
                                <td><h5></h5></td>
                                <td><h5 class="text-right"></h5></td>
                              </tr>
                              <tr>
                                <td><h5></h5></td>
                                <td><h5 class="text-right"></h5></td>
                              </tr>
                              </tbody>
                            </table>
                        </div>
                        </div>
                    </label>
                    <!-- /.radio-card -->

                    <label for="radio-card-2" class="radio-card col-md-4">
                        <input type="radio" name="radio-card" id="radio-card-2" />
                        <div class="card-content-wrapper border">
                        <div class="card-content">
                          <span class="check-icon"></span>
                            <img
                            src="/src/assets/images/fedex.png"
                            alt=""
                            />
                            <h4>FEDEX INTERNATIONAL PRIORITY</h4>
                            <table style="min-width: -webkit-fill-available;">
                              <tbody>
                              <tr>
                                <td><h5>Price:</h5></td>
                                <td><h5 class="text-right">3148.41 AED</h5></td>
                              </tr>
                              <tr>
                                <td><h5>Expected Delivery:</h5></td>
                                <td><h5 class="text-right">23-OCT-2023</h5></td>
                              </tr>
                              <tr>
                                <td><h5>Expected Time:</h5></td>
                                <td><h5 class="text-right">20:00</h5></td>
                              </tr>
                              </tbody>
                            </table>
                        </div>
                        </div>
                    </label>
                    <!-- /.radio-card -->

                    <label for="radio-card-3" class="radio-card col-md-4">
                        <input type="radio" name="radio-card" id="radio-card-3" />
                        <div class="card-content-wrapper border">
                        <div class="card-content">
                          <span class="check-icon"></span>
                            <img
                            src="/src/assets/images/dhl.png"
                            alt=""
                            />
                            <h4>EXPRESS WORLDWIDE</h4>
                            <table style="min-width: -webkit-fill-available;">
                              <tbody>
                              <tr>
                                <td><h5>Price:</h5></td>
                                <td><h5 class="text-right">3148.41 AED</h5></td>
                              </tr>
                              <tr>
                                <td><h5>Expected Delivery:</h5></td>
                                <td><h5 class="text-right">23-OCT-2023</h5></td>
                              </tr>
                              <tr>
                                <td><h5>Expected Time:</h5></td>
                                <td><h5 class="text-right">20:00</h5></td>
                              </tr>
                              </tbody>
                            </table>
                        </div>
                        </div>
                    </label>
                    <!-- /.radio-card -->
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h5>All rates are inclusive of fuel surcharge(Press <span class="text-success">Continue</span> button for more options)</h5>

                  </div>
                  <div class="col-md-6">
                    <a href="#" class="text-danger text-right">Get Another Quote</a>
                  </div>
                </div>
                
                <div class="col-md-4" style="margin-top: 35px;"> 
                  <router-link :to="`/create_shipment`" type="button" class="btn btn-danger col-5 ml-2 rounded-pill">Back</router-link>
                  <router-link :to="`/shipment_details`" type="button" class="btn btn-success col-5 ml-2 rounded-pill">Continue</router-link>
                    <!-- <button type="submit" class="btn btn-danger col-5 ml-2 rounded-pill">Back</button> -->
                    <!-- <button type="submit" class="btn btn-success col-5 ml-2 rounded-pill">Continue</button> -->
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
            
        };
    },
    methods: {
        
    },
};
</script>