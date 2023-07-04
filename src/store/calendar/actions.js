import record from '../../../dummy-record'

console.log(record)

export const getCalendar = (context, payload) =>{
 context.commit('getCalendar',record)
}
