<template>
  <Sidebar></Sidebar>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import Sidebar from "./components/Common/Sidebar/Sidebar.vue";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>