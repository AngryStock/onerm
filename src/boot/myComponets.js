import AddPopup from "../components/AddPopup.vue";
import EditPopup from "../components/EditPopup.vue";
import ListPopup from "../components/ListPopup.vue";
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/vue3-flicking/dist/flicking-inline.css';
import Flicking from '../../node_modules/@egjs/vue3-flicking/dist/flicking.esm';
import Record from "../components/Record.vue"
import Footer1 from "../components/Footer1.vue"
import Footer2 from "../components/Footer2.vue"
import StartPopup from "../components/StartPopup.vue"

export default ({ app }) => {
  app.component("AddPopup", AddPopup);
  app.component("EditPopup", EditPopup);
  app.component("ListPopup", ListPopup);
  app.component("Flicking", Flicking);
  app.component("Record", Record);
  app.component("Footer1", Footer1);
  app.component("Footer2", Footer2);
  app.component("StartPopup", StartPopup);
};
