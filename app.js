const newYear = '1 Jan 2023';
const addDay = document.querySelector('#days');
const addHours = document.querySelector('#hours');
const addMinutes = document.querySelector('#minutes');
const addSeconds = document.querySelector('#seconds');


function countDown() {

    const newYearDate = new Date(newYear);
    const today = new Date()
    const minusToday = (newYearDate - today);

    const totalSeconds = Math.floor((newYearDate - today) / 1000);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const days = Math.floor((totalSeconds / 3600) / 24);
    const seconds = Math.floor((totalSeconds) % 60);

    addDay.innerHTML = timeFormat(days);
    addHours.innerHTML = timeFormat(hours);
    addMinutes.innerHTML = timeFormat(minutes);
    addSeconds.innerHTML = timeFormat(seconds);
};


function timeFormat(time) {
    return time < 10 ? (`0${time}`) : time;
};

countDown();

setInterval(countDown, 1000);