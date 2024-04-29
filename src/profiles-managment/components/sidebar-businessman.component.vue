<script>

export default {
  name: "sidebar",
  data() {
    return {
      visible: true,
    };
  },
}
</script>

<template>
  <div class="card flex justify-content-center justify-content-between flex-column-">
    <pv-sidebar visible="visible" :showCloseIcon="false" :showHeader="false">
      <div class="flex flex-column align-items-left h-full justify-content-around z-1">
        <div class="flex justify-content-center align-items-center mr-6">
          <img src="https://www.capitalcoahuila.com.mx/wp-content/uploads/2022/11/CARL-e1669117013260.jpeg" id="icon" alt="User Icon" class="custom-image"size="xlarge" shape="circle">
          <div class="m-2">
            <h2>John Doe</h2>
            <h3>Businessman</h3>
          </div>
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
                <i class="pi pi-users mr-2 text-xl"></i>
                <span class="font-medium text-xl">Organization</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-chart-bar mr-2 text-xl"></i>
                <span class="font-medium text-xl">Reports</span>
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