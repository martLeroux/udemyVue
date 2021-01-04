import { createRouter, createWebHistory } from 'vue-router';
import TeamsFooter from './pages/TeamsFooter.vue';
import TeamsList from './pages/TeamsList.vue';
import NotFound from './pages/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      alias: '/',
      children: [
        { name: 'teams-members', path: '/teams/:teamId', component: TeamMembers, props: true },
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },

    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(toScroll, fromScroll, savedPosition) {
    return savedPosition ? savedPosition : { left: 0, top: 0 }
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs Auth!');
  }
  /*if (to.name === 'teams-members') {
    next();
  } else {
    next({ name: 'teams-members', params: { teamId: 't2' } })
  }*/
  next();
});

router.afterEach((to, from) => {
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;

