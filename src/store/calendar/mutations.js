export const setData = (state, payload) => {
  console.log('state : ',state.record, 'payload : ', payload.record)
  state.record = payload.record
}

export const getCalendar = (state, payload) =>{
  state.record.push()
}

