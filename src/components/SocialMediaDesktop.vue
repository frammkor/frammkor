<template>
  <transition-group
    appear
    tag='ul'
    name="drop-in"
    @after-enter='incrementIndex'
    class="fixed w-16 right-0 top-0 bottom-8 flex flex-col-reverse"
  >
    <template v-for='(link, index) in links'>
      <li v-if="index <= workingOnIndex"
        :key='link.name'
        :class="{
          'mt-auto': index === links.length,
        }
      ">
        <a :href='link.href'>
          <component class="text-green-500 fill-current h-8 lg:h-12 w-8 lg:w-12 mb-4 " :is='link.svg'></component>
        </a>
      </li>
    </template>
  </transition-group>
</template>

<script>
import YouTube from '@/assets/icons/youtube.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import GitHub from '@/assets/icons/github.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Mail from '@/assets/icons/email.svg';

export default {
  name: 'SocialMediaDesktop',
  data() {
    return {
      links: [
        {
          svg: YouTube,
          href: 'https://www.youtube.com/channel/UCH6NObYxVRehBZJT5q8Bfiw',
          name: 'YouTube',
        },
        {
          svg: Instagram,
          href: 'https://www.instagram.com/franco.cespi/',
          name: 'Instagram',
        },
        {
          svg: LinkedIn,
          href: 'https://www.linkedin.com/in/franco-cespi/',
          name: 'LinkedIn',
        },
        {
          svg: GitHub,
          href: 'https://github.com/frammkor',
          name: 'GitHub',
        },
        {
          svg: Mail,
          href: 'mailto:flcespi@gmail.com',
          name: 'Email',
        },
      ],
      workingOnIndex: 0,
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
.drop-in-enter-active {
  transition: transform 0.4s ease-in;
}

.drop-in-enter-from {
  transform: translateY(-100vh);
}
</style>
