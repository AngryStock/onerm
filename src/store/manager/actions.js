import { api } from "src/boot/axios";

export const manager = (context,payload)=>{
  console.log(payload)
  api
  .post('/manager', {
    title: payload.title,
    division: payload.division,
    equipment: payload.equipment,
  })
  .then(() => {
    // console.log(result)
  });
}
