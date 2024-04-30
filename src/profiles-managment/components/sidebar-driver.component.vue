<script>
import {IamApiService} from "../../iam/services/iam-api.service.js";

export default {
  name: "sidebar.driver",
  data() {
    return {
      name:'',
      lastName:'',
      visible: true,
      id: this.$route.params.id,
      api: new IamApiService()
    };
  },
  created(){
    this.api.findUserById(this.id).then(data=>{

      this.name = data.data[0].name;
      this.lastName = data.data[0].lastName
    })
  },
  methods:{
    goToProfile(){
      this.$router.push(`/${this.id}/userprofile`)
    }
  }
}
</script>

<template>
  <div class="card flex justify-content-center justify-content-between flex-column-">
    <pv-sidebar visible="visible" :showCloseIcon="false" :showHeader="false">
      <div class="flex flex-column align-items-left h-full justify-content-around z-1">
        <div @click="goToProfile" class="flex justify-content-center align-items-center mr-6 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
          <img src="https://www.capitalcoahuila.com.mx/wp-content/uploads/2022/11/CARL-e1669117013260.jpeg" id="icon" alt="User Icon" class="custom-image"size="xlarge" shape="circle">
          <a  class="m-2">
            <h2>{{name}}</h2>
            <h2>{{lastName}}</h2>
            <h3>Carrier</h3>
          </a>
        </div>
        <div>
          <ul class="list-none p-3 m-0">
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-home mr-2 text-xl"></i>
                <span class="font-medium text-xl">Home</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-box mr-2 text-xl"></i>
                <span class="font-medium text-xl">Deliveries</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-history mr-2 text-xl"></i>
                <span class="font-medium text-xl">Incidents</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="list-none p-3 m-0">
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-cog mr-2 text-xl"></i>
                <span class="font-medium text-xl">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </pv-sidebar>
  </div>
</template>

<style>
.p-sidebar-header{
  display:none;
}

.p-sidebar{
  background-color: #303841;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.p-sidebar-mask{
  z-index: 0 !important;
}
body{
  background-color: #5D6D7E;
}
.custom-image {

  /* Ajusta la posición horizontal */
  border-radius: 50%;

}

.mr-6
{
  margin-right: 2px;
  margin-left: -200px;

}
</style>