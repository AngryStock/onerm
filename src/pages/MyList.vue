<template>
  <q-page>
    <q-dialog maximized v-model="listPopup" no-backdrop-dismiss>
      <ListPopup @closeListPopup="closeListPopup()" :myList="myList" />
    </q-dialog>
    <q-dialog v-model="startPopup" no-backdrop-dismiss>
      <StartPopup/>
    </q-dialog>
    <div class="target text_target border_bottom_target" style="border-radius: 20px;">

      <q-toolbar>
        <q-btn flat icon="fa-solid fa-chevron-left" @click="$router.go(-1)">
        </q-btn>
        <q-toolbar-title class="text-bold" style="font-size: 14px">운동목록</q-toolbar-title>
        <q-btn flat class="text-bold" style="font-size: 14px" @click="openListPopup()">추가</q-btn>
      </q-toolbar>
    </div>
    <div style="height: calc(100% - 50px);" class=" overflow-auto">
      <div class="q-pa-md">
        <div v-for="(a, i) in $store.state.routine.mylist.filter((a) => {
          return a.id == this.myList
        })" :key="i">
          <q-btn-group rounded class="full-width q-mb-md item_target text_target" style="height: 50px">
            <q-btn @click="startWorkout(i)" class="full-width text-bold"
              :label="a.title" style="font-size: 16px" />
            <q-btn class="q-pr-md" dense icon="delete" size="md" @click="$store.dispatch('routine/deleteMyList', {
              _id: a._id,
              num: i
            })" />
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
      listPopup: false,
      startPopup: false,
      myList: this.SessionStorage.getItem("myList"),
    };
  },
  methods: {
    openListPopup() {
      window.history.pushState({}, "listpopup", "/listpopup");
      this.listPopup = true
    },
    closeListPopup() {
      window.history.back();
      this.listPopup = false;
    },
    startWorkout(a){
      if(this.$store.state.routine.sec == 0){
        this.SessionStorage.set("slideNum",a)
        window.history.pushState({}, "startPopup", "/startPopup");
        this.startPopup = true;
      } else {
        this.SessionStorage.set("slideNum",a)
        this.$router.push({name:"records"})
      }
    }
  },
  mounted() {
    window.onpopstate = history.onpushstate = () => {
      if (window.location.href.split("/").pop().indexOf("listpopup") === -1) {
        this.listPopup = false
      }
      if (window.location.href.split("/").pop().indexOf("startPopup") === -1) {
        this.startPopup = false
      }
    }
  }
};
</script>
<script setup>
</script>

<style></style>
