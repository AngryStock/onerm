<template>
  <q-page>
    <Flicking ref="flicking" :options="{
      align: 'prev',
      moveType: 'strict',
      defaultIndex: SessionStorage.getItem('slideNum'),
      duration: 150,
      threshold: 5,
    }">
      <div v-for="(a, i) in $store.state.routine.mylist.filter((a) => {
        return a.id == this.myList
      })" :key="i" class="full-width">
        <Record :title="a.title" :exrecord="exrecord(a.list_id)" :record="record(a.list_id)" :record_name="a.list_id"
          @prev="$refs.flicking.prev()" @next="$refs.flicking.next()" :firstList="firstList(i)" :lastList="lastList(i, $store.state.routine.mylist.filter((a) => {
            return a.id == this.myList
          }).length - 1)" :break_time="record(a.list_id)[record(a.list_id).length - 1].break_time" :myList="myList"
          :exdate="exdate(a.list_id)" />
        <Footer2 :record="record(a.list_id)" :record_name="a.list_id" :memo="memo(a.list_id)" @opener="opener()"
          :memoValue="memoValue" />
      </div>
    </Flicking>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      myList: this.SessionStorage.getItem("myList"),
      memoValue: false,
    }
  },
  methods: {
    closer() {
      this.memoValue = false;
    },
    opener() {
      this.memoValue = true;
    },
    exdate(list_id) {
      return this.$store.state.routine.exrecord.find(e => e.name == list_id).date
    },
    record(list_id) {
      return this.$store.state.routine.record.find(e => e.name == list_id).record
    },
    exrecord(list_id) {
      return this.$store.state.routine.exrecord.find(e => e.name == list_id).record
    },
    memo(list_id) {
      return this.$store.state.routine.memo.find(e => e.memo == list_id).contents
    },
    firstList(i) {
      if (i == 0) {
        return true;
      } else {
        return false;
      }
    },
    lastList(i, length) {
      if (i == length) {
        return true;
      } else {
        return false;
      }
    },
    popupCloser() {
      return false
    }
  },
  mounted() {
    window.onpopstate = history.onpushstate = () => {
      if (window.location.href.split("/").pop().indexOf("addPopup") === -1) {
        this.closer()
      }
      if (window.location.href.split("/").pop().indexOf("startPopup") === -1) {
        this.closer()
      }
    }
  }
};
</script>
<script setup>
</script>
<style></style>
