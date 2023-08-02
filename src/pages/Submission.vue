<template>
    <q-page>
        <q-card>
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
                <q-tab name="gym" label="운동시설" />
                <q-tab name="trainer" label="트레이너" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="gym">
                    <div class="column items-start">
                        <div>운동시설 이름</div>
                        <q-input class="full-width" style="min-width: 320px;" outlined v-model="gym_name" label="시설명을 입력해 주세요." />
                        <div>주소</div>
                        <q-input class="full-width" style="min-width: 320px;" outlined v-model="gym_address" label="주소를 입력해 주세요." />
                    </div>
                    <div class="row justify-center q-pa-md">
                        <div class="q-pr-md">
                            <q-btn color="primary" label="등록 요청하기" href="/profile" />
                        </div>
                        <div class="q-pl-md">
                          <q-btn color="primary" label="뒤로가기" href="/profile" />
                        </div>
                    </div>
                </q-tab-panel>
                <q-tab-panel name="trainer">
                    <div class="column items-start">
                        <div>이름</div>
                        <q-input class="full-width" style="min-width: 320px;" outlined v-model="trainer_name" label="이름을 입력해 주세요." />
                        <div>사진</div>
                        <div>서류(사진)</div>
                        <div>소속 헬스장</div>
                        <q-input class="full-width" style="min-width: 320px;" outlined v-model="trainer_gym_name" label="소속된 헬스장의 이름을 입력해 주세요." />
                        <div>헬스장 주소</div>
                        <q-input class="full-width" style="min-width: 320px;" outlined v-model="trainer_address" label="소속된 헬스장의 주소를 입력해 주세요." />
                        <div>휴대폰 번호</div>
                        <q-input class="full-width" style="min-width: 320px;" outlined v-model="trainer_phone_number" label="-없이 입력해 주세요." />
                    </div>
                    <div class="row justify-center q-pa-md">
                        <div class="q-pr-md">
                            <q-btn color="primary" label="등록 요청하기" href="/profile" />
                        </div>
                        <div class="q-pl-md">
                          <q-btn color="primary" label="뒤로가기" href="/profile" />
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            tab: ref('gym'),
            gym_name: ref(''),
            gym_address: ref(''),
            trainer_name: ref(''),
            trainer_address: ref(''),
            trainer_phone_number: ref(''),
            trainer_gym_name: ref(''),
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style>
</style>
