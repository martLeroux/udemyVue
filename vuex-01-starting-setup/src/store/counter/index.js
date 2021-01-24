import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters'

export default {
  //namespaced: true, //si on veut utiliser les mêmes noms de state ou d'action dans plusieurs modules, implique d'appeller les actions/getters etc différement voir chapitre 220
  state() {
    return {
      counter: 0,
    }
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
}