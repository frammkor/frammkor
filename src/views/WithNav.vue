<template>
    <div class="xl:hidden absolute top-0 m-7 text-green-500 fill-current z-10 "
        @click="swtichNav"
        aria-controls="navbar"
    >
        <burger-menu />
    </div>
    <nav
        class='absolute w-full md:w-sidebar-width mt-header-height top-0 bottom-0 left-0
            transition-all ease-in-out duration-700 glass-background z-10'
        :class="{ 'active': !showNav }"
        :aria-expanded='showNav'
        id='navbar'
    >
        <!-- subsite switcher -->
        <p class="uppercase">
            <router-link
                class='tracking-wider'
                :class='{ "text-fuchsia-500 font-bold": subsite === "art" }'
                :to='{  name: "About" }'
            >
                Artist
            </router-link>
            /
            <router-link
                class='tracking-wider'
                :class='{ "text-green-500 font-bold text-": subsite === "dev" }'
                :to='{  name: "CV" }'
            >
                Programmer
            </router-link>
        </p>

        <!-- subsite navigation -->
        <ul class="pt-8 pr-8 text-center md:text-right">
            <!-- dev nav -->
            <li v-show='subsite === "dev"'>
                <router-link
                    class="text-lg focus:text-primary hover:text-primary"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "CV" }'
                >
                    Curriculum
                </router-link>
                <ol>
                    <li>
                        <router-link
                            class="text-lg focus:text-primary hover:text-primary"
                            :class='{ "text-blue-300": subsite === "art" }'
                            to='#about'
                        >
                            About
                        </router-link>
                    </li>
                </ol>
            </li>
            <li v-show='subsite === "dev"'>
                <router-link
                    class="text-lg focus:text-primary hover:text-primary"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "Projects" }'
                >
                    Projects
                </router-link>
            </li>
            <!-- art nav -->
            <li v-show='subsite === "art"'>
                <router-link
                    class="text-lg focus:text-primary hover:text-primary"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "About" }'
                >
                    About
                </router-link>
            </li>
            <li v-show='subsite === "art"'>
                <router-link
                    class="text-lg focus:text-primary hover:text-primary"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "Gallery" }'
                >
                    Gallery
                </router-link>
            </li>
        </ul>
    </nav>
    <div class="pt-header-height md:px-4 container xl2:mx-auto lg:pl-sidebar-width xl2:pl-4">
        <router-view />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import BurgerMenu from '@/assets/icons/burger-menu.svg';

export default {
  name: 'WithNav',
  components: {
    BurgerMenu,
  },
  setup() {
    const route = useRoute();

    const subsite = ref(route.path.split('/')[2]);
    const showNav = ref(true);

    const swtichNav = () => {
      showNav.value = !showNav.value;
    };

    watch(
      () => [route.path, showNav],
      () => {
        // eslint-disable-next-line prefer-destructuring
        subsite.value = route.path.split('/')[2];
      },
    );
    return { subsite, swtichNav, showNav };
  },
};
</script>

<style>
nav.active {
  transform: translateX(calc(-1 * 100vw));
}
</style>
