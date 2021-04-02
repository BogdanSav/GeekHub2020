import {useSelector} from "react-redux";

import moment from "moment";

function useCalendar() {
    let month = useSelector(state => state.calendar.currentMonth);
    let calendar = [];
    let allMonth = moment.months();
    let currMonth = allMonth[month];
    let endDays = moment().month(currMonth).daysInMonth();
    let startWeek = moment().month(currMonth).startOf('month').week();
    let endWeek = moment().month(currMonth).endOf('month').week();
    const dayOfWeek = (week,day)=>{
        return moment().locale('en-gb').week(week).day(day).format("D");
    }
    let weekdays = moment.localeData("en-gb").weekdaysShort(true);
    if(month===11) endWeek = 53;
    for (let i = startWeek; i <= endWeek; i++) {
        calendar.push(weekdays.map((day, index) => {
            if(i===startWeek&&dayOfWeek(i-1,index)>22 )return null;
            else if(i===endWeek&&dayOfWeek(i-1,index)<24 )return null;

            return moment().locale("en-gb").week(i - 1).startOf('weeks').day(index).format(" D")
        }))
    }
    return {calendar, currMonth, endDays};

}

export default useCalendar;
