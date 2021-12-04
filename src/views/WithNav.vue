<template>
    <div class="md:hidden absolute top-0 m-7 text-green-500 fill-current z-10 "
        @click="swtichNav"
    >
        <burger-menu />
    </div>
    <nav
        class='absolute w-full md:w-sidebar-width pt-header-height top-0 bottom-0 left-0
            transition-all ease-in-out duration-700 glass-background'
        :class="{ 'active': !showNav }"
    >
        <!-- subsite switcher -->
        <p class="uppercase">
            <router-link
                :class='{ "text-fuchsia-500": subsite === "art" }'
                :to='{  name: "About" }'
            >
                Artist
            </router-link>
            /
            <router-link
                :class='{ "text-green-500": subsite === "dev" }'
                :to='{  name: "CV" }'
            >
                Programmer
            </router-link>
        </p>

        <!-- subsite navigation -->
        <ul class="pt-8 pr-8 text-center md:text-right">
            <!-- dev nav -->
            <li>
                <router-link
                    class="text-lg"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "CV" }'
                >
                    CV
                </router-link>
            </li>
            <li>
                <router-link
                    class="text-lg"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "Projects" }'
                >
                    Projects
                </router-link>
            </li>
            <!-- art nav -->
            <li>
                <router-link
                    class="text-lg"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "CV" }'
                >
                    CV
                </router-link>
            </li>
            <li>
                <router-link
                    class="text-lg"
                    :class='{ "text-blue-300": subsite === "art" }'
                    :to='{  name: "Projects" }'
                >
                    Projects
                </router-link>
            </li>
        </ul>
    </nav>
    <div class="pt-header-height md:pl-sidebar-width container mr-auto">
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
    BurgerMenu
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
