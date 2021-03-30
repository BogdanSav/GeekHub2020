import {useSelector} from "react-redux";

import moment from "moment";

function useCalendar() {
    let month = useSelector(state => state.calendar.currentMonth);
    let calendar = [];
    let allMonth = moment.months();
    let currMonth = allMonth[month];
    let endDays = moment().month(currMonth).daysInMonth();
    const startWeek = moment().month(currMonth).startOf('month').week();
    const endWeek = moment().month(currMonth).endOf('month').week();

    let weekdays = moment.localeData("en-gb").weekdaysShort(true);
    for (let i = startWeek; i <= endWeek; i++) {
        calendar.push(weekdays.map((day, index) => {
            return moment().locale("en-gb").week(i - 1).startOf('week').add(index, 'day').format(" D")
        }))
    }

    return {calendar, currMonth, endDays};

}

export default useCalendar;
