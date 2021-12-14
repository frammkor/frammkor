<template>
  <div>
    <div class="w-full h-56 bg-gray-600"></div>
    <section class="flex mt-16">
      <header>
        <h2 class="section-title">
          About Me
        </h2>
        <!-- <h2 class="w-16 transform rotate-270 top-0">About Me</h2> -->
      </header>
      <p>
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
    </section>

    <section class="flex mt-16">
      <header>
        <h2 class="section-title">
          Work experience
        </h2>
      </header>
      <ol class="w-full flex flex-col px-4 md:px-0">
        <template v-for='job in jobs' v-bind:key='job.companyName'>
          <job-card :job='job'></job-card>
        </template>
      </ol>
    </section>

    <section class="flex mt-16">
      <header>
        <h2 class="section-title">
          GitHub Profile
        </h2>
      </header>
      <ol class="w-full flex flex-col px-4 md:px-0">
        <p v-for='repo in repos' v-bind:key='repo.id'>
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

</style>
