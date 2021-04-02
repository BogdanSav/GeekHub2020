import {useSelector} from "react-redux";

import moment from "moment";

function useCalendar() {
    const month = useSelector(state => state.calendar.currentMonth);
    const calendar = [];
    const allMonth = moment.months();
    const currMonth = allMonth[month];
    const endDays = moment().locale("uk").month(currMonth).daysInMonth();
    let startWeek = moment().month(currMonth).startOf('month').isoWeek();
    const endWeek = moment().month(currMonth).endOf('month').isoWeek();
    const dayOfWeek = (week,day)=>{
        return moment().locale('uk').isoWeek(week).isoWeekday(day).format("D")
    }
    let weekdays = moment.localeData("uk").weekdaysShort(true);
    startWeek >= 52 ?startWeek = 0 : startWeek;
    for (let i = startWeek; i <= endWeek; i++) {
        calendar.push(weekdays.map((day, index) => {
            if(i===startWeek&&dayOfWeek(i,index+1)>22 )return null;
            else if(i===endWeek&&dayOfWeek(i,index+1)<22 )return null;

            return moment().locale("uk").isoWeek(i).startOf('week').isoWeekday(index+1).format(" D")
        }))
    }

    return {calendar, currMonth, endDays};

}

export default useCalendar;
