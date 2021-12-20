<template>
  <transition-group appear tag='ul' name="slide-in" @after-enter='incrementIndex' class="mx-4 lg:mx-64 my-4 grid gap-4">
    <template v-for='project in projects'>
      <li class='matrix-load-initial' v-if="project <= workingOnIndex" :key='project'>
        <router-link :to="{ name: 'ProjectItem', params: {id: 'test'}}" class='group'>
          <div class="h-24 matrix-loading" :class="{'matrix-loaded': workingOnIndex > project}">
            <img class='object-cover w-full h-full group-hover:scale-110 group-focus:scale-110 transform duration-500 ease-in-out filter grayscale group-hover:grayscale-0 group-focus:grayscale-0'
              src="../assets/images/hm-milonga.png"
              alt="A milonga detail screen"
              srcset=""
            >
          </div>
        </router-link>
      </li>
    </template>
  </transition-group>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      workingOnIndex: 0,
      projects: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  methods: {
    incrementIndex() {
      this.workingOnIndex += 1;
    },
  },
};
</script>

<style>
.slide-in-enter-active {
  transition: transform 0.2s ease-out;
}

.slide-in-leave-active {
  transition: transform 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100vw);
}

.matrix-loading {
  transition: transform 0.3s ease-out;
  transform: scaleY(0.05);
}

.matrix-loading::after {
  transition: opacity 0.3s ease-out;
  content: ' ';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: greenyellow;
}

.matrix-loaded {
  transform: scaleY(1);
}

.matrix-loading.matrix-loaded::after {
  opacity: 0;
}
</style>
