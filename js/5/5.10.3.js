function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // 0 becomes 7
        day = 7;
    }

    return day;
}

console.log(getLocalDay(new Date(2012, 0, 3)));