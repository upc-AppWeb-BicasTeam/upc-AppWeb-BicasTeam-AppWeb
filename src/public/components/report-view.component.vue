<script>
import {ReportsApiService} from "../../report-view/services/reports-api.service.js";

export default {
  name: "report-view",
  title: "Report View",
  data(){
    return {
      reports: [],
      reportsApi: new ReportsApiService(),
    };
  },
  created(){
    this.getDataDriver();
  },
  methods: {
    getDataDriver(){
      this.reportsApi.getAllReports()
          .then(response => {
            this.reports = response.data;
            console.log(response.data);
            console.log(this.reports);
          })
    }
  }
}
</script>

<template>
    <div class="p-5 container z-1 header">
      <div class="text-900 font-medium text-xl mb-3">
        <h1>Reports</h1>
        <p>Driver report list</p>
      </div>
      <div class="p-5 card-container">
        <pv-card>
          <template #content>
            <pv-table :value="reports">
              <pv-column field="name" header="Driver’s Name"></pv-column>
              <pv-column field="description" header="Description"></pv-column>
              <pv-column field="dateTime.date" header="Date"></pv-column>
            </pv-table>
          </template>
        </pv-card>
      </div>
    </div>
</template>

<style>

.container{
  max-width: 1500px;
  margin-left: 10rem;
  color: #495057;
  display: flex;
  flex-direction: column;
}

.header {
  margin-bottom: 20px; /* Espacio entre el encabezado y el pv-card */
}

.card-container {
  align-self: center; /* Centrar el pv-card horizontalmente */
}
</style>