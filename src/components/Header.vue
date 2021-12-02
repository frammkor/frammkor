<template>
    <header
      class="h-header-height fixed w-full flex items-center justify-center z-50"
      :class='{ "glass-background": !isHome}'
    >
        <h1
          class='font-bold text-xl text-yellow-50 uppercase
          transition-all ease-in-out duration-700'
          :class='{ active: isHome}'
        >
          Franco Cespi
            <git-hub-icon class="text-gray-400 fill-current"></git-hub-icon>
        </h1>
  </header>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import GitHubIcon from '@/assets/icons/github.svg';

export default {
  name: 'Header',
  components: {
    GitHubIcon,
  },
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
// <header class="absolute top-2/4 right-0 left-0 text-center min-w-max">
</script>

<style>
header h1.active {
  transform: translateY(calc(48vh));
  top: 0;
  position: absolute;
  @apply text-4xl;
}
</style>
