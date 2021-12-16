<template>
  <div>
    <h2 class="text-green-500 text-4xl">Curriculum Vitale</h2>
    <section class="flex md:flex-col mt-16">
      <header>
        <h3 class="section-title">
          About Me
        </h3>
        <!-- <h2 class="w-16 transform rotate-270 top-0">About Me</h2> -->
      </header>
      <div class="flex">

        <p class="mx-2 md:mx-4">
          Phosfluorescently incubate 24/7 innovation without standards compliant alignments. Professi
          onally communicate
          functionalized action items without client-centric deliverables. Globally parallel task alte
          rnative portals vis-a-vis
          alternative leadership skills. Energistically develop low-risk high-yield synergy and granul
          ar catalysts for change.
          Credibly recaptiualize synergistic customer service rather than tactical outsourcing.
          Dynamically productize timely partnerships and inexpensive services. Seamlessly impact lon
          g-term high-impact metrics whereas
          robust best practices. Phosfluorescently transform multimedia based quality vectors after
          holistic manufactured products. Continually conceptualize compelling technology and ubiquito
          ROI. Credibly innovate resource-leveling relationships after ethical paradigms.
          Objectively enhance fully researched markets for bricks-and-clicks e-tailers. Phosfluorescen
          ance timely mindshare whereas vertical
          interfaces. Competently fashion interdependent technologies before high standards in ROI. Gl
          productize inexpensive bandwidth with
          distributed information. Phosfluorescently maintain viral innovation with flexible methods
          werment.

            Collaboratively.
        </p>
        <img src='../assets/images/IMG_0255bb_deCara.jpeg' class="hidden md:block rounded-full h-64 w-64 filter hue-rotate-180" alt='Hue rotated images of Franco with a suite' />
        <!-- hue-rotate-90 -->
      </div>
    </section>

    <section class="flex md:flex-col mt-16">
      <header>
        <h3 class="section-title">
          Work experience
        </h3>
      </header>
      <ol class="w-full flex flex-col px-4 md:px-0">
        <template v-for='job in jobs' :key='job.companyName'>
          <job-card :job='job'></job-card>
        </template>
      </ol>
    </section>

    <section class="flex md:flex-col mt-16">
      <header>
        <h3 class="section-title">
          GitHub Profile
        </h3>
      </header>
      <ol class="w-full flex flex-col px-4 md:px-0">
        <p v-for='repo in repos' :key='repo.id'>
          name: {{ repo.name }} / language: {{ repo.language }}
        </p>
      </ol>
    </section>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import JobCard from '../components/JobCard.vue';
import Jobs from '@/utils/Jobs';
import Job from '@/utils/Job';

export default {
  name: 'Curriculum',
  components: {
    JobCard,
  },
  data() {
    return {
      repos: [],
    };
  },
  setup() {
    const JobsObjectArray = Jobs.map((job) => new Job(
      job.title,
      job.companyName,
      job.startDate,
      job.endDate,
      job.descriptions,
    ));

    return {
      jobs: JobsObjectArray,
    };
  },
  mounted() {
    fetch('https://api.github.com/users/frammkor/repos')
      .then((res) => res.json())
      .then((data) => {
        this.repos = data;
      })
      .catch((err) => console.error(err));
  }
};
</script>

<style>
.section-title {
  @apply uppercase;
  @apply text-green-500;
  @apply text-2xl;
  @apply mb-2;
}

@media (max-width: 767.98px) { /* apply when is smaller */
  .section-title {
    @apply transform;
    writing-mode: vertical-rl;
    @apply rotate-180;
  }
}
</style>
