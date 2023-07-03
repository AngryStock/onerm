<template>
  <q-dialog v-model="addPopup" no-backdrop-dismiss>
    <q-card style="width: 300px;" class="target">
      <q-card-section>
        <div style="font-size: medium; font-weight: bold" class="text_target">
          휴식 시간 설정
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input type="number" dense @focus="$event.target.select()" v-model.number="break_time" />
      </q-card-section>

      <q-card-actions align="center" class="target">
        <q-btn class="text-weight-bold text-red" flat label="취소" @click="$router.go(-1)" />
        <q-btn class="text-weight-bold text-primary" flat label="수정"
          @click="$store.commit('routine/editBreakTime', { record_name: record_name, break_time: break_time }); $router.go(-1)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="memoPopup" position="bottom" no-backdrop-dismiss>
    <q-card style="width: 300px;" class="target">
      <q-card-section>
        <div style="font-size: medium; font-weight: bold" class="text_target">
          메모
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row q-gutter-sm">
          <div class="col" v-for="(a, i) in memo" :key="i">
            <div class=" column q-gutter-xs">
              <q-input type="text" maxlength="5" class="input_target" input-class="text_target"
                style="border-radius: 10px;" borderless dense @focus="$event.target.select()" v-model="a.title" />
              <div class="col"></div>
              <q-input type="text" maxlength="3" class="input_target" input-class="text_target"
                style="border-radius: 10px;" borderless dense @focus="$event.target.select()" v-model="a.content" />
              <div class="col"></div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center" class="target">
        <q-btn class="text-weight-bold text-red" flat label="취소" v-close-popup />
        <q-btn class="text-weight-bold text-primary" flat label="수정" v-close-popup
          @click="$store.dispatch('routine/updateMemo', record_name)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <div class="target text_target border_top_target q-pa-xs">
    <div class="row text-bold">
      <div class="col">
        <div class="column full-height">
          <div class="col-4" style="font-size: 12px;">운동시간</div>
          <div class="col-8 flex flex-center"> <span style="font-size: 20px">{{ $store.state.routine.time[0] }}:{{
            $store.state.routine.time[1] }}:{{
    $store.state.routine.time[2]
  }}</span></div>
        </div>
      </div>
      <div class="col cursor-pointer" v-for="(a, i) in memo" :key="i" @click="opneMemoPopup()">
        <div class="column full-height">
          <div class="col-4" style="font-size: 12px;">{{ a.title }}</div>
          <div class="col-8 flex flex-center" style="font-size: 16px;">{{ a.content }}</div>
        </div>
      </div>
      <div class="col cursor-pointer">
        <div class="column full-height">
          <div class="col-4 " style="font-size: 12px;">운동자세</div>
          <div class="col-8 flex flex-center" style="font-size: 16px;"></div>
        </div>
      </div>
      <div class="col cursor-pointer" @click="opneAddPopup()">
        <div class="column full-height">
          <div class="col-4 " style="font-size: 12px;">휴식시간</div>
          <div class="col-8 flex flex-center">
            <span style="font-size: 20px" v-if="$store.state.routine.real_break_time == 0">
              {{ break_time }} 초
            </span>
            <span v-else style="font-size: 20px;">{{ $store.state.routine.real_break_time }} 초</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['opener'],
  data() {
    return {
      addPopup: false,
      memoPopup: false,
      break_time: this.record[this.record.length - 1].break_time,
    }
  },
  watch: {
    memoValue(a, b) {
      console.log(a, b)
      if (a == false) {
        if (this.memoPopup) this.memoPopup = false;
        if (this.addPopup) this.addPopup = false;
      }
    }
  },
  props: {
    record: Array,
    record_name: String,
    memo: Array,
    memoValue: Boolean,
    addValue: Boolean,
  },
  methods: {
    opneAddPopup() {
      window.history.pushState({}, "addPopup", "/addPopup")
      this.addPopup = true
      this.$emit('opener')
    },
    opneMemoPopup() {
      window.history.pushState({}, "memoPopup", "/memoPopup")
      this.memoPopup = true
      this.$emit('opener')
    }
  }
}
</script>

<style></style>
