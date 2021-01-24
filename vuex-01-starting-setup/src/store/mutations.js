export default {
  loginOrLogOut(state, payload) {
    state.isLoggedIn = payload.isLoggedIn;
    console.log(state.isLoggedIn);
  }
}