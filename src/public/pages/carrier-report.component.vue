<script>
import ReportView from "../components/report-view.component.vue";
import ReportDriver from "../components/report-driver.component.vue";
import Sidebar from "../components/sidebar.component.vue";

export default {
  name: "carrier-report",
  components: {ReportDriver, ReportView,Sidebar}
}
</script>

<template>
  <div class="container">
    <sidebar></sidebar>
    <report-driver></report-driver>
  </div>
</template>

<style scoped>

</style>