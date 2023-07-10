<template>
<router-view/>
</template>

<script>

</script>

<script setup>
import { LocalStorage , useQuasar } from 'quasar'
import { api } from './boot/axios'
import { useStore } from 'vuex';
const $q = useQuasar()
const $store = useStore()
if ($store.state.profile.profile._id == null) {
  api.get('/setdata').then((res) => {
    console.log(res)
    $store.commit('profile/setData', res.data.profile)
    $store.commit('routine/setData', res.data.routine)
  })
}
$q.dark.set(LocalStorage.getItem("darkMode"))
</script>


<style>
</style>
