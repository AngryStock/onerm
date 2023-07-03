<template>
  <div class="target text_target z-top full-width" style="height: calc(100% - 50px); margin-top: 50px;">
    <div class="full-width border_bottom_target" >
      <q-toolbar>
        <q-btn flat icon="fa-solid fa-chevron-left" @click="$emit('closeListPopup')">
        </q-btn>
        <q-toolbar-title class="text-bold q-pa-none" style="font-size: 14px"><q-input type="text" rounded outlined dense
            placeholder="운동검색" v-model="text" @update:model-value="
              search(divisionTab, equipmentTab, text, $event.data)
              ">
            <template v-slot:prepend>
              <q-icon name="search"></q-icon>
            </template>
            <template v-slot:append>
              <q-icon name="close"></q-icon>
            </template> </q-input></q-toolbar-title>
        <q-btn flat class="text-bold" style="font-size: 14px" @click="$store.dispatch('routine/addMyList', {
          id: myList,
          select: select,
        }); $emit('closeListPopup')">완료</q-btn>
      </q-toolbar>
      <q-tabs dense v-model="divisionTab" align="left" active-color="primary" indicator-color="transparent"
        @click="category(divisionTab, equipmentTab)">
        <q-tab v-for="(a, i) in divisionCategory" :key="i" :name="a" :label="a" class="q-px-xs" />
      </q-tabs>
      <q-tabs dense v-model="equipmentTab" align="left" active-color="primary" indicator-color="transparent"
        @click="category(divisionTab, equipmentTab)" content-class=" justify-start al">
        <q-tab v-for="(a, i) in equipmentCategory" :key="i" :name="a" :label="a" class="q-px-xs" />
      </q-tabs>
    </div>
    <div style="height: calc(100% - 124px);" class=" overflow-auto">
      <div class="q-pa-md">
        <div v-for="(a, i) in list" :key="i">
          <q-checkbox align="left" style="font-size: 16px;" class="full-width q-mt-sm"
            :class="!$q.dark.isActive ? 'shadow-1' : null" checked-icon="fa-solid fa-check" unchecked-icon="none" :val="a"
            v-model="select"><strong>{{ a.title }}</strong> <br />
            <span>{{ a.division }}</span></q-checkbox>
        </div>
      </div>
    </div>
    <div class="select_number">
      <span class="select_number_box">{{ select.length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      divisionCategory: ["전체", "가슴", "등", "하체", "어깨", "팔"],
      equipmentCategory: [
        "전체",
        "바벨",
        "덤벨",
        "케이블",
        "핀 로드",
        "맨몸운동",
        "플레이트",
        "스미스",
      ],
      divisionTab: "전체",
      equipmentTab: "전체",
      select: [],
      list: [],
      text: "",
    };
  },
  props: {
    myList: String,
  },
  methods: {
    category(a, b) {
      // console.log(a,b)
      this.list = this.$store.state.routine.list;
      if (a == "전체" && b == "전체") {
        return;
      } else if (a == "전체") {
        this.list = this.list.filter((result) => {
          return result.equipment.indexOf(b) != -1;
        });
      } else if (b == "전체") {
        this.list = this.list.filter((result) => {
          return result.division.indexOf(a) != -1;
        });
      } else {
        this.list = this.list.filter((result) => {
          return (
            result.equipment.indexOf(b) != -1 &&
            result.division.indexOf(a) != -1
          );
        });
      }
    },
    search(a, b, c, d) {
      console.log(a, b, c, d);
      if (d == "" || d == " ") {
        d = null;
      }
      var text = c.replace(/ /gi, "");
      this.category(a, b);
      if (text == "" && d == null) {
        return;
      } else if (text == "") {
        this.list = this.list.filter((result) => {
          return result.keyword.indexOf(d) != -1;
        });
      } else if (d == null) {
        this.list = this.list.filter((result) => {
          return result.keyword.indexOf(text) != -1;
        });
      } else {
        this.list = this.list.filter((result) => {
          return (
            result.keyword.indexOf(text) != -1 &&
            result.keyword.indexOf(d) != -1
          );
        });
      }
    },
  },
  mounted() {
    this.list = this.$store.state.routine.list;
  },
};
</script>

<style lang="scss" scoped>
.q-tab {
  flex: initial;
}

.select_number {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 5%;
  bottom: 5%;
  background-color: #4285f4;
  font-size: 25px;
  font-weight: bold;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
}

.select_number_box {
  width: 100%;
  text-align: center;
  padding-bottom: 2px;
}
</style>
