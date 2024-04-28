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
    getDataShipment(){
      this.shipmentsApi.getAllShipments()
          .then(response => {
            this.shipments = response.data;
            console.log(response.data);
            console.log(this.shipments);
          })
    }
  }
}
</script>

<template>
  <div class="flex align-content-start flex wrap">
    <div class="ml-3">
      <h1>Organization</h1>
      <h3>Click in the list to see details</h3>
    </div>
  </div>
  <div>
    <pv-card>
      <template #content>
        <pv-table :value="shipments">
          <pv-column field="name" header="Driver's Name"></pv-column>
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