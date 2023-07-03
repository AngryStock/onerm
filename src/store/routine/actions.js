import { api } from "src/boot/axios";
import TimerSound from '../../assets/boxing_bell.wav';


export function deleteRoutine(context, payload) {
  api
    .delete("/del_routine", {
      params: {
        _id: payload._id,
      },
    })
    .then(() => {
      context.commit("deleteRoutine", payload.num);
    });
}

export function deleteDivision(context, payload) {
  api
    .delete("/del_division", {
      params: {
        _id: payload._id,
      },
    })
    .then(() => {
      context.commit("deleteDivision", payload.num);
    });
}
export function deleteMyList(context, payload) {
  api
    .delete("/del_mylist", {
      params: {
        _id: payload._id,
      },
    })
    .then(() => {
      context.commit("deleteMyList", payload.num);
    });
}

export function addRoutine(context, payload) {
  api
    .post("/add_routine", {
      title: payload,
    })
    .then((res) => {
      context.commit("addRoutine", res.data);
    });
}

export function addDivision(context, payload) {
  console.log(payload);
  api
    .post("/add_division", {
      title: payload.title,
      id: payload.id,
    })
    .then((res) => {
      context.commit("addDivision", {
        _id: res.data,
        id: payload.id,
        title: payload.title,
      });
    });
}
export function addMyList(context, payload) {
  console.log(payload);
  api
    .post("/add_mylist", {
      id: payload.id,
      select: payload.select,
    })
    .then((res) => {
      console.log(res)
      context.commit("addMyList", {
        mylist: res.data.mylist,
        record: res.data.record,
        exrecord: res.data.exrecord,
        memo: res.data.memo,
      });
    });
}



export const updateRoutine = (context, payload) => {
  api
    .post("/update_routine", {
      _id: payload._id,
      title: payload.title,
    })
    .then((res) => {
      if (res.data) {
        context.commit("updateRoutine", {
          title: payload.title,
          num: payload.num,
        });
      } else {
        console.log("변경이 불가능 합니다. 고객센터에 문의해주세요.");
      }
    });
};

export function updateMemo(context, payload){
  console.log(context.state.memo,payload)
  let contents = context.state.memo.find(a=>a.memo == payload).contents
  api.post("/update_memo",{
    memo:payload,
    contents:contents,
  }).then((res)=>{
    if(res.data){
      return
    } else {
      console.log("변경이 불가능 합니다. 고객센터에 문의해주세요.");
    }
  })
}

export const updateDivision = (context, payload) => {
  api
    .post("/update_division", {
      _id: payload._id,
      title: payload.title,
    })
    .then((res) => {
      if (res.data) {
        context.commit("updateDivision", {
          title: payload.title,
          num: payload.num,
        });
      } else {
        console.log("변경이 불가능 합니다. 고객센터에 문의해주세요.");
      }
    });
};

export const startBreakTimer = (context,payload) => {
  let audio = new Audio(TimerSound)
  context.commit('stopBreakTimer')
  context.state.real_break_time = payload;
  context.state.break_timer = setInterval(()=>{
    if(context.state.real_break_time == 0){
      context.commit('stopBreakTimer')
      audio.play()
    } else {
      context.state.real_break_time = context.state.real_break_time - 1
    }
  },1000)
}

export const addRecord = (context,payload) => {
  api.post('/add_record',{
    record: context.state.record,
    mylist_name: payload,
  }).then(()=>{
    window.location.href = '/routine'
  })
}
