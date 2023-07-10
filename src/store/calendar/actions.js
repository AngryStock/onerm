import { api } from "src/boot/axios";

export const setData = (context,payload) =>{
  api.get('/set_calendar').then((res)=>{
    context.commit('setData', res.data)
  })
}


export const getPrevRecord = (context, payload) =>{// ex) payload = [2023, 6]
  context.state.next_record = context.state.current_record
  context.state.current_record = context.state.prev_record
  api.get('/get_prev_record',{
    params:{
      year:payload[0],
      month:payload[1]
    }
  }).then((res)=>{
    // console.log(res)
    context.commit('getPrevRecord', res.data)
  })
}

export const getNextRecord = (context, payload) =>{ // ex) payload = [2023, 6]
  context.state.prev_record = context.state.current_record
  context.state.current_record = context.state.next_record
  api.get('/get_next_record',{
    params:{
      year:payload[0],
      month:payload[1]
    }
  }).then((res)=>{
    // console.log(res)
    context.commit('getNextRecord', res.data)
  })
 }
