import record from '../../../dummy-record'

console.log(record)

export const getPrevRecord = (context, payload) =>{ // ex) payload = [2023, 6]
 context.commit('getPrevRecord', record)
}

export const getNextRecord = (context, payload) =>{ // ex) payload = [2023, 6]
  context.commit('getNextRecord', record)
 }
