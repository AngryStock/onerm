<template>
  <q-page>
    <q-dialog v-model="addPopup" no-backdrop-dismiss>
      <AddPopup :popupTitle="popupTitle" @addProcess="
        addPopup = false;
      addProcess($event, tabId);
      " />
    </q-dialog>
    <div>
      <q-dialog v-model="editPopup" no-backdrop-dismiss>
        <EditPopup :text="divisionTitle" @editProcess="
          editPopup = false;
        editProcess($event);
        " />
      </q-dialog>
    </div>
    <q-dialog v-model="routineEdit" no-backdrop-dismiss>
      <q-card style="width: 300px" class="target">
        <q-card-section>
          <div style="font-size: medium; font-weight: bold" class="text_target">
            분할 수 이름
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input type="text" dense @focus="$event.target.select()" v-model="routineTitle" @keyup.enter="
            routineEdit = false;
          $store.dispatch('routine/updateRoutine', {
            _id: routineId,
            title: routineTitle,
            num: routineNumber,
          });
          " />
        </q-card-section>

        <q-card-actions align="center" class="target">
          <q-btn class="text-weight-bold text-red" flat label="삭제"  @click="
            $store.dispatch('routine/deleteRoutine', {
              _id: routineId,
              num: routineNumber,
            });
          tab = null;
          tabId = null;
          $router.go(-1);
          " />
          <q-btn class="text-weight-bold text-primary" flat label="수정"  @click="
            $store.dispatch('routine/updateRoutine', {
              _id: routineId,
              title: routineTitle,
              num: routineNumber,
            });
          $router.go(-1)
            " />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="target text_target border_bottom_target" style="border-radius: 20px;">
      <q-toolbar>
        <q-btn flat>
          <q-avatar size="28px">
            <img src="../assets/logo-192x192.png" />
          </q-avatar>
        </q-btn>
        <q-toolbar-title class="text-bold" style="font-size: 14px">부위선택</q-toolbar-title>
        <q-btn flat class="text-bold" style="font-size: 14px" @click="addDivision()">추가</q-btn>
      </q-toolbar>
      <div class="row no-wrap">
        <div class="col-10">
          <q-tabs v-model="tab" active-color="primary" indicator-color="transparent" dense>
            <q-tab v-for="(a, i) in $store.state.routine.routine" :key="i" :name="a.title" :label="a.title"
              @click="tabSave(a)" @mousedown="startPress(a, i)" @touchstart.passive="startPress(a, i)"
              @mouseup="endPress()" @touchend.passive="endPress()" @touchcancel.passive="endPress()" />
          </q-tabs>
        </div>
        <div class="col-2">
          <q-btn flat icon="add_circle_outline" class="text-grey-5 full-width" @click="addRoutine()" />
        </div>
      </div>
    </div>
    <div style="height: calc(100% - 87px);" class=" overflow-auto">
      <div class="q-pa-md">
        <div v-for="(a, i) in $store.state.routine.division" :key="i">
          <q-btn-group v-if="a.id == tabId || tabId == null" rounded class="full-width q-mb-md item_target text_target"
            style="height: 50px">
            <q-btn to="/routine/mylist" @click="SessionStorage.set('myList', a._id)" class="full-width text-bold"
              :label="a.title" style="font-size: 16px" />
            <q-btn class="q-px-md" dense icon="edit" size="md" @click="editDivision(a.title, a._id, i)" />
            <q-btn class="q-px-md" dense icon="delete" size="md" @click="
              $store.dispatch('routine/deleteDivision', { id: a._id, num: i })
              " />
          </q-btn-group>
        </div>
      </div>
    </div>
    <Footer1 />
  </q-page>
</template>


<script>
export default {
  data() {
    return {
      routineTitle: "",
      routineId: "",
      routineNumber: NaN,
      popupTitle: "",
      routineEdit: false,
      addPopup: false,
      editPopup: false,
      pressTimer: null,
      addType: "",
      divisionTitle: "",
      divisionId: "",
      divisionNumber: NaN,
    };
  },
  methods: {
    addProcess(title, tabId) {
      console.log(title);
      if (this.addType == "routine") {
        this.$store.dispatch("routine/addRoutine", title);
      } else if (this.addType == "division") {
        this.$store.dispatch("routine/addDivision", {
          title: title,
          id: tabId,
        });
      }
    },
    addDivision() {
      window.history.pushState({}, "addPopup", "/addPopup")
      this.popupTitle = "운동 부위 이름";
      this.addPopup = true;
      this.addType = "division";
    },
    addRoutine() {
      window.history.pushState({}, "addPopup", "/addPopup")
      this.popupTitle = "분할 수 이름";
      this.addPopup = true;
      this.addType = "routine";
    },
    editProcess(divisionTitle) {
      this.$store.dispatch("routine/updateDivision", {
        _id: this.divisionId,
        title: divisionTitle,
        num: this.divisionNumber
      });
    },
    editDivision(divisionTitle, divisionId, divisionNumber) {
      window.history.pushState({}, "editPopup", "/editPopup")
      this.divisionTitle = divisionTitle;
      this.divisionId = divisionId;
      this.divisionNumber = divisionNumber;
      this.editPopup = true;
    },
    startPress(a, i) {
      this.pressTimer = setTimeout(() => {
        window.history.pushState({}, "routineEdit", "/routineEdit")
        navigator.vibrate(100)
        this.routineEdit = true;
        this.routineTitle = a.title;
        this.routineId = a._id;
        this.routineNumber = i;
      }, 600);
    },
    endPress() {
      clearTimeout(this.pressTimer);
    },
  },
  mounted() {
    window.onpopstate = history.onpushstate = () => {
      if (window.location.href.split("/").pop().indexOf("addPopup") === -1) this.addPopup = false;
      if (window.location.href.split("/").pop().indexOf("editPopup") === -1) this.editPopup = false;
      if (window.location.href.split("/").pop().indexOf("routineEdit") === -1) this.routineEdit = false;
    };
  }
};
</script>

<script setup>
import { LocalStorage, SessionStorage } from "quasar";
import { ref } from "vue";

const tab = ref(null);
const tabId = ref(null);

tab.value = LocalStorage.getItem("tab");
tabId.value = LocalStorage.getItem("tabId");

const tabSave = (a) => {
  LocalStorage.set("tab", a.title);
  LocalStorage.set("tabId", a._id);
  tabId.value = a._id;
};
</script>



<style lang="scss" scoped>
:deep(.q-tab__label) {
  font-size: 14px;
}
</style>
