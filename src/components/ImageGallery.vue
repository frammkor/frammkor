<template>
    <img id='displaying-image' class='object-contain w-full max-h-96' src="../assets/images/hm-milonga.png" alt="A milonga detail screen" srcset="">
    <div class="mt-2 overflow-x-scroll md:overflow-auto">
        <div class='grid grid-cols-4 gap-4 md:w-full w-max'>
            <img @keypress.enter='changeDisplayingImage' @click='changeDisplayingImage' role='button' tabindex="0" class="w-32 h-18 object-contain" src="../assets/images/hm-milonga.png" alt="A milonga detail screen" srcset="" >
            <img @keypress.enter='changeDisplayingImage' @click='changeDisplayingImage' role='button' tabindex="0" class="w-32 h-18 object-contain" src="../assets/images/hm-milonga-list.png" alt="Milonga list" srcset="" >
            <img @keypress.enter='changeDisplayingImage' @click='changeDisplayingImage' role='button' tabindex="0" class="w-32 h-18 object-contain" src="../assets/images/hm-registration.png" alt="Registration Screen for Hoy Milonga" srcset="" >
            <img @keypress.enter='changeDisplayingImage' @click='changeDisplayingImage' role='button' tabindex="0" class="w-32 h-18 object-contain" src="../assets/images/hm-shop-list.png" alt="Listing of shops" srcset="" >
        </div>
    </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  methods: {
    // this needs to change to work with vue
    changeDisplayingImage: (e) => {
      const imgSrc = e.target.src;
      document.getElementById('displaying-image').src = imgSrc;
    },
  },
};
</script>

<style>

</style>
