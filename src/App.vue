<template>
  <RouterView></RouterView>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import {firebaseConfig} from "./firebase";
import { initializeApp } from 'firebase/app'


// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
    initializeApp(firebaseConfig)
})

</script>