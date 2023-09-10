
<template>
  <div>
    <HomeSlideS1></HomeSlideS1>
  </div>
</template>
<script setup lang="ts">
const HomeSlideS1 = defineAsyncComponent(() => import("~/components/homepage/HomeSlideS1.vue"));
</script>