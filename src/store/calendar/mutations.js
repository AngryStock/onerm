import { date } from 'quasar';

export const setData = (state, payload) => {
    let current_year = new Date().getFullYear();
    let current_month = new Date().getMonth();
    let boundary = new Date(current_year, current_month, 1).getTime();
    state.current_record = [];
    state.prev_record = [];
    state.next_record = [];
    for (let record of payload) {
        if (record.date>=boundary) {
            state.current_record.push(record);
        }
        else {
            state.prev_record.push(record);
        }
        record.day = date.formatDate(record.date, 'D');
    }
    state.current_record.sort(function (a, b) {
        return a.date - b.date;
    })
    state.prev_record.sort(function (a, b) {
        return a.date - b.date;
    })
    var list1 = [[[]]];
    for (let record of state.prev_record) {
        if (list1[0][0].length == 0) {
            list1[0][0].push(record);
        }
        else {
            if (list1.at(-1)[0][0].day == record.day) {
                if (list1.at(-1).at(-1)[0].date == record.date) {
                    list1.at(-1).at(-1).push(record);
                    console.log(1)
                }
                else {
                    list1.at(-1).push([record]);
                }
            }
            else {
                list1.push([[record]]);
            }
        }
    }
    state.prev_record = list1
    var list2 = [[[]]];
    for (let record of state.current_record) {
        if (list2[0][0].length == 0) {
            list2[0][0].push(record);
        }
        else {
            if (list2.at(-1)[0][0].day == record.day) {
                if (list2.at(-1).at(-1)[0].date == record.date) {
                    list2.at(-1).at(-1).push(record);
                    console.log(1)
                }
                else {
                    list2.at(-1).push([record]);
                }
            }
            else {
                list2.push([[record]]);
            }
        }
    }
    state.current_record = list2;
    console.log(state.prev_record, state.current_record);
}

export const getPrevRecord = (state, payload) => {
    for (let record of payload) {
        record.day = date.formatDate(record.date, 'D');
    }
    state.prev_record = payload
    }

export const getNextRecord = (state, payload) => {
    for (let record of payload) {
        record.day = date.formatDate(record.date, 'D');
    }
    state.next_record = payload
}
