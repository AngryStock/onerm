<template>
    <div class="manager">
        <div class="manager_input">
            <label>운동이름: </label>
            <input type="text" v-model="title" />
        </div>
            <div class="manager_input">
            <label>부위: </label>
            <input type="text" v-model="division" />
        </div>
            <div class="manager_input">
            <label>장비: </label>
            <input type="text" v-model="equipment" />
        </div>
        <div class="manager_input">
            <button
                class="manager_input_btn"
                type="submit"
                @click="
                $store.dispatch('manager/manager', {
                    title: title,
                    division: division,
                    equipment: equipment,
                });
                title = '';
                division = '';
                equipment = '';
                "
            >
                등록
            </button>
        </div>
        <q-separator />
        <div class="column items-center justify-center">
            <div>{{ name[current-1] }}</div>
            <div>{{ pic[current-1] }}</div>
            <div>{{ data[current-1] }}</div>
            <div>{{ gym[current-1] }}</div>
            <div>{{ add[current-1] }}</div>
            <div>{{ num[current-1] }}</div>
        </div>
        <div class="row justify-center q-pa-md">
            <div class="q-pr-md">
                <q-btn color="primary" label="수락" />
            </div>
            <div class="q-pl-md">
                <q-btn color="primary" label="거절" />
            </div>
        </div>
        <div class="q-pa-sm flex flex-center">
            <q-pagination v-model="current" :max="3" />
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "app_manager",

  setup() {
    return {
        current: ref(1)
    }
  },
  data() {
    return {
      title: "",
      division: "",
      equipment: "",
      name: ["이름1", "이름2", "이름3"],
      pic: ["사진1", "사진2", "사진3"],
      data: ["서류1", "서류2", "서류3"],
      gym: ["헬스장1", "헬스장2", "헬스장3"],
      add: ["주소1", "주소2", "주소3"],
      num: ["번호1", "번호2", "번호3"]
    };
  },
};
</script>

<style>
.manager_input_btn {
  width: 100px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
}
.manager {
  width: 100%;
  padding: 20px;
}
.manager_input {
  width: 100%;
  padding: 10px;
  margin: auto;
  text-align: right;
  font-weight: bold;
}
</style>
