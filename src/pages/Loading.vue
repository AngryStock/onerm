<template>
  <q-layout view="hHh lpr fFf" class="flex flex-center">
    <div>
      <img src="../assets/logo.png" />
      <div class="text-h6 text-bold text-bold">
        <span class="text-red-7">원</span
        ><span class="text-primary">알엠</span>에 오신 것을 환영합니다.
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "app_loading",
  data() {
    return {};
  },
  mounted() {
    this.axios.get("/device").then((result) => {
      if (result.data == "android") {
        window.location.href = "kakaotalk://inappbrowser/close";
        window.location.replace(
          `intent:https://onerm.kr#Intent;package=com.android.chrome;end;`
        );
      } else if (result.data == "ios") {
        window.location.href = "kakaoweb://closeBrowser";
        window.location.assign(
          "x-web-search://?site:onerm.kr intext:원알엠(ONERM)"
        );
      } else {
        console.log("else");
        window.location.href = "/auth/login";
      }
    });
  },
};
</script>
