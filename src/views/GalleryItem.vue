<template>
    <article class="md:flex">
        <div class="h-56 md:w-2/3"></div>
        <div class="text-left mx-16 md:w-1/3">
            <div class="mb-8 mx-8">
                <h2 class="text-green-400 text-3xl">Proyecto 1</h2>

                <time>12 - 04 - 2019</time>
                <p>Client</p>
                <p>Tarea</p>

                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button class="bg-green-400 text-gray-900 py-2 px-4 mt-4">
                        See online
                    </button>
                </a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatum dolores accusamus ea qui similique, ullam quod blanditiis error soluta natus, distinctio maiores aperiam praesentium sit maxime, fuga odio cumque?</p>
        </div>
    </article>
</template>

<script>
export default {
  name: 'GalleryItem',
  data() {
    return {
      id: this.$route.params.id,
    };
  },

};
</script>

<style>

</style>
