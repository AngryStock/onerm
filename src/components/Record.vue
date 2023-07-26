<template>
  <div class="full-width target text_target ">
    <q-toolbar>
      <q-btn flat icon="fa-solid fa-chevron-left" @click="$router.go(-1)">
      </q-btn>
      <q-toolbar-title class="text-bold" style="font-size: 14px">{{ title }}</q-toolbar-title>
      <q-btn class="text-warning" icon="fa-solid fa-flag" flat @click="$store.dispatch('routine/addRecord', myList)" />
    </q-toolbar>
  </div>

  <div style="height: calc(100% - 107px); font-size: 16px;">
    <div style="height: 30%;" class=" overflow-auto q-pa-sm text_target">
      <div class="row text-bold">
        <div class="col text-left">이전기록</div>
        <div v-if="exdate == null" class="col text-right text-negative"> 기록이 없습니다 </div>
        <div v-else class="col text-right"> {{ exDate().month }}.{{ exDate().date }}({{
          exDate().few_days_ago
        }})</div>
      </div>
      <div class="row q-gutter-sm">
        <div class="col ">세트</div>
        <div class="col ">KG</div>
        <div class="col ">REP</div>
        <div class="col ">휴식</div>
        <div class="col ">수행</div>
      </div>
      <div class="row q-gutter-sm" v-for="(a, i) in exrecord" :key="i">
        <div class="col ">{{ i + 1 }}</div>
        <div class="col ">{{ a.kg }}</div>
        <div class="col ">{{ a.rep }}</div>
        <div class="col ">{{ a.break_time }}</div>
        <div class="col ">{{ min(a.performance_time) }}:{{ sec(a.performance_time) }}</div>
      </div>
    </div>

    <div style="height: 40px;" class="border_bottom_target border_top_target flex flex-center text_target">
      예상 1RM : {{ onerm(exrecord) }}KG
    </div>

    <div style="height: calc(100% - 30% - 140px);" class=" overflow-auto q-pa-sm text_target">
      <div class="row text-bold">
        <div class="col text-left">현재기록</div>
        <div class="col text-right">{{ nowDate().month }}.{{ nowDate().date }}{{ nowDate().day }}</div>
      </div>
      <div class="row q-gutter-sm">
        <div class="col ">세트</div>
        <div class="col ">KG</div>
        <div class="col ">REP</div>
        <div class="col ">완료</div>
        <div class="col ">수행</div>
      </div>
      <div :id="record_name + i" class="row q-gutter-sm" v-for="(a, i) in record" :key="i">
        <div class="col flex flex-center ">{{ i + 1 }}</div>
        <div class="col "> <q-input type="number" class="input_target" style="border-radius: 10px; height: 33px;"
            input-class="text_target" borderless @focus="$event.target.select()" v-model.number="a.kg"
            @update:model-value="$store.commit('routine/kg', { record_name: record_name, num: i, kg: a.kg })">

          </q-input></div>
        <div class="col ">
          <q-input type="number" class="input_target" style="border-radius: 10px; height: 33px;" input-class="text_target"
            borderless @focus="$event.target.select()" v-model.number="a.rep"
            @update:model-value="$store.commit('routine/rep', { record_name: record_name, num: i, rep: a.rep })">

          </q-input>
        </div>
        <div class="col cursor-pointer " style="padding: 1px;" @click="
          isChecked(a.check, i);
        ">
          <div class="input_target full-width full-height flex flex-center" style="border-radius: 10px;">
            <q-icon size="sm" color="primary" v-if="a.check == true" name="fa-solid fa-check" />
            <q-icon v-else name="none" />
          </div>
        </div>
        <div v-if="a.performance_time < 0" class="col flex flex-center " style="font-size: 12px;">No Rest
        </div>
        <div v-else class="col flex flex-center ">{{ min(a.performance_time) }}:{{ sec(a.performance_time) }}
        </div>
      </div>
    </div>

    <div style="height: 100px;" class="q-py-sm q-px-lg">
      <div class="column q-gutter-sm">
        <div class="col">
          <div class="row q-gutter-lg">
            <div class="col">
              <q-btn rounded dense class="full-width text-primary" icon="fa-solid fa-plus" label="세트추가"
                style="font-size: 16px;" @click="
                  addSet(record_name)
                  "></q-btn>
            </div>
            <div class="col">
              <q-btn :disable="record.length == 1" rounded dense class="full-width text-red" icon="fa-solid fa-minus" label="세트삭제"
                style="font-size: 16px;" @click="deleteSet(record_name)"></q-btn>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row q-gutter-lg">
            <div class="col">
              <q-btn rounded dense class="full-width text-secondary"
                :icon="firstList ? 'fa-solid fa-fire' : 'fa-solid fa-arrow-left'" :label="firstList ? '준비운동' : '이전운동'"
                style="font-size: 16px;" @click="prevList()"></q-btn>
            </div>
            <div class="col">
              <q-btn rounded dense class="full-width" :class="lastList ? 'text-warning' : 'text-secondary'"
                :icon="lastList ? 'fa-solid fa-flag' : 'fa-solid fa-arrow-right'" :label="lastList ? '운동완료' : '다음운동'"
                style="font-size: 16px;" @click="nextList()"></q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  emits:['prev','next'],
  data() {
    return {
    }
  },
  props: {
    title: String,
    exrecord: Array,
    record: Object,
    record_name: String,
    firstList: Boolean,
    lastList: Boolean,
    break_time: Number,
    myList: String,
    exdate: Number,
  },
  methods: {
    onerm(a) {
      var max_kg = [];
      var max_rep = [];
      for (var i = 0; i < a.length; i++) {
        max_kg.push(a[i].kg);
        max_rep.push(a[i].rep);
      }
      return Math.floor(Math.max(...max_kg) * (1 + Math.max(...max_rep) / 30));
    },
    scrollToElement(a) {
      var element = document.getElementById(a)
      element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    },
    async addSet(a) {
      await this.$store.commit('routine/addSet', a);
      this.scrollToElement(this.record_name + (this.record.length - 1))
    },
    async deleteSet(a) {
      await this.$store.commit('routine/deleteSet', a)
      this.scrollToElement(this.record_name + (this.record.length - 1))
    },
    prevList() {
      if (!this.firstList) {
        this.$emit('prev')
      }
    },
    nextList() {
      if (!this.lastList) {
        this.$emit('next')
      } else {
        this.$store.dispatch('routine/addRecord', this.myList)
      }
    },
    isChecked(status, i) {
      if (!status) {
        this.$store.dispatch('routine/startBreakTimer', this.break_time)
        this.$store.commit('routine/check', { record_name: this.record_name, num: i, break_time: this.break_time })
        const allChecked = this.record.map(a=> a.check).every(a=>a===true)
        if(!this.lastList && allChecked){
          this.$emit('next')
        }
      } else {
        this.$store.commit('routine/stopBreakTimer')
        this.$store.commit('routine/unCheck', { record_name: this.record_name, num: i })
      }
    },
    min(a) {
      var min = Math.floor(a / 60);
      return min;
    },
    sec(a) {
      var sec = a - this.min(a) * 60;
      if (sec < 10) sec = "0" + sec;
      return sec;
    },

    exDate() {
      var few_days_ago;
      var month = new Date(this.exdate).getMonth();
      var date = new Date(this.exdate).getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (date < 10) {
        date = "0" + date;
      }
      var betweenTime = Math.floor(
        (new Date().getTime() - new Date(this.exdate).getTime()) / 1000 / 60
      );
      var betweenTimeHour = Math.floor(betweenTime / 60);
      var betweenTimeDay = Math.floor(betweenTime / 60 / 24);
      if (betweenTime < 1) {
        few_days_ago = "방금전";
      } else if (betweenTime < 60) {
        few_days_ago = betweenTime + "분전";
      } else if (betweenTimeHour < 24) {
        few_days_ago = betweenTimeHour + "시간전";
      } else {
        few_days_ago = betweenTimeDay + "일전";
      }
      return {
        month: month,
        date: date,
        few_days_ago: few_days_ago,
      };
    },
    nowDate() {
      var days = [
        "(일요일)",
        "(월요일)",
        "(화요일)",
        "(수요일)",
        "(목요일)",
        "(금요일)",
        "(토요일)",
      ];
      var month = new Date().getMonth();
      var date = new Date().getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (date < 10) {
        date = "0" + date;
      }
      var day = days[new Date().getDay()];
      return {
        month: month,
        date: date,
        day: day,
      };
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.q-field {
  margin: 1px;
}

:deep(.q-field__control) {
  height: 33px !important;
}
</style>
