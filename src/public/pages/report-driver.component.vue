<script>
import {ReportsApiService} from "../../report-view/services/reports-api.service.js";

export default {
  name: "report-driver",
  title: "Report Driver",
  data(){
    return {
      reports: null,
      report: null,
      reportsApi: new ReportsApiService(),
      submitted: false,
      reportDialog: false,
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
    },
    openNew(){
      this.report = {};
      this.submitted = false;
      this.reportDialog = true;
    },
    hideDialog(){
      this.reportDialog = false;
      this.submitted = false;
    },
    saveReport(){
      
    }
  }
}
</script>

<template>
  <div class="flex justify-content-between flex-wrap">
    <div class="ml-3">
    <h1>Reports</h1>
    <p>Driver report list</p>
    </div>
    <div class="flex align-items-center justify-content-center">
    <pv-button label="New" icon="pi pi-plus" severity="success" class="mr-5" @click="openNew"/>
    </div>
  </div>
  <div>
    <!--CARD-TABLE-->
    <pv-card>
      <template #content>
        <pv-table :value="reports">
          <pv-column field="name" header="Driver’s Name"></pv-column>
          <pv-column field="description" header="Description"></pv-column>
          <pv-column field="dateTime.date" header="Date"></pv-column>
        </pv-table>
      </template>
    </pv-card>
    <!--FIN - CARD - TABLE-->

    <!--REPORT-DIALOG START-->
    <pv-dialog v-model:visible="reportDialog" :style="{width: '450px'}" header="Report Details" :modal="true" class="p-fluid">
      <div class="field">
        <label for="name" class="mr-5">Name</label>
        <input id="name" v-model.trim="report.name" required="true" autofocus :invalid="submitted && !report.name" />
        <small class="p-error" v-if="submitted && !report.name">Name is required.</small>
      </div>
      <div class="field">
        <label for="description">Description</label>
        <textarea id="description" v-model="report.description" required="true" rows="3" cols="20" />
      </div>

      <template #footer>
        <pv-button label="Cancel" icon="pi pi-times" text @click="hideDialog"/>
        <pv-button label="Save" icon="pi pi-check" text @click="saveReport" />
      </template>
    </pv-dialog>
    <!--REPORT-DIALOG END-->
  </div>
</template>