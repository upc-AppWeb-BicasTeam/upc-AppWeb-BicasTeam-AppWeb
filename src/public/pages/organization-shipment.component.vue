<script>
import {ShipmentApiService} from "../../shared/services/shipment-api.service.js";

export default {
  name: "organization-shipment",
  data(){
    return {
      shipmentsApi: new ShipmentApiService(),
      shipments: [],
    };
  },
  created(){
    this.getDataShipment();
  },
  methods: {
    async getDataShipment(){
    const response = await this.shipmentsApi.getAllShipments();
    const shipments = response.data;
  // Nombre y apellido del conductor por cada shipment
    for (let shipment of shipments) {
      const userResponse = await this.shipmentsApi.findUserByID(shipment['id-user']);
      console.log(userResponse);
      const user = userResponse.data[0];
      shipment.driverName = `${user.name} ${user.lastName}`;
    }
    this.shipments = shipments;
    console.log(this.shipments);
  },

    newItem() {
      this.$emit('new-item');
    },
  }
}
</script>

<template>
  <div class="flex align-content-start flex wrap">
    <div class="ml-3">
      <h1>Organization</h1>
      <h3>Click in the list to see details</h3>
    </div>
      <div class="flex justify-content-end">
        <pv-button class="mr-2" label="Add" icon="pi pi-plus" severity="success" @click="newItem"></pv-button>
      </div>
  </div>
  <div>
    <pv-card>
      <template #content>
        <pv-table :value="shipments">
          <pv-column field="driverName" header="Driver's Name"></pv-column>
          <pv-column field="destiny" header="Destiny"></pv-column>
          <pv-column field="description" header="Description"></pv-column>
          <pv-column field="dateTime.date" header="Delivery date"></pv-column>
          <pv-column field="dateTime.time" header="Delivery time"></pv-column>
          <pv-column field="status" header="Status"></pv-column>
        </pv-table>
      </template>
    </pv-card>
  </div>

</template>

<style scoped>

</style>