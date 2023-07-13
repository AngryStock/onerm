<template>
  <q-page>
    <div class="target text_target border_bottom_target q-px-md" style="border-radius: 20px;">
      <q-toolbar >
        <q-toolbar-title><q-input input-class="text-left" borderless dense placeholder="헬스장 검색">
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input></q-toolbar-title>
      </q-toolbar>
    </div>
      <div style="height: calc(100% - 51px);" class=" overflow-auto">
        <div class="q-pa-sm">
          <div class="column q-gutter-y-sm">
            <div class="col flex" v-for="(a,i) in gymlist" :key="i">
              <q-img :ratio="17/13" width="170px" src="../assets/이미지준비중.png" style="border-radius: 10px;"></q-img>
              <div style="width: calc(100% - 170px);" class="q-pa-sm">
                <div class="text-bold text-left full-width">{{ a.place_name }}</div>
                <div class="flex full-width" style="font-size: 12px;">
                  <div style="width: 70%;" class="text-left">
                  {{ a.address_name.replace(/[0-9\-]/g, "") }}
                </div>
                  <div style="width: 30%;" class="text-right">
                  {{ Math.round(a.distance / 100) / 10 }}km
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    <Footer1 />
  </q-page>
</template>

<script>
export default {
  name: "app_gymlist",
  data() {
    return {
      text: "",
      gymlist: [],
    };
  },
  methods: {
    search(a, b) {
      console.log(a, b);
    },
    loadplaces() {
      navigator.geolocation.getCurrentPosition(async (position) => {
        console.log(position);
        var places = await new window.kakao.maps.services.Places();
        var callback = (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            var copy1 = Object.assign([], result);
            console.log(copy1);
            this.gymlist.push(...copy1);
            console.log(this.gymlist);
          } else {
            console.error("Keyword search failed: ", status);
          }
        };
        places.keywordSearch("헬스장", callback, {
          location: new window.kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          ),
          // x:position.coords.latitude.toString(),
          // y:position.coords.longitude.toString(),
          radius: 20000,
          page: 1,
          size: 15,
          sort: "distance",
        });
      });
    },
    loadscript() {
      console.log(process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY)
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=" +
        process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY +
        "&libraries=services";
      script.onload = () =>
        window.kakao.maps.load(() => {
          this.loadplaces();
        });
      document.head.appendChild(script);
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadplaces();
    } else {
      this.loadscript();
    }
  },
};
</script>

<style scoped>
</style>
