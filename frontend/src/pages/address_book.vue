<template>
<Header/>
<div class="rounded-lg shadow-lg p-2 m-4">
  <div class="col-md-12">
    <div class="rounded-2 bg-danger row pt-3">
      <div class="col-md-3">
        <h3>Address Book</h3>
      </div>
      <div class="col-md-4 text-center">
        <h3>Total Records Found : {{ totalAddresses }}</h3>
      </div>
      <div class="col-md-5">
        <div class="form-row">
            <div class="form-group col-md-4">
                <select class="form-control" v-model = "typeQuery">
                    <option value="" selected>Shipper/Recipient Type</option>  
                    <option value="Shipping">Shipping</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <select class="form-control">
                    <option value="" disabled selected>Exactly</option>  
                    <option value="">test</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <input type="text" class="form-control" placeholder="Search Here" v-model = "searchQuery">
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border rounded-2">
    <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th @click="sort('name')">Name</th>
            <th @click="sort('address_type')">Type</th>
            <th @click="sort('address_line1')">Address1</th>
            <th @click="sort('address_line2')">Address2</th>
            <th @click="sort('pincode')">Pincode</th>
            <th @click="sort('city')">City</th>
            <th @click="sort('state')">State</th>
            <th @click="sort('country')">Country</th>
            <th @click="sort('phone')">PhoneNo</th>
            <th @click="sort('email_id')">Email-ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="address in filterAddress">
            <td>{{address.name}}</td>
            <td>{{address.address_type}}</td>
            <td>{{address.address_line1}}</td>
            <td>{{address.address_line2}}</td>
            <td>{{address.pincode}}</td>
            <td>{{address.city}}</td>
            <td>{{address.state}}</td>
            <td>{{address.country}}</td>
            <td>{{address.phone}}</td>
            <td>{{address.email_id}}</td>
            <td><button class="btn btn-success"  v-on:click="editAddress(address.name)"><i class="bi bi-pencil-square" style="font-size: x-large;"></i></button></td>
            <td><button class="btn btn-danger" v-on:click="deleteAddress(address.name)"><i class="bi bi-trash" style="font-size: x-large;"></i></button></td>
          </tr>
        </tbody>
    </table>
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-8">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" @click="prevPage" :disabled="currentPage === 1">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <span v-for="pageNumber in totalPages" :key="pageNumber">
              <li class="page-item"><a class="page-link" @click="goToPage(pageNumber)" :class="{ active: pageNumber === currentPage }">{{ pageNumber }}</a></li>
            </span>
            <li class="page-item">
              <a class="page-link" @click="nextPage" :disabled="currentPage === totalPages">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 text-right">
          <button type="submit" v-on:click="addAddress()" class="btn btn-outline-info my-2 my-sm-0">Add New Address</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-box rounded-5" id="popup" v-if="editDetails">
    <button type="button" id="close" class="btn btn-danger"  v-on:click="hide()">X</button>
    <form @submit.prevent="updateAddress"> 
        <div class="row gutters">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="fullName">Full Name</label>
                      <input type="text" class="form-control" id="fullName"  v-model="addressDetails.address_title" placeholder="Enter full name">
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="eMail">Email</label>
                      <input type="email" class="form-control" id="eMail" v-model="addressDetails.email_id" placeholder="Enter email ID">
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="phone">Phone</label>
                      <input type="text" class="form-control" id="phone" v-model="addressDetails.phone" placeholder="Enter phone number">
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="website">Address Type</label>
                      <select class="form-control" v-model="addressDetails.address_type">
                        <option value="">Select</option>
                        <option value="Shipping">Shipping</option>
                        <option value="Other">Other</option>
                    </select>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="website">Address_Line1</label>
                      <input type="text" class="form-control" id="website" v-model="addressDetails.address_line1" placeholder="Address">
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="website">Address_Line2</label>
                      <input type="text" class="form-control" id="website" v-model="addressDetails.address_line2" placeholder="Address">
                  </div>
              </div>
          </div>
          <div class="row gutters">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="Street">Country</label>
                      <input type="name" class="form-control" id="Street" v-model="addressDetails.country" placeholder="Enter Country">
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="ciTy">City</label>
                      <input type="name" class="form-control" id="ciTy" v-model="addressDetails.city" placeholder="Enter City">
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="sTate">State</label>
                      <input type="text" class="form-control" id="sTate" v-model="addressDetails.state" placeholder="Enter State">
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                      <label for="zIp">Pin Code</label>
                      <input type="text" class="form-control" id="zIp" v-model="addressDetails.pincode" placeholder="Pin Code">
                  </div>
              </div>
          </div>
        <div class="text-center"> 
            <button type="submit" class="subscribe btn btn-success col-4 rounded-pill shadow-sm"> SAVE </button>
        </div>
    </form>
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
          addresses: [],
          searchQuery:'',
          typeQuery:'',
          currentSort: 'name',
          currentSortDir: 'asc',
          pageSize: 2,
          currentPage: 1,
          editDetails: false,
          addressDetails: [],
        };
      },
      async created() {
          this.loadData();
      },
      methods: {
        sort(s) {
          if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
          }
          this.currentSort = s;
        },
        nextPage() {
          if((this.currentPage*this.pageSize) < this.addresses.length) this.currentPage++;
        },
        prevPage() {
          if(this.currentPage > 1) this.currentPage--;
        },
        goToPage(page) {
          if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
          }
        },
        async loadData(){
          this.addresses = [];
          const key = this.$cookies.get('sid');
          const r = await axios.get('/api/resource/Address', {
                                  headers:{
                                      Authorization: 'token ' + key
                                  }})
          const data = r.data.data
          for (let x in data) {
            const response = await axios.get('/api/resource/Address/'+data[x].name, {
                                        headers:{
                                            Authorization: 'token ' + key
                                        }})
            const responseData =response.data.data;
            this.addresses.push(responseData);
          }
        },
        async editAddress(name){
          const key = this.$cookies.get('sid');
          await axios.get('/api/resource/Address/'+name, {headers:{Authorization: 'token ' + key}})
          .then((response) => {
            this.addressDetails = response.data.data
            this.editDetails = true;
            })
        },
        addAddress(){
          this.editDetails = true;
        },
        async deleteAddress(name) {
          const key = this.$cookies.get('sid');
          await axios.delete('/api/resource/Address/'+name,{headers:{Authorization: 'token'+ key}})
          .then((response) => {
            this.loadData();
            })
        },
        hide(){
          this.editDetails = false;
        },
        async updateAddress(){
          const values={
              address_title: this.addressDetails.address_title,
              email_id:this.addressDetails.email_id,
              phone:this.addressDetails.phone ,
              address_line1:this.addressDetails.address_line1 ,
              address_line2:this.addressDetails.address_line2 ,
              country:this.addressDetails.country ,
              city:this.addressDetails.city ,
              state:this.addressDetails.state ,
              pincode:this.addressDetails.pincode ,
              address_type:this.addressDetails.address_type
          };
          const key = this.$cookies.get('sid');
          const name = this.addressDetails.name
          await axios.put('/api/resource/Address/'+name,{data:values},{headers:{Authorization: 'token'+ key}})
          .then((response) => {
            this.loadData();
            this.editDetails = false;
            })
          .catch((response) => {
            this.addNew(values);
            })
        },
        async addNew(values){
          console.log(values);
          const key = this.$cookies.get('sid');
          await axios.post('/api/resource/Address',{data:values},{headers:{Authorization: 'token'+ key}})
          .then((response) => {
            this.loadData();
            this.editDetails = false;
            })
        }
      },
      computed: {
        sortedAddress() {
          return this.addresses.sort((a, b) => {
              let modifier = 1;
              if(this.currentSortDir === 'desc') modifier = -1;
              if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
              if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
              return 0;
            })
            .filter((row, index) => {this.addresses.length
              let start = (this.currentPage - 1) * this.pageSize;
              let end = this.currentPage * this.pageSize;
              if (index >= start && index < end) return true;
            });
        },
        totalPages() {
          return Math.ceil(this.addresses.length / this.pageSize);
        },
        totalAddresses() {
          return this.addresses.length
        },
        filterAddress() {
            return this.addresses.filter(address => {
                const nameMatches = address.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                if (this.typeQuery === '') {
                    return nameMatches;
                } else {
                    return nameMatches && address.address_type.toLowerCase() === this.typeQuery.toLowerCase();
                }
            });
        },
      },
};
</script>

<style>
#popup {
  width: 60%;
  height: 100%;
  top: 90px;
  left: 400px;
  padding: 50px;
  position: fixed;
  background-color: rgb(255 255 255 / 90%);
}
#close {
  font-weight: bold;
  margin-left: 1100px;
}
</style>