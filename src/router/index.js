import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Curriculum from '../views/Curriculum.vue';
import WithNav from '../views/WithNav.vue';
import Dev from '../views/Dev.vue';
import Art from '../views/Art.vue';
import Gallery from '../views/Projects.vue';
import ProjectItem from '../views/ProjectItem.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/in',
    name: 'WithNav',
    component: WithNav,
    children: [
      {
        path: 'dev',
        name: 'Dev',
        component: Dev,
        children: [
          {
            name: 'CV',
            path: 'cv',
            component: Curriculum,
          },
          {
            name: 'Projects', // change to GalleryDev?
            path: 'projects',
            component: Gallery,
          },
          {
            name: 'ProjectItem',
            path: 'gallery/:id',
            component: ProjectItem,
          },
        ],
      },
      {
        path: 'art',
        name: 'Art',
        component: Art,
        children: [
          {
            name: 'About',
            path: 'about',
            component: About,
          },
          {
            name: 'Gallery', // change to GalleryArt?
            path: 'gallery',
            component: Gallery,
          },
        ],
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
