<template>
  <q-card style="width: 300px;" class="target">
    <q-card-section>
      <div style="font-size: medium; font-weight: bold" class="text_target">
        {{ popupTitle }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input type="text" dense @focus="$event.target.select()" v-model="title"
        @keyup.enter="$emit('addProcess', title)" />
    </q-card-section>

    <q-card-actions align="center" class="target">
      <q-btn class="text-weight-bold text-red" flat label="취소" @click="$router.go(-1)" />
      <q-btn class="text-weight-bold text-primary" flat label="추가" @click="$emit('addProcess', title); $router.go(-1)" />
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
    popupTitle: String,
  },
};
</script>
