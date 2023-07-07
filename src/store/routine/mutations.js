
export const setData = (state, payload) => {
  state.routine = payload.routine;
  state.division = payload.division;
  state.list = payload.list;
  state.mylist = payload.mylist;
  state.exrecord = payload.exrecord;
  state.record = payload.record;
  state.memo = payload.memo
};

export const deleteRoutine = (state, payload) => {
  state.routine.splice(payload, 1);
};
export const deleteDivision = (state, payload) => {
  state.division.splice(payload, 1);
};
export const deleteMyList = (state, payload) => {
  state.mylist.splice(payload, 1);
};

export const addRoutine = (state, payload) => {
  state.routine.push(payload);
};

export const addDivision = (state, payload) => {
  state.division.push(payload)
};

export const addMyList = (state, payload) => {
  // console.log(payload.record[0],payload.memo[0])
  Object.assign(state.mylist,payload.mylist)
  if(payload.record[0]){
    state.record.push(...payload.record)
    state.exrecord.push(...payload.exrecord)
  }
  if(payload.memo[0]){
    state.memo.push(...payload.memo)
  }
};

export const updateRoutine = (state, payload) => {
  state.routine[payload.num].title = payload.title;
};
export const updateDivision = (state, payload) => {
  state.division[payload.num].title = payload.title;
};

export const check = (state, payload) => {
  // console.log(payload)
  let data = [];
  state.record.map((a)=>{
    a.record.map((b)=>{
      if(b.check){
        data.push(b)
      }
    })
  })
  // console.log(data)

  let totalTime = 0;
  data.map((a)=>{
    totalTime = totalTime + a.break_time + a.performance_time;
  })

  // console.log(totalTime)

  state.record.find(a=>a.name == payload.record_name).record[payload.num].check = true
  state.record.find(a=>a.name == payload.record_name).record[payload.num].break_time = payload.break_time
  state.record.find(a=>a.name == payload.record_name).record[payload.num].performance_time = state.sec - totalTime;
}

export const unCheck = (state,payload) =>{
  state.record.find(a=>a.name == payload.record_name).record[payload.num].check = false
}

export const rep = (state, payload) => {
 state.record.find(a=>a.name == payload.record_name).record[payload.num].rep = payload.rep
}

export const kg = (state, payload) => {
 state.record.find(a=>a.name == payload.record_name).record[payload.num].kg = payload.kg
}

export const addSet = (state,payload) =>{
  let targetRecord = state.record.find(a=>a.name == payload).record
  let targetExrecord = state.exrecord.find(a=>a.name == payload).record
  if(targetRecord.length == 0){
    let copy1 = Object.assign({},targetExrecord[targetExrecord.length -1])
    targetRecord.push(copy1)
    targetRecord[0].check = false;
    targetRecord[0].performance_time = '';
  } else {
    var copy2 = Object.assign({}, targetRecord[targetRecord.length-1])
    targetRecord.push(copy2)
    targetRecord[targetRecord.length-1].check = false;
    targetRecord[targetRecord.length-1].performance_time = '';
  }
  console.log(state.record.find(a=>a.name == payload).record)
}

export const deleteSet = (state,payload) => {
  let targetRecord = state.record.find(a=>a.name == payload).record
  targetRecord.splice(targetRecord.length-1,1)
}

export const startTimer = (state) => {
  state.timer = setInterval(()=>{
    state.sec = state.sec + 1;
    state.time[0] = Math.floor(state.sec/3600);
    state.time[1] = Math.floor((state.sec - state.time[0]*3600)/60)
    state.time[2] = state.sec - state.time[0]*3600 - state.time[1] * 60;
    if(state.time[1]<10) state.time[1] = '0' + state.time[1]
    if(state.time[2]<10) state.time[2] = '0' + state.time[2]
  },1000)
}

export const stopBreakTimer = (state) =>{
  state.real_break_time = 0;
  clearInterval(state.break_timer);
}

export const editBreakTime = (state,payload)=>{
  console.log(payload)
  let targetRecord = state.record.find(a=>a.name == payload.record_name).record
  targetRecord[targetRecord.length - 1].break_time = payload.break_time
}
