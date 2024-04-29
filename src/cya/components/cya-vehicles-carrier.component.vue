<script>
import {VehiclesApiService} from "../services/vehicules-api.service.js";


export default {
  name: "cya-vehicles-carrier",
  title: "cya-vehicles-carrier",
  data() {
    return {
      vehiclesApi: new VehiclesApiService(),
      vehicles: [],
    };
  },
  created(){
    this.getDataVehicles();
  },
  methods: {
    getDataVehicles() {
      this.vehiclesApi.getAllVehicles()
          .then(response => {
            this.vehicles = response.data;
            console.log(response.data);
            console.log(this.vehicles);
          })
    }
  }
}
</script>

<template>
  <div class="flex align-content-start flex wrap">
    <div class="ml-3">
      <h1>Vehicles</h1>
      <h3>You can see your car fleet</h3>
    </div>
  </div>
  <div class="container" v-for="vehicle of vehicles" v-bind:key="vehicle.id">
    <pv-card>
      <template #title>{{vehicle.model}}</template>
      <template #content>
        <p class="m-0">
          License Plate: {{ vehicle.licensePlate }}
        </p>
        <p class="m-0">
          Serial Number: {{ vehicle.serialNumber }}
        </p>
      </template>
    </pv-card>
  </div>
</template>

<style lang="css" scoped>
.container {
  border: 1px solid;
  width: 350px;
  text-align: center;
  background: darkgray;
  float: left;
}
</style>