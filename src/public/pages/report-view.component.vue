<script>
import {Driver} from "../../report-view/model/driver.entity.js";
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
      this.reportsApi.getReports()
          .then(response => {
            this.reports = response.data;
          }).catch(error => {console.error("Error fetching drivers:", error);})
    }
  }
}
</script>
<!--
<template>
  <div class="w-full align-content-center">
    <h1>Report</h1>
    <p>Welcome to Report to Businessman.</p>

    <div class="card">
      <pv-table :value="reports" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
        <Column field="name" header="Name"></Column>
        <Column field="description" header="Description"></Column>
      </pv-table>
    </div>
  </div>
</template>-->

<template>
  <div class="w-full align-content-center">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="report in reports" :key="report.id">
        <td>{{ report.id }}</td>
        <td>{{ report.name }}</td>
        <td>{{ report.description }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>