import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inptDate = document.querySelector('#datetime-picker');
const timerItem = document.querySelector('.timer');
const btnStart = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');

btnStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
    const currentDate = Date.now();
    const selectedDate = selectedDates[0].getTime();

    if (currentDate > selectedDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
    };
    btnStart.disabled = false;
    }
};

flatpickr(inptDate, options);

function addLeadingZero(value) {
    return `${value}`.padStart(2, 0);
}

let intervalId = null;

function startTimer() {
    
    intervalId = setInterval(() => {
    const newDate = new Date(inptDate.value);
    let intervalTime = convertMs(newDate - Date.now());

    if (newDate < Date.now()) {
        clearInterval(intervalId);
        return init();
    }
    init(intervalTime);
    }, 1000);
    }

function init(time = { days: 0, hours: 0, minutes: 0, seconds: 0 }) {
    days.textContent = `${time.days}`.padStart(2, 0);
    hours.textContent = `${time.hours}`.padStart(2, 0);
    minutes.textContent = `${time.minutes}`.padStart(2, 0);
    seconds.textContent = `${time.seconds}`.padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};

btnStart.addEventListener('click', startTimer);
