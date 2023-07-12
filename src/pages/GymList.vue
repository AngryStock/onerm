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
        <div class="main_grid">
          <div v-for="(a, i) in gymlist" :key="i" class="gymlist_item">
            <div class="gmylist_item_img"></div>
            <div class="gmylist_item_content">
              <div class="gymlist_item_title">{{ a.place_name }}</div>
              <div class="gymlist_item_address">
                <div style="width: 70%; text-align: left">
                  {{ a.address_name.replace(/[0-9\-]/g, "") }}
                </div>
                <div style="width: 30%; text-align: right">
                  {{ Math.round(a.distance / 100) / 10 }}km
                </div>
              </div>
              <br />

              <br />
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
    if (window.kakao && window.kakao.mpas) {
      this.loadplaces();
    } else {
      this.loadscript();
    }
  },
};
</script>

<style scoped>
.gymlist_item_address {
  width: 100%;
  font-size: 12px;
  display: flex;
}

.gymlist_item_title {
  width: 100%;
  font-weight: 700;
  text-align: left;
}

.main_grid {
  display: grid;
  gap: 10px;
}

.gymlist_item {
  display: flex;
}

.gmylist_item_img {
  height: 130px;
  width: 170px;
  background-image: url("../assets/이미지준비중.png");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}

.gmylist_item_content {
  padding: 10px;
  height: 130px;
  width: calc(100% - 170px);
}
</style>
