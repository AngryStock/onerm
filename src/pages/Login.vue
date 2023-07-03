

<template>
  <q-layout view="hHh lpr fFf" class="target">
    <q-avatar size="120px">
      <img src="../assets/logo.png" />
    </q-avatar>
    <div class="text-h5 text-bold text-primary">로그인 방법을 선택해주세요</div>
    <q-footer class="target">
      <div class="q-pa-lg">
        <q-btn v-for="(a,i) in loginBtn" :key="i"
          :color="a.color"
          class="full-width q-mt-md q-pa-sm"
          rounded
          :disable="a.disable"
          :href="('/auth/' + a.title)"
        >
          <img :src="a.img" width="24" />
          <div :class="(a.title == 'google' ? 'q-ml-sm': 'q-ml-md')">{{a.title}} 로그인</div>
          </q-btn
        >
      </div>
    </q-footer>
  </q-layout>
</template>


<script>
export default {
  mounted() {
    document.title = "원알엠(ONERM)-로그인 페이지";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", "로그인 페이지입니다.");
  },
};
</script>

<script setup>
const loginBtn = [
  {img:"../../icons/kakaotalk-svg.svg",title:"kakao",color:'yellow-7', disable:true,},
  {img:"../../icons/naver-svg.svg",title:"naver", color:'green-6' , disable:true},
  {img: "../../icons/google-svg.svg" ,title:"google", color: 'primary' , disable:false},
]
</script>

<style>
</style>
