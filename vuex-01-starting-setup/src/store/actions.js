export default {
  loginOrLogOut(context, payload) {
    console.log('loginOrLogOut action');
    context.commit('loginOrLogOut', payload);
  }
}