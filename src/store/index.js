import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import routine from "./routine";
import profile from "./profile";
import calendar from "./calendar";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: { routine, profile, calendar },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
  });

  return Store;
});
