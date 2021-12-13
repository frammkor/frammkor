<template>
  <div class="w-full h-full overflow-hidden">
    <router-link class="cursor-pointer group" to='/in/art'>
      <img
        class='object-top object-cover h-2/4 w-full md:w-2/4 md:h-full md:inline filter grayscale group-hover:grayscale-0 group-focus:grayscale-0 transform group-hover:scale-105 group-focus:scale-105 transition-all ease-in-out duration-300'
        alt='franco cespi art'
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ../assets/images/fc-art1_n8jogg_c_scale-w_200.png 200w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_354.png 354w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_468.png 468w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_572.png 572w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_651.png 651w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_732.png 732w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_801.png 801w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_860.png 860w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_931.png 931w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_990.png 990w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1041.png 1041w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1096.png 1096w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1149.png 1149w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1200.png 1200w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1247.png 1247w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1293.png 1293w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1334.png 1334w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1385.png 1385w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1398.png 1398w,
          ../assets/images/fc-art1_n8jogg_c_scale-w_1400.png 1400w"
          src="../assets/images/fc-art1_n8jogg_c_scale-w_1400.png"
      />
      <h2 class="transition-opacity duration-400 ease-in-out home-header absolute text-center w-full md:w-2/4 opacity-80 group-hover:opacity-100 group-focus:opacity-100 md:left-0 left-header">
        Artist
      </h2>
    </router-link>
    <router-link class="cursor-pointer group" to='/in/dev/cv'>
      <img
        class='object-cover h-2/4 w-full md:w-2/4 md:h-full md:inline filter grayscale group-hover:grayscale-0 group-focus:grayscale-0 transform group-hover:scale-105 group-focus:scale-105 transition-all ease-in-out duration-300'
        alt='franco cespi dev'
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_200.jpg 200w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_488.jpg 488w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_642.jpg 642w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_772.jpg 772w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_870.jpg 870w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_950.jpg 950w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_1052.jpg 1052w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_1161.jpg 1161w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_1254.jpg 1254w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_1342.jpg 1342w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_1398.jpg 1398w,
        ../assets/images/fc-dev1_dmcjtr_c_scale-w_1400.jpg 1400w"
        src="../assets/images/fc-dev1_dmcjtr_c_scale-w_1400.jpg"
      />
          <h2 class="transition-opacity duration-400 ease-in-out home-header absolute text-center w-full md:w-2/4 opacity-80 group-hover:opacity-100 group-focus:opacity-100 md:right-0 right-header">
            Developer
          </h2>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
};
</script>

<style>
  h2.home-header {
    top: 0;
    @apply font-header;
    @apply text-4xl;
  }

  h2.left-header {
    transform: translateY(calc(5vh));
    text-shadow: 0 0 3vw #07d6c2;
    color: #07d6c2;
  }

  h2.right-header {
    transform: translateY(calc(90vh));
    text-shadow: 0 0 3vw #F40A35;
    color: #FB4264;
  }

  /* @media (min-width: 991.98px) {  md */
  @media (min-width: 767.98px) { /* sm */
    h2.left-header, h2.right-header {
      transform: translateY(calc(80vh));
    }
  }
</style>
