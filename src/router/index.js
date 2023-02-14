import { createRouter, createWebHashHistory } from "vue-router";
import { isUser, isAnon } from './role-guards';

const routes = [
  /* {
    path: "/",
    name: "HomeView",
    component: () =>
      import( "../views/HomeView.vue"),
  }, */
  {
    path: "/",
    name: "flitsView",
    component: () =>
      import(/* webpackChunkName: "flitsView" */ "../views/FlitsView.vue"),
  },
  {
    path: "/signup",
    name: "signupView",
    beforeEnter: [isAnon],
    component: () =>
      import(/* webpackChunkName: "signupView" */ "../views/SignupView.vue"),
  },

  {
    path: "/login",
    name: "loginView",
    beforeEnter: [isAnon],
    component: () =>
      import(/* webpackChunkName: "loginView" */ "../views/LoginView.vue"),
  },
  {
    path: "/test",
    name: "testView",
    component: () =>
      import(/* webpackChunkName: "testView" */ "../views/TestView.vue"),
  },
  {
    path: "/flit-details/:id",
    name: "flitDetailView",
    beforeEnter: [isUser],
    component: () => import("../views/FlitDetailView.vue"),
    props: (route) => {
      const id = route.params.id;
      return id;
    },
  },
  {
    path: "/user-profile/:id",
    name: "selectedUserView",
    beforeEnter: [isUser],
    component: () => import("../views/SelectedUserView.vue"),
    props: (route) => {
      const id = route.params.id;
      return id;
    },
  },
  {
    path: "/profile",
    name: "profileView",
    beforeEnter: [isUser],
    component: () =>
      import(/* webpackChunkName: "profileView" */ "../views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
