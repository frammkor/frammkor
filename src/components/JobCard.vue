<template>
    <li class="md:flex justify-center mb-8 w-full">
        <div class="text-right md:w-2/4">
        <h3 class="font-bold text-lg text-green-600"> {{ job.title }} </h3>
        <p> {{ job.companyName }} </p>
        <time datetime="2010-09">Sep 2019</time> - <time datetime="2021-08">Today</time>
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
        <li class="chevron-bullet">Development methodology: Waterfall</li>
        <li class="chevron-bullet">Integration Testing w/Cypress</li>
        <li class="chevron-bullet">UI / UX improvements</li>
        <li class="chevron-bullet">Technology migrations</li>
        </ul>
    </li>
</template>

<script>
export default {
  name: 'JobCard',
  props: ['job', 'test'],
};
</script>

<style>
header h1.active {
  transform: translateY(calc(48vh));
  top: 0;
  position: absolute;
  @apply text-4xl;
}
</style>
