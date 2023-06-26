<script setup lang="ts">
import { ref } from "vue";
const p = ref(window.location.protocol === "https:" ? "s" : "");
</script>

<template>
  <scriptx
    :src="'http' + p + '://code.tidio.co/gcsnhbjfdlwnqqzpjq42crtkxhdfycje.js'"
  ></scriptx>
  
</template>
