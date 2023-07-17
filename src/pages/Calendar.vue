<template>
    <q-page>
        <div class="calendar_container">
            <div class="row items-center q-pa-lg text-bold">
                <q-space />
                <q-btn @click="onClickPrev()" class="text_target" flat round dense label="<" size="lg"></q-btn>
                <text-h1 style="font-size: 24px;" class="text_target">{{ clickedYear }}년 {{ clickedMonth }}월</text-h1>
                <q-btn @click="onClickNext()" class="text_target" flat round dense label=">" size="lg"></q-btn>
                <q-space />
            </div>
            <Flicking @changed="e => nextMonth(e)" ref="cal_flicking" :options="{
                panelsPerView: 1,
                align: 'center',
                moveType: 'strict',
                defaultIndex: 1,
                }"
            >
                <div v-for="item in calendar_data" :key="item" class="full-width">
                    <q-space />
                    <table class="calendar_table">
                        <thead>
                            <tr>
                                <td v-for="(dayname, index) in daynames" v-bind:key="index">
                                    <span v-if="index === 0" class="sunday">{{ dayname }}</span>
                                    <span v-else-if="index === 6" class="saturday">{{ dayname }}</span>
                                    <span v-else class="text_target">{{ dayname }}</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in item.CalendarMatrix" :key="index">
                                <td v-for="(day, index2) in row" :key="index2">
                                    <div v-if="day !== ''">
                                        <q-btn @click="openRecord(day)" flat round dense style="width: 50px; height: 50px;">
                                            <div v-if="day !== ''">
                                                <div v-if="record_exist(day, calendar_data.indexOf(item))">
                                                    <div class="column items-center" style="margin-top: 5px;">
                                                        <div v-if="index2 === 0" class="sunday">{{ day }}</div>
                                                        <div v-else-if="index2 === 6" class="saturday">{{ day }}</div>
                                                        <div v-else class="text_target">{{ day }}</div>
                                                        <div class="dot"></div>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <div class="column items-center">
                                                        <div v-if="index2 === 0" class="sunday">{{ day }}</div>
                                                        <div v-else-if="index2 === 6" class="saturday">{{ day }}</div>
                                                        <div v-else class="text_target">{{ day }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </q-btn>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <q-space />
                </div>
            </Flicking>
        </div>
        <q-dialog v-model="icon">
            <div class="modal_card">
                <q-card style="height: 100%;">
                    <q-card-section class="row items-center q-pb-md">
                        <q-btn icon="close" flat round dense v-close-popup />
                        <q-space />
                        <q-btn @click="onClickPrevRecord()" flat round dense label="<" size="lg"></q-btn>
                        <div class="text-h6">{{ clickedYear }}년 {{ clickedMonth }}월 {{ clickedDay }}일</div>
                        <q-btn @click="onClickNextRecord()" flat round dense label=">" size="lg"></q-btn>
                        <q-space />
                        <q-btn @click="shot()" flat round dense :icon="outlinedShare" />
                    </q-card-section>
                    <q-card-section class="recordlist">
                        <div ref="targetElement">
                            <div v-for="(row, index) in $store.state.calendar.current_record" :key="index">
                                <div v-if="row[0][0].day == clickedDay">
                                    <div v-for="(group, index2) in row[clickedIndex]" :key="index2">
                                        <div>{{ group.title }}</div>
                                        <div>최고 무게 : {{ get_max_kg(group.record) }}KG</div>
                                        <div>예상 1RM : {{ onerm(group.record) }}KG</div>
                                        <div class="row justify-start">
                                            <div v-for="(record, index3) in group.record" :key="index3">
                                                <div class="q-pa-xs column items-center">
                                                    <q-avatar size="lg" color="red" text-color="white">{{ record.kg }}
                                                    </q-avatar>
                                                    <text-body1 text-color="white">
                                                        {{ record.rep }}회
                                                    </text-body1>
                                                    <text-body1 text-color="white">
                                                        {{ Math.floor(record.performance_time/60) }}:{{ record.performance_time%60}}
                                                    </text-body1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </q-dialog>
        <Footer1/>
    </q-page>
</template>
<script>
import { outlinedShare } from '@quasar/extras/material-icons-outlined'
import { ref } from 'vue'
import html2canvas from 'html2canvas';
import { Platform } from 'quasar';
export default {
    name: 'app_calendar',
    setup() {
        return {
            icon: ref(false),
            outlinedShare
        }
    },
    data() {
        return {
            daynames: ["일", "월", "화", "수", "목", "금", "토"],
            rootYear: 1904,
            rootDayOfWeekIndex: 5,
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth() + 1,
            currentDay: new Date().getDate(),
            clickedYear: new Date().getFullYear(),
            clickedMonth: new Date().getMonth() + 1,
            clickedDay: new Date().getDate(),
            clickedIndex: 0,
            maxIndex: 0,
            calendar_data: [
                {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth(),
                    StartWeekIndex: null,
                    EndOfDay: null,
                    CalendarMatrix: [],
                },
                {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth() + 1,
                    StartWeekIndex: null,
                    EndOfDay: null,
                    CalendarMatrix: [],
                },
                {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth() + 2,
                    StartWeekIndex: null,
                    EndOfDay: null,
                    CalendarMatrix: [],
                }
            ]
        }
    },
    mounted() {
        this.$store.dispatch('calendar/setData')
        this.init();
    },
    methods: {
        shot: function() {
            const targetElement = this.$refs.targetElement;
            const options = Platform.is.mobile ? { scale: 2 } : {};
            setTimeout(() => {
                html2canvas(targetElement, options).then(canvas => {
                    const image = canvas.toDataURL();
                    const link = document.createElement('a');
                    link.href = image;
                    link.download = 'screenshot.png';
                    link.click();
                });
            }, 500);
        },
        init: function () {
            if (this.calendar_data[1].month === 12) {
                this.calendar_data[2].month = 1
                this.calendar_data[2].year += 1
            }
            else if (this.calendar_data[1].month === 1) {
                this.calendar_data[0].month = 12
                this.calendar_data[0].year -= 1
            }
            for (let i=0; i<this.calendar_data.length; i++) {
                this.calendar_data[i].StartWeekIndex = this.getStartWeek(this.calendar_data[i].year, this.calendar_data[i].month);
                this.calendar_data[i].EndOfDay = this.getEndOfDay(this.calendar_data[i].year, this.calendar_data[i].month);
                this.calendar_data[i].CalendarMatrix = this.initCalendar(this.calendar_data[i].StartWeekIndex, this.calendar_data[i].EndOfDay);
            }
        },
        initCalendar: function (currentMonthStartWeekIndex, endOfDay) {
            let currentCalendarMatrix = [];
            let day = 1;
            for (let i = 0; i < 6; i++) {
                let calendarRow = [];
                for (let j = 0; j < 7; j++) {
                    if (i == 0 && j < currentMonthStartWeekIndex) {
                        calendarRow.push("");
                    }
                    else if (day <= endOfDay) {
                        calendarRow.push(day);
                        day++;
                    }
                    else {
                        calendarRow.push("");
                    }
                }
                currentCalendarMatrix.push(calendarRow);
            }
            return currentCalendarMatrix;
        },
        record_exist: function (day, index) { // 해당 일자에 기록이 있는지 확인
            if(index == 0) {
                for(let i=0; i<this.$store.state.calendar.prev_record.length; i++) {
                    if(this.$store.state.calendar.prev_record[i][0].length != 0 && this.$store.state.calendar.prev_record[i][0][0].day == day) {
                        return true;
                    }
                }
                return false;
            }
            else if(index == 1) {
                for(let i=0; i<this.$store.state.calendar.current_record.length; i++) {
                    if(this.$store.state.calendar.current_record[i][0].length != 0 && this.$store.state.calendar.current_record[i][0][0].day == day) {
                        return true;
                    }
                }
                return false;
            }
            else if(index == 2) {
                for(let i=0; i<this.$store.state.calendar.next_record.length; i++) {
                    if(this.$store.state.calendar.next_record[i][0].length != 0 && this.$store.state.calendar.next_record[i][0][0].day == day) {
                        return true;
                    }
                }
                return false;
            }
        },
        openRecord: function (day) {
            for(var record of this.$store.state.calendar.current_record) {
                if(day == record[0][0].day){
                    this.icon = true;
                    this.clickedDay = day;
                    this.clickedIndex = 0;
                    this.maxIndex = record.length;
                    return true;
                }
            }
            return false;
        },
        getEndOfDay: function (year, month) {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return 31;
                case 4:
                case 6:
                case 9:
                case 11:
                    return 30;
                case 2:
                    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                        return 29;
                    }
                    else {
                        return 28;
                    }
                default:
                    console.log("unknown month " + month);
                    return 0;
            }
        },
        getStartWeek: function (targetYear, targetMonth) {
            let year = this.rootYear;
            let month = 1;
            let sumOfDay = this.rootDayOfWeekIndex;
            let flag = true
            while (flag) {
                if (targetYear > year) {
                    for (let i = 0; i < 12; i++) {
                        sumOfDay += this.getEndOfDay(year, month + i);
                    }
                    year++;
                }
                else if (targetYear == year) {
                    if (targetMonth > month) {
                        sumOfDay += this.getEndOfDay(year, month);
                        month++;
                    }
                    else if (targetMonth == month) {
                        flag = false
                        return (sumOfDay) % 7;
                    }
                }
            }
        },
        onClickNextRecord: function () {
            if (this.clickedIndex != this.maxIndex-1) {
                this.clickedIndex++;
            }
        },
        onClickPrevRecord: function() {
            if (this.clickedIndex != 0) {
                this.clickedIndex--;
            }
        },
        nextMonth: function (e) {
            this.clickedMonth = this.calendar_data[e.index].month
            this.clickedYear = this.calendar_data[e.index].year
            console.log(e.direction, e.index)
            if (e.index === 0 && e.direction === 'PREV') {
                this.makeMonth(e);
            }
            else if (e.index === this.calendar_data.length - 1 && e.direction === 'NEXT') {
                this.makeMonth(e);
            }
        },
        onClickPrev: function () {
            this.$refs.cal_flicking.prev()
        },
        onClickNext: function () {
            this.$refs.cal_flicking.next()
        },
        makeMonth: async function (e) {
            let obj = {
                year: null,
                month: null,
                StartWeekIndex: null,
                EndOfDay: null,
                CalendarMatrix: [],
            }
            if (e.direction === 'PREV') {
                let target = this.calendar_data.at(0)
                if (target.month === 1) {
                    obj.year = target.year - 1;
                    obj.month = 12;
                }
                else {
                    obj.year = target.year;
                    obj.month = target.month - 1;
                }
                obj.StartWeekIndex = this.getStartWeek(obj.year, obj.month);
                obj.EndOfDay = this.getEndOfDay(obj.year, obj.month);
                obj.CalendarMatrix = this.initCalendar(obj.StartWeekIndex, obj.EndOfDay);
                await this.$store.dispatch('calendar/getPrevRecord', [obj.year, obj.month]);
                this.calendar_data.unshift(obj);
                this.calendar_data.pop();
            }
            else if (e.direction === 'NEXT') {
                let target = this.calendar_data.at(-1)
                if (target.month === 12) {
                    obj.year = target.year + 1;
                    obj.month = 1;
                }
                else {
                    obj.year = target.year;
                    obj.month = target.month + 1;
                }
                obj.StartWeekIndex = this.getStartWeek(obj.year, obj.month);
                obj.EndOfDay = this.getEndOfDay(obj.year, obj.month);
                obj.CalendarMatrix = this.initCalendar(obj.StartWeekIndex, obj.EndOfDay);
                await this.$store.dispatch('calendar/getNextRecord', [obj.year, obj.month]);
                this.calendar_data.push(obj);
                this.calendar_data.shift();
            }
            console.log(this.calendar_data);
        },
        onerm: function(set) {
            var max_kg = [];
            var max_rep = [];
            for (var i = 0; i < set.length; i++) {
                max_kg.push(set[i].kg);
                max_rep.push(set[i].rep);
            }
            return Math.floor(Math.max(...max_kg) * (1 + Math.max(...max_rep) / 30));
        },
        get_max_kg: function(set) {
            var max_kg = -1;
            for (var record of set) {
                if (max_kg < record.kg) {
                    max_kg = record.kg;
                }
            }
            return max_kg;
        }
    }
};
</script>
<style scoped>
a {
    text-decoration: none;
}

.calendar_container {
    height: calc(100% - 110px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.calendar_container::-webkit-scrollbar {
    display: none;
}
.modal_card {
    margin-top: 40px;
    height: 95%;
}
.recordlist {
    height: 80%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.recordlist::-webkit-scrollbar {
    display: none;
}
.calendar_table {
    /*height: calc(100% - 74px);*/
    margin: auto;
}

.sunday {
    color: red;
}

.saturday {
    color: blue;
}

.weekday {
    color: black;
}

.dot {
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
}
</style>
