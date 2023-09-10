<script lang="ts" setup>

</script>

<template>
  <Swiper
      :autoplay="{delay: 4000,disableOnInteraction: true,}"
      :breakpoints="{
      0:{ slidesPerView:1 },
      768:{ slidesPerView:2, },
      1200:{ slidesPerView:3, },}"
      :loop="true"
      :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
      :navigation="{enabled: true,}"
      :pagination="{enabled: true,clickable: true,dynamicBullets: true,}"
      :speed="700"
      class="swiper-parallax--style-1"
  >
    <SwiperSlide class="py-5">
        <picture class="swiper-parallax-image">
          <source media="(min-width:567px)" srcset="/images/slide-parallax-1-xs.webp">
          <img alt="Image Bg"
               class="w-100 h-100 object-fit-cover"
               src="/images/slide-parallax-1-xs.webp">
        </picture>
      <div class="swiper-parallax-wrap-content h-100 d-flex align-items-end py-md-4">
        <div class="container px-md-0 py-md-1 text-center">
          <div class="swiper-parallax-content d-inline-block">
            <!--            <div class="swiper-parallax__cta-title text-white mb-2 fw-light fs-5">-->
            <!--              {{ $t('home_slide.slide1.cta_title') }}-->
            <!--            </div>-->
            <div class="swiper-parallax__cta-description fw-medium text-uppercase text-white fs-1 lh-1">
              LOUIS VUITTON
            </div>
            <a class="swiper-parallax__cta-action text-white fw-light text-decoration-none" rel="nofollow" target="_blank" href="https://louisvuitton.com">
             <span>
               Go to LOUIS VUITTON
             </span>
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="py-5">
        <picture class="swiper-parallax-image">
          <source media="(min-width:567px)" srcset="/images/slide-parallax-2.webp">
          <img alt="Image Bg"
               class="w-100 h-100 object-fit-cover"
               src="/images/slide-parallax-2.webp">
        </picture>
      <div class="swiper-parallax-wrap-content h-100 d-flex align-items-end py-md-4">
        <div class="container px-md-0 py-md-1 text-center">
          <div class="swiper-parallax-content d-inline-block">
            <!--            <div class="swiper-parallax__cta-title text-white mb-2 fw-light fs-5">-->
            <!--              {{ $t('home_slide.slide1.cta_title') }}-->
            <!--            </div>-->
            <div class="swiper-parallax__cta-description fw-medium text-uppercase text-white fs-1 lh-1">
              Gucci
            </div>
            <a class="swiper-parallax__cta-action text-white fw-light text-decoration-none" rel="nofollow" target="_blank" href="https://www.gucci.com">
             <span>
               Go to GUCCI
             </span>
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="py-5">
        <picture class="swiper-parallax-image">
          <source media="(min-width:567px)" srcset="/images/slide-parallax-3.webp">
          <img alt="Image Bg"
               class="w-100 h-100 object-fit-cover"
               src="/images/slide-parallax-3.webp">
        </picture>
      <div class="swiper-parallax-wrap-content h-100 d-flex align-items-end py-md-4">
        <div class="container px-md-0 py-md-1 text-center">
          <div class="swiper-parallax-content d-inline-block">
            <!--            <div class="swiper-parallax__cta-title text-white mb-2 fw-light fs-5">-->
            <!--              {{ $t('home_slide.slide1.cta_title') }}-->
            <!--            </div>-->
            <div class="swiper-parallax__cta-description fw-medium text-uppercase text-white fs-1 lh-1">
              Prada
            </div>
            <a class="swiper-parallax__cta-action text-white fw-light text-decoration-none" rel="nofollow" target="_blank" href="https://www.prada.com">
             <span>
                              Go to PRADA

             </span>
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="py-5">
        <picture class="swiper-parallax-image">
          <source media="(min-width:567px)" srcset="/images/slide-parallax-4.webp">
          <img alt="Image Bg"
               class="w-100 h-100 object-fit-cover"
               src="/images/slide-parallax-4.webp">
        </picture>
      <div class="swiper-parallax-wrap-content h-100 d-flex align-items-end py-md-4">
        <div class="container px-md-0 py-md-1 text-center">
          <div class="swiper-parallax-content d-inline-block">
            <!--            <div class="swiper-parallax__cta-title text-white mb-2 fw-light fs-5">-->
            <!--              {{ $t('home_slide.slide1.cta_title') }}-->
            <!--            </div>-->
            <div class="swiper-parallax__cta-description fw-medium text-uppercase text-white fs-1 lh-1">
              Ralph Lauren
            </div>
            <a class="swiper-parallax__cta-action text-white fw-light text-decoration-none" rel="nofollow" target="_blank" href="https://www.ralphlauren.com">
             <span>
                              Go to RALPH LAUREN

             </span>
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="py-5">
        <picture class="swiper-parallax-image">
          <source media="(min-width:567px)" srcset="/images/slide-parallax-5.webp">
          <img alt="Image Bg"
               class="w-100 h-100 object-fit-cover"
               src="/images/slide-parallax-5.webp">
        </picture>
      <div class="swiper-parallax-wrap-content h-100 d-flex align-items-end py-md-4">
        <div class="container px-md-0 py-md-1 text-center">
          <div class="swiper-parallax-content d-inline-block">
            <!--            <div class="swiper-parallax__cta-title text-white mb-2 fw-light fs-5">-->
            <!--              {{ $t('home_slide.slide1.cta_title') }}-->
            <!--            </div>-->
            <div class="swiper-parallax__cta-description fw-medium text-uppercase text-white fs-1 lh-1">
              dolce & gabbana
            </div>
            <a class="swiper-parallax__cta-action text-white fw-light text-decoration-none" rel="nofollow" target="_blank" href="https://www.dolcegabbana.com">
             <span>
                    Go to DOLCE & GABBANA
             </span>
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="py-5">
        <picture class="swiper-parallax-image">
          <source media="(min-width:567px)" srcset="/images/slide-parallax-6.webp">
          <img alt="Image Bg"
               class="w-100 h-100 object-fit-cover"
               src="/images/slide-parallax-6.webp">
        </picture>
      <div class="swiper-parallax-wrap-content h-100 d-flex align-items-end py-md-4">
        <div class="container px-md-0 py-md-1 text-center">
          <div class="swiper-parallax-content d-inline-block">
            <!--            <div class="swiper-parallax__cta-title text-white mb-2 fw-light fs-5">-->
            <!--              {{ $t('home_slide.slide1.cta_title') }}-->
            <!--            </div>-->
            <div class="swiper-parallax__cta-description fw-medium text-uppercase text-white fs-1 lh-1">
              fendi
            </div>
            <a class="swiper-parallax__cta-action text-white fw-light text-decoration-none" rel="nofollow" target="_blank" href="https://www.fendi.com">
             <span>
                              Go to FENDI
             </span>
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.swiper-parallax--style-1 {
  height: 100vh;

  .swiper-parallax-image {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .swiper-parallax-wrap-content {
    position: relative;
    z-index: 1;
    text-shadow: 0px 3px 6px #00000029;

    .swiper-parallax-content {
      .swiper-parallax__cta-description {
        margin-bottom: 32px;
      }

      .swiper-parallax__cta-action {
        display: inline-flex;
        cursor: pointer;

        span {
          position: relative;
          overflow: hidden;

          &:hover {
            &::before {
              animation: text-main-slide-out .8s cubic-bezier(.5, 0, 0, 1) forwards;
            }

            &::after {
              animation: text-main-slide-in .8s cubic-bezier(.5, 0, 0, 1) forwards;
            }
          }

          &::before {
            background: var(--bs-white);
            bottom: 1px;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 100%;
            transform: translateX(-120%);
          }

          &::after {
            background: var(--bs-white);
            bottom: 1px;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 100%;
          }
        }
      }
    }
  }

  @keyframes text-main-slide-in {
    55% {
      transform: translateX(100%)
    }

    to {
      transform: translateX(120%)
    }
  }

  @keyframes text-main-slide-out {
    45% {
      transform: translateX(-100%)
    }

    to {
      transform: translateX(0)
    }
  }
}
</style>