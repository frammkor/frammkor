<template>
  <Header />
  <main
    class='bg-gray-900 h-screen w-screen overflow-auto font-dev text-gray-200 overflow-x-hidden'
  >
    <router-view />
  </main>
  <SocialMediaDesktop />
</template>

<script>
import Header from '@/components/Header.vue';
import SocialMediaDesktop from '@/components/SocialMediaDesktop.vue';

export default {
  name: 'App',
  components: {
    Header,
    SocialMediaDesktop,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
