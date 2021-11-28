<template>
  <router-link to='/in/art'>
    <img
      class='object-cover h-2/4 w-full md:w-2/4 md:h-full md:inline'
      alt='franco cespi art'
      src='../assets/fc-art1.jpeg'
    />
  </router-link>
  <router-link to='/in/dev/cv'>
    <img
      class='object-cover h-2/4 w-full md:w-2/4 md:h-full md:inline'
      alt='franco cespi dev'
      src='../assets/fc-dev1.jpeg'
    />
  </router-link>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
};
</script>
