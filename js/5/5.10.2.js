let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

console.log(getWeekDay(date));