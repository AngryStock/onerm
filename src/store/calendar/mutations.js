export const setData = (state,payload) => {
  console.log(state.record , payload.record)
  state.record = payload.record
}

export const getCalendar = (state,payload) =>{
  state.record.push()
}

