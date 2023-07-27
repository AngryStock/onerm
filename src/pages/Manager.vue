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
  </div>
</template>

<script>
export default {
  name: "app_manager",
  data() {
    return {
      title: "",
      division: "",
      equipment: "",
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
