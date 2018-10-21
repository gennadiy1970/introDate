const elemGetNow = document.querySelector('.get-now');
const elemGetMsc = document.querySelector('.get-msc');
const elemGetSec = document.querySelector('.get-sec');
const elemGetMin = document.querySelector('.get-min');
const nativeDate = document.getElementById('native');
const tdGetTime = nativeDate.querySelector('.td-time');
const tdToTimeString = nativeDate.querySelector('.td-time-string');
const tdToDateString = nativeDate.querySelector('.td-date-string');
const tdToLTimeString = nativeDate.querySelector('.td-ltime-string');
const tdToLDateString = nativeDate.querySelector('.td-ldate-string');
const tdGetMsc = nativeDate.querySelector('.td-msc');
const tdGetSec = nativeDate.querySelector('.td-sec');
const tdGetMin = nativeDate.querySelector('.td-min');
const tdGetHrs = nativeDate.querySelector('.td-hrs');
const tdGetUTCMsc = nativeDate.querySelector('.td-msc-utc');
const tdGetUTCSec = nativeDate.querySelector('.td-sec-utc');
const tdGetUTCMin = nativeDate.querySelector('.td-min-utc');
const tdGetUTCHrs = nativeDate.querySelector('.td-hrs-utc');
const tdGetDay = nativeDate.querySelector('.td-day');
const tdGetDates = nativeDate.querySelector('.td-dts');
const tdGetMonth = nativeDate.querySelector('.td-mns');
const tdGetFullYear = nativeDate.querySelector('.td-year');
const tdGetUTCDay = nativeDate.querySelector('.td-day-utc');
const tdGetUTCDates = nativeDate.querySelector('.td-dts-utc');
const tdGetUTCMonth = nativeDate.querySelector('.td-mns-utc');
const tdGetUTCFullYear = nativeDate.querySelector('.td-year-utc');
const tdGetTimezoneOffset = nativeDate.querySelector('.td-time-zone');
const setFullYear = document.querySelector('.set-fullyear');
const setMonth = document.querySelector('.set-month');
const getMonth = document.querySelector('.get-month');
const setDate = document.querySelector('.set-date');
const setDay = document.querySelector('.set-day');
const momentFull = document.querySelector('.moment-full');
const momentDefault = document.querySelector('.moment-default');
const momentTime = document.querySelector('.moment-time');
const momentTimeStamp = document.querySelector('.moment-timestamp');
const momentAdd100 = document.querySelector('.moment-add100');
const momentAdd45 = document.querySelector('.moment-add45');


setInterval(function() {
    const date = Date.now();
    elemGetNow.textContent = date;
    elemGetMsc.textContent = date.toString().slice(-3);
    elemGetSec.textContent = date.toString().slice(-5).slice(0, 2) % 60;
    elemGetMin.textContent = (date.toString().slice(0,-3) / 60 % 60).toFixed(0);
    const today = new Date(date);
    tdGetTimezoneOffset.textContent = today.getTimezoneOffset();
     /**  TIMESTAMP */
    tdGetTime.textContent = today.getTime();
    tdToTimeString.textContent = today.toTimeString();
    tdToDateString.textContent = today.toDateString();
    tdToLTimeString.textContent = today.toLocaleTimeString();
    tdToLDateString.textContent = today.toLocaleDateString();
    /**  TIME */
    tdGetMsc.textContent = today.getMilliseconds();
    tdGetSec.textContent = today.getSeconds();
    tdGetMin.textContent = today.getMinutes();
    tdGetHrs.textContent = today.getHours();
    /**  UTC TIME */
    tdGetUTCMsc.textContent = today.getUTCMilliseconds();
    tdGetUTCSec.textContent = today.getUTCSeconds();
    tdGetUTCMin.textContent = today.getUTCMinutes();
    tdGetUTCHrs.textContent = today.getUTCHours();
    /**  DATE */
    tdGetDay.textContent = today.getDay();
    tdGetDates.textContent = today.getDate();
    tdGetMonth.textContent = today.getMonth();
    tdGetFullYear.textContent = today.getFullYear();
    /**  UTC DATE */
    tdGetUTCDay.textContent = today.getUTCDay();
    tdGetUTCDates.textContent = today.getUTCDate();
    tdGetUTCMonth.textContent = today.getUTCMonth();
    tdGetUTCFullYear.textContent = today.getUTCFullYear();

    const next100 = new Date (Date.now() + 1000 * 60 * 60 * 24 * 100)

    setFullYear.textContent = next100.getFullYear()
    setMonth.textContent = next100.getMonth()
    setDate.textContent = next100.getDate()
    setDay.textContent = next100.getDay()

    const next2month = new Date ();
    next2month.setMonth(next2month.getMonth() + 2);
    next2month.getMonth()
    getMonth.textContent = next2month.getMonth();
    momentDefault.textContent = moment().format('MMMM Do YYYY');
    momentFull.textContent = moment().format('h:mm:ss');
    momentTime.textContent = moment().format('h:mm:ss:SSS');
    momentTimeStamp.textContent = moment().format('x');
    momentAdd100.textContent = moment().add(100, 'days').format('MMMM Do YYYY');
    momentAdd45.textContent = moment().subtract(45, 'm').format('h:mm:ss');

} ,1000/60)