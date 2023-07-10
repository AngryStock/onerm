<template>
    서울시 강동구 고덕동
    <div v-for="(gym, index) in gyms" :key="index">
        <q-btn color="white" text-color="black">
            <q-img :src="url" spinner-color="white" style="height: 140px; max-width: 150px"/>
            <div style="width: 150px;">
                {{ gym.name }}
                {{ gym.distance }}
                {{ gym.location }}
            </div>
        </q-btn>
    </div>
    <Footer1/>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const url = ref('https://picsum.photos/500/300')
        return {
            url
        }
    },
    data() {
        return {
            gyms: [
                {
                    name: '명동 은행회관 헬스클럽',
                    distance: '0.2km',
                    location: '서울 중구 명동1가',
                    detail: ''
                },
                {
                    name: '을지로 크로스핏 삼손',
                    distance: '0.3km',
                    location: '서울 중구 수표동',
                    detail: ''
                },
                {
                    name: '종로 스포짐',
                    distance: '0.7km',
                    location: '서울 종로구 서린동',
                    detail: ''
                }
            ]
        }
    }
}

</script>

<style>
</style>