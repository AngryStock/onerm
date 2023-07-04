<template>
    <q-page>
        <div class="calendar_container">
            <div class="row items-center q-pa-lg text-bold">
                <q-space />
                <q-btn @click="onClickPrev()" flat round dense label="<" size="lg"></q-btn>
                <text-h1 style="font-size: 24px;">{{ clickedYear }}년 {{ clickedMonth }}월</text-h1>
                <q-btn @click="onClickNext()" flat round dense label=">" size="lg"></q-btn>
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
                                    <span v-else class="weekday">{{ dayname }}</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in item.CalendarMatrix" :key="index">
                                <td v-for="(day, index2) in row" :key="index2">
                                    <div v-if="day !== ''">
                                        <q-btn @click="openRecord(day, clickedMonth, clickedYear)" flat round dense style="width: 50px; height: 50px;">
                                            <div v-if="day !== ''">
                                                <div v-if="record_exist(day, clickedMonth, clickedYear)">
                                                    <div class="column items-center" style="margin-top: 5px;">
                                                        <div v-if="index2 === 0" class="sunday">{{ day }}</div>
                                                        <div v-else-if="index2 === 6" class="saturday">{{ day }}</div>
                                                        <div v-else class="weekday">{{ day }}</div>
                                                        <div class="dot"></div>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <div class="column items-center">
                                                        <div v-if="index2 === 0" class="sunday">{{ day }}</div>
                                                        <div v-else-if="index2 === 6" class="saturday">{{ day }}</div>
                                                        <div v-else class="weekday">{{ day }}</div>
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
            <div ref="targetElement" class="modal_card">
                <q-card style="height: 100%;">
                    <q-card-section class="row items-center q-pb-none">
                        <q-btn icon="close" flat round dense v-close-popup />
                        <q-space />
                        <q-btn @click="onClickPrevRecord(currentMonth)" flat round dense label="<" size="lg"></q-btn>
                        <div class="text-h6">{{ clickedYear }}년 {{ clickedMonth }}월 {{ clickedDay }}일</div>
                        <q-btn @click="onClickNextRecord(currentMonth)" flat round dense label=">" size="lg"></q-btn>
                        <q-space />
                        <q-btn @click="shot()" flat round dense :icon="outlinedShare" />
                    </q-card-section>
                    <q-card-section>
                        <div v-for="(row, index) in calendar_data" :key="index" class="q-pa-md">
                            <div v-if="row.year == clickedYear && row.month == clickedMonth">
                                <div v-for="(record, index2) in row.records" :key="index2">
                                    <div v-if="record.day == clickedDay">
                                        <div v-for="(data, index3) in record.data.record" :key="index3">
                                            <div>
                                                kg : {{ data.kg }}
                                                rep : {{ data.rep }}
                                                휴식 : {{ data.break_time }}
                                                수행 : {{ data.performance_time }}
                                                title : {{ record.data.title }}
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
import { date } from 'quasar';
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
            currentMonthStartWeekIndex: null,
            currentCalendarMatrix: [],
            endOfDay: null,
            calendar_data: [
                {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth(),
                    StartWeekIndex: null,
                    EndOfDay: null,
                    CalendarMatrix: [],
                    records: []
                },
                {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth() + 1,
                    StartWeekIndex: null,
                    EndOfDay: null,
                    CalendarMatrix: [],
                    records: []
                },
                {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth() + 2,
                    StartWeekIndex: null,
                    EndOfDay: null,
                    CalendarMatrix: [],
                    records: []
                }
            ]
        }
    },
    mounted() {
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
                for (var record of this.$store.state.calendar.record) {
                    var record_year = date.formatDate(record.date, 'YYYY');
                    var record_month = date.formatDate(record.date, 'M');
                    var record_day = date.formatDate(record.date, 'D');
                    if (record_month == this.calendar_data[i].month && record_year == this.calendar_data[i].year) {
                        var temp = {
                            day: record_day,
                            data: record
                        }
                        this.calendar_data[i].records.push(temp);
                    }
                }
            }
            console.log(this.$refs.cal_flicking.index)
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
        record_exist: function (day, month, year) { // 해당 일자에 기록이 있는지 확인
            for (var record of this.$store.state.calendar.record) {
                var record_year = date.formatDate(record.date, 'YYYY');
                var record_month = date.formatDate(record.date, 'M');
                var record_day = date.formatDate(record.date, 'D');
                if (record_day == day && record_month == month && record_year == year) {
                    return true;
                }
            }
            return false;
        },
        getThisMonthRecord: function (month) { //이번달 기록 가져오기 [1, 3, 7, 31]
            return month;
        },
        getDayRecord: function (day) { // 해당일자 기록 가져오기
            return day;
        },
        openRecord: function (day, month, year) {
            if (this.record_exist(day, month, year)) {
                this.icon = true
                this.clickedDay = day;
            }
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

        },
        onClickPrevRecord: function() {

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
        makeMonth: function (e) {
            console.log('make');
            let obj = {
                year: null,
                month: null,
                StartWeekIndex: null,
                EndOfDay: null,
                CalendarMatrix: [],
                records: []
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
                this.calendar_data.splice(0, 0, ...[obj])
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
                this.calendar_data.push(obj);
            }
            console.log(this.calendar_data);
        }
    }
};
</script>
<style scoped>
a {
    text-decoration: none;
}

.calendar_container {
    height: calc(100%-110px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.calendar_container::-webkit-scrollbar {
    display: none;
}
.modal_card {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-top: 40px;
    height: 95%;
    z-index: 9999;
}
.modal_card::-webkit-scrollbar {
    display: none;
}
.calendar_table {
    height: calc(100%-74px);
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
