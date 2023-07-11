<template>
  <q-footer class="target text_target border_top_target" style="border-radius: 20px;">
    <q-tabs v-model="tab" active-color="primary" indicator-color="transparent" dense style="height: 60px">
      <q-route-tab v-for="(a, i) in routeLink" :key="i" :to="a.to" :name="a.name" :icon="a.icon" :label="a.label" :disable="a.disable" />
    </q-tabs>
  </q-footer>
</template>

<script setup>
import { ref } from "vue";
const tab = ref("routine");

const routeLink = [
  { to: '/calendar', name: 'calendar', icon: 'calendar_month', label: '캘린더', disable: false },
  { to: '/gymList', name: 'gymList', icon: 'fitness_center', label: '헬스장', disable: false },
  { to: '/trainer', name: 'trainer', icon: 'sports', label: '트레이너', disable: false },
  { to: '/routine', name: 'routine', icon: 'list_alt', label: '루틴', disable: false },
  { to: '/profile', name: 'profile', icon: 'person', label: '프로필', disable: false },
]
</script>

<style lang="scss" scoped>
:deep(.q-tab__label) {
  font-size: 14px;
}

:deep(.q-tab__icon) {
  font-size: 24px;
}
</style>

