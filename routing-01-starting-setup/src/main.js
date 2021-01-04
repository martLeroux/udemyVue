import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import TeamsList from './components/teams/TeamsList.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import App from './App.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/teams',
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
  /*if (to.name === 'teams-members') {
    next();
  } else {
    next({ name: 'teams-members', params: { teamId: 't2' } })
  }*/
  next();
});
const app = createApp(App);

app.use(router);
app.mount('#app');
