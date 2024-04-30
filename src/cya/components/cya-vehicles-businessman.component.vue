<script>
import {VehiclesApiService} from "../services/vehicules-api.service.js";
import {IamApiService} from "../../iam/services/iam-api.service.js";

export default {
  name: "cya-vehicles-businessman",
  data() {
    return {
      vehiclesApi: new VehiclesApiService(),
      iamApi: new IamApiService(),
      user: null,
      vehicles: [],
      id: this.$route.params.id,
    };
  },
  created(){
    this.getData(this.id);
  },
  methods: {
    getData(userId) {
      this.iamApi.findUserById(userId)
          .then(userResponse => {
            this.user = userResponse.data[0];
            let vehiclePromises = this.user.vehicles.map(vehicleUser => {
              return this.vehiclesApi.getVehiclesById1(vehicleUser.idVehicle);
            });
            Promise.all(vehiclePromises)
                .then(vehicleResponses => {
                  this.vehicles = vehicleResponses.map(response => response.data[0]);
                });
          });
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-for="vehicle in vehicles" :key="vehicle.id">
      <pv-card class="card">
        <template #title>{{vehicle.model}}</template>
        <template #content>
          <p>License Plate: {{vehicle.licensePlate}}</p>
          <p>Serial Number: {{vehicle.serialNumber}}</p>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  z-index: 1;
}

.card{
  background: #ffffff;
}
</style>