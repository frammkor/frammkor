<template>
    <div class="md:flex justify-center mb-8 w-full">
        <div class="text-right md:w-2/4">
        <h3 class="font-bold text-lg text-green-600"> {{ gitHubInfo.user_name }} </h3>
        <time :datetime="gitHubInfo.created_at">{{ gitHubInfo.created_at }}</time>
        </div>
        <ul
            class="
                mt-2 pt-2
                md:ml-4 md:pl-4 md:mt-0 md:pt-0
                border-t border-green-500
                md:border-l  md:border-t-0
                text-left md:w-2/4
                "
        >
        <li class="chevron-bullet">Public Repos: {{ gitHubInfo.public_repos_amount }}</li>
        <li class="chevron-bullet">Integration Testing w/Cypress</li>
        <li class="chevron-bullet">UI / UX improvements</li>
        <li class="chevron-bullet">Technology migrations</li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import { onMounted, watch } from '@vue/runtime-core';
import useFetch from '../composables/useFetch.js';

export default {
  name: 'GitHubProfile',
  setup() {
    const {
      data, error, loading, load,
    } = useFetch('https://api.github.com/users/frammkor/repos', 'something went wrong :(');

    const gitHubInfo = ref({
      user_name: 'frammkor',
      created_at: '2019-09-04',
      public_repos_amount: 0,
      repos: [],
      most_used_langs: [],
      href: 'https://github.com/frammkor',
    });

    onMounted(() => {
      load();
    });

    watch(data, () => {
      if (data.value) {
        gitHubInfo.value.public_repos_amount = data.value.Length;
        gitHubInfo.value.repos = data.value;
        const mostUsedLangs = {};
        gitHubInfo.value.most_used_langs = data.value.forEach((repo) => {
          mostUsedLangs[repo.language] = mostUsedLangs[repo.language] ? mostUsedLangs[repo.language] + 1 : 1;
        });
      }
    });

    return {
      gitHubInfo,
      error,
      loading,
    };
  },
  mounted() {
    fetch('https://api.github.com/users/frammkor/repos')
      .then((res) => res.json())
      .then((data) => {
        this.repos = data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style>

</style>
