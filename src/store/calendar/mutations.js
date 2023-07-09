import { date } from 'quasar';

export const setData = (state, payload) => {
  let current_year = new Date().getFullYear();
  let current_month = new Date().getMonth();
  let boundary = new Date(current_year, current_month, 1).getTime();
  for (let record of payload.record) {
    if(record.date>=boundary) {
      state.current_record.push(record);
    }
    else{
      state.prev_record.push(record);
    }
    record.day = date.formatDate(record.date, 'D');
  }
}

export const getPrevRecord = (state, payload) =>{
  state.next_record = state.current_record
  state.current_record = state.prev_record
  for (let record of payload) {
    record.day = date.formatDate(record.date, 'D');
  }
  state.prev_record = payload
}

export const getNextRecord = (state, payload) =>{
  state.prev_record = state.current_record
  state.current_record = state.next_record
  for (let record of payload) {
    record.day = date.formatDate(record.date, 'D');
  }
  state.next_record = payload
}
