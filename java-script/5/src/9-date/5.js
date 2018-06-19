function getLastDayOfMonth(year, month){
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month + 1);
    date.setDate(0);
    return date.getDate();
};

export default getLastDayOfMonth;