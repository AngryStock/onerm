import { boot } from "quasar/wrappers";
import { LocalStorage, SessionStorage } from "quasar";

export default boot(({ app }) => {
  app.config.globalProperties.LocalStorage = LocalStorage;
  app.config.globalProperties.SessionStorage = SessionStorage;
});
