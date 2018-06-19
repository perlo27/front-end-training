function getLocalDay(date){
    return date.getUTCDay() + 1;
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012

export default getLocalDay;