<template>
  <div class="w-full h-full overflow-hidden">
    <router-link class="cursor-pointer group" to='/in/art'>
      <img
        class='object-top object-cover h-2/4 w-full md:w-2/4 md:h-full md:inline filter grayscale group-hover:grayscale-0 group-focus:grayscale-0 transform group-hover:scale-105 group-focus:scale-105 transition-all ease-in-out duration-300'
        alt='franco cespi art'
        src='../assets/fc-art1.png'
      />
      <h2 class="transition-opacity duration-400 ease-in-out home-header absolute text-center w-full md:w-2/4 opacity-80 group-hover:opacity-100 group-focus:opacity-100 md:left-0 left-header">
        Artist
      </h2>
    </router-link>
    <router-link class="cursor-pointer group" to='/in/dev/cv'>
      <img
        class='object-cover h-2/4 w-full md:w-2/4 md:h-full md:inline filter grayscale group-hover:grayscale-0 group-focus:grayscale-0 transform group-hover:scale-105 group-focus:scale-105 transition-all ease-in-out duration-300'
        alt='franco cespi dev'
        src='../assets/fc-dev1.jpeg'
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
