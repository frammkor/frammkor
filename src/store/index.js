import { createStore as createVuexStore } from 'vuex';
import actions from './actions/jobs';
import getters from './getters/job';



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
const store = (state = { jobs: [] }) => createVuexStore({ state, actions, mutations: {}, getters });
// const store = (state = { jobs: JobsObjectArray }) => createVuexStore({ state });

export default store;
