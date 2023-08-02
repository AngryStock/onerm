import { api } from "src/boot/axios";

export const subGym = (context, payload) =>{
    api.get('/sub_gym').then((res)=>{
        context.commit('subGym', res.data)
    })
}

export const subTrainer = (context, payload) =>{
    api.get('/sub_trainer').then((res)=>{
        context.commit('subTrainer', res.data)
    })
}
