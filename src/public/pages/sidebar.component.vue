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
      <div class="flex flex-column align-items-left h-full justify-content-around">
        <div class="flex justify-content-center align-items-center mr-6">
          <pv-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="mr-2 flex align-items-center justify-content-center" size="xlarge" shape="circle"></pv-avatar>
          <div class="m-2">
            <h2>John Doe</h2>
            <h3>Driver</h3>
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

<style scoped>
</style>