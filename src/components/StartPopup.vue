<template>
  <q-card style="width: 300px;" class="target">
    <q-card-section>
      <div style="font-size: medium; font-weight: bold" class="text_target">
        운동을 시작합니다
      </div>
    </q-card-section>

    <q-card-actions align="center" class="target">
      <q-btn
        class="text-weight-bold text-primary"
        flat
        label="확인"
        @click="$store.commit('routine/startTimer');
        $router.push({name:'records'})"
      />
      <q-btn
        class="text-weight-bold text-red"
        flat
        label="취소"
        @click="$router.go(-1)"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
  },
};
</script>
