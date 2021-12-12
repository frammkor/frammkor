<template>
  <div>
      This is the Gallery
      TODO: show base on path
      <router-link :to="{ name: 'GalleryItem', params: {id: 'test'}}">
        test
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
};
</script>

<style>

</style>
