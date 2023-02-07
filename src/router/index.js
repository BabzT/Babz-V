import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue';
import Project from '../views/ProjectView.vue';
import Team from '../views/TeamView.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/projects',
    name: 'projects',
    component: Project
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
