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
  <div>
    <h1>Reports</h1>
    <p>Driver report list</p>
  </div>

  <div>
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
</template>