<script setup lang="ts">

</script>

<template>
  <Swiper
      class="swiper-parallax--style-1"
      :modules="[SwiperParallax]"
  >
    <SwiperSlide>
      <picture class="swiper-parallax-image">
        <source media="(min-width:768px)" srcset="/images/slide-parallax-1.webp">
        <img class="w-100 h-100 object-fit-cover"
             src="/images/slide-parallax-1.webp"
             alt="Image Bg">
      </picture>
    </SwiperSlide>
    <SwiperSlide>
      <picture class="swiper-parallax-image">
        <source media="(min-width:768px)" srcset="/images/slide-parallax-1.webp">
        <img class="w-100 h-100 object-fit-cover"
             src="/images/slide-parallax-1.webp"
             alt="Image Bg">
      </picture>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.swiper-parallax--style-1{
  height: 100vh;
}
</style>