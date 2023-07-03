<template>
  <q-card style="width: 300px" class="target">
    <q-card-section>
      <div style="font-size: medium; font-weight: bold" class="text_target">
        운동 부위 이름
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input
        type="text"
        dense
        @focus="$event.target.select()"
        v-model="title"
        @keyup.enter="$emit('editProcess',title)"
      />
    </q-card-section>

    <q-card-actions align="center" class="target">
      <q-btn
        class="text-weight-bold text-red"
        flat
        label="취소"
        @click="$router.go(-1)"
      />
      <q-btn
        class="text-weight-bold text-primary"
        flat
        label="수정"
        @click="$emit('editProcess',title);$router.go(-1)"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      title: this.text
    };
  },
  props: {
    text: String,
  },
};
</script>
