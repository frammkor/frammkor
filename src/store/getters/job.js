// import { FILTERS } from '../../constants/filter';

// export function selectCompleted(todos) {
//   return todos.filter(todo => todo.completed);
// }

// export function selectNotCompleted(todos) {
//   return todos.filter(todo => !todo.completed);
// }

export function getJobs(todos) {
  switch (true) {
    default:
      return [...todos];
  }
}

export const getters = {
  getProgrammingJobs: (state) => getJobs(state.jobs),
};
