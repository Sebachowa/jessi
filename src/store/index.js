import { createStore } from 'vuex'
import flitsModule from './flits'
import usersModule from './users'
/* import VuexPersister from 'vuex-persister' */

/* const vuexPersister = new VuexPersister({
  storage: sessionStorage
}) */

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    flits: flitsModule,
    users: usersModule
  },
 /*  plugins: [vuexPersister.persist] */
})


