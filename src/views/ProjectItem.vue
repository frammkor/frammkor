<template>
    <article class="md:flex">
        <div class="md:h-56 md:w-2/3 mb-8">
          <image-gallery />
        </div>
        <div class="text-left mx-4 lg:mx-16 md:w-1/3">
            <div class="mb-8 mx-2 md:mx-8">
                <h2 class="text-green-400 text-3xl">Proyecto 1</h2>

                <p>Role: FrontEnd Lead Developer</p>
                <p>Currently on Development</p>
                <p>Client: Hoy Milonga Team</p>

                <a
                  href="https://hoy-milonga.com/buenos-aires/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to see this project online"
                >
                    <button
                      class="bg-green-400 text-gray-900 py-2 px-4 mt-4"
                    >
                        See online
                    </button>
                </a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatum dolores accusamus ea qui similique, ullam quod blanditiis error soluta natus, distinctio maiores aperiam praesentium sit maxime, fuga odio cumque?</p>
        </div>
    </article>
</template>

<script>
import ImageGallery from '../components/ImageGallery.vue';

export default {
  components: { ImageGallery },
  name: 'ProjectItem',
  component: [
    ImageGallery,
  ],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style>

</style>
