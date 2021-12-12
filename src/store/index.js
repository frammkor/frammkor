import { createStore as createVuexStore } from 'vuex';

import Jobs from '@/utils/Jobs';
import Job from '@/utils/Job';

const JobsObjectArray = Jobs.map((job) => new Job(
  job.title,
  job.companyName,
  job.startDate,
  job.endDate,
  job.descriptions,
));

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   },
// });

// const createStore = (state = { jobs: [] }) => createVuexStore({ state, actions, mutations, getters });
const store = (state = { jobs: JobsObjectArray }) => createVuexStore({ state });

export default store;
