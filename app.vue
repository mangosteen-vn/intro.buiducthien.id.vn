
<template>
  <div>
    <HomeSlideS1></HomeSlideS1>
  </div>
</template>
<script setup lang="ts">
const HomeSlideS1 = defineAsyncComponent(() => import("~/components/homepage/HomeSlideS1.vue"));
useHead({
  title: 'Thương hiệu thời trang hàng đầu thế giới',
  meta: [
    { name: 'description', content: 'Thương hiệu thời trang hàng đầu thế giới hiện nay' },
    { name: 'og:title', content: 'Thương hiệu thời trang hàng đầu thế giới' },
    { name: 'og:description', content: 'Thương hiệu thời trang hàng đầu thế giới hiện nay' },
    { name: 'og:image', content: 'Thương hiệu thời trang hàng đầu thế giới hiện nay' },
  ],
})
</script>