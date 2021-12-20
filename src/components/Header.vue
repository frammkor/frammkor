<template>
    <header
      class="h-header-height fixed w-full flex items-center justify-center z-10"
      :class='{ "glass-background": !isHome}'
    >
        <h1
          class='font-bold text-xl text-yellow-50 uppercase mx-auto w-full
          transition-all ease-in-out duration-700 font-header text-gray-50 pointer-events-none'
          :class='{ active: isHome}'
        >
          Franco Cespi
        </h1>
  </header>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Header',
  setup() {
    const route = useRoute();

    const isHome = ref(route.fullPath === '/');
    watch(
      () => route.fullPath,
      () => {
        isHome.value = route.fullPath === '/';
      },
    );
    return { isHome };
  },
};
</script>

<style>
  header h1.active {
    transform: translateY(calc(45vh));
    text-shadow: 0 0 2vw #976d2d;
    color: #e4a341;
    @apply text-3xl;
    @apply md:text-5xl;
  }

  @media (min-width: 767.98px) { /* sm */
  header h1.active {
    transform: translateY(calc(20vh));
  }
  }
</style>
