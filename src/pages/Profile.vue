

<template>
  <q-page>
    <div class="target text_target border_bottom_target" style="border-radius: 20px;">
      <q-toolbar>
        <q-btn flat>
          <q-avatar size="28px">
            <img src="../assets/logo-192x192.png" />
          </q-avatar>
        </q-btn>
        <q-toolbar-title class="text-bold" style="font-size: 14px">프로필</q-toolbar-title>
        <q-toggle v-model="darkmode" checked-icon="dark_mode" color="primary" unchecked-icon="wb_sunny"
          @click="toggleDarkMode" />
      </q-toolbar>
    </div>


    <div style="height: calc(100% - 51px);" class=" overflow-auto">
      <div class="q-pa-md">
        <q-btn-group flat class="full-width text_target flex flex-center q-ma-md">
          <q-btn>
            <q-avatar class="item2_target" size="48px">
              <img src="../assets/profile_default.png" class="q-pa-xs" />
            </q-avatar>
          </q-btn>
          <div class=" column text-left text-bold q-mr-md" style="font-size: 16px;">
            <div class="flex items-center justify-between full-width">
              <div>
                {{ $store.state.profile.profile.nickname }}
              </div>
              <div>
                <q-btn flat icon="edit" dense></q-btn>
              </div>
            </div>
            <div>
              {{ $store.state.profile.profile.email }}
            </div>
          </div>
        </q-btn-group>
        <q-btn v-for="(a, i) in index" :key="i" rounded class="full-width text-bold q-mt-md item_target text_target"
          align="left" :icon="a.icon" style="height: 50px; font-size: 16px" :label="a.title" :href="a.href" />
      </div>
    </div>
  </q-page>
  <Footer1 />
</template>

<script>
export default {};
</script>

<script setup>
import { ref } from "vue";
import { LocalStorage, useQuasar } from "quasar";
const $q = useQuasar()
const darkmode = ref(LocalStorage.getItem("darkMode") || false);
const index = [
  { icon: 'fa-solid fa-file', title: "서비스 이용약관", href: "/tos" },
  { icon: 'fa-solid fa-file', title: "개인정보처리방침", href: "/privacypolicy" },
  { icon: 'fa-solid fa-right-from-bracket', title: "로그아웃", href: "/auth/logout" },
  { icon: 'fa-solid fa-user-slash', title: "회원탈퇴", href: "/auth/signout" },
];
const toggleDarkMode = () => {
  LocalStorage.set("darkMode", darkmode.value)
  $q.dark.toggle()
}
</script>

<style></style>
