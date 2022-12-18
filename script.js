const input = document.getElementById('inputSeconds').value;
const output = document.getElementById('js-result');
const btn = document.getElementById('btnConvert');
const YEAR = 31536000;
const DAY = 86400;
const HOUR = 3600;
const MINUTE = 60;
let readableFormat;
let Time = {
  years: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateYears() {
    while (Time.seconds >= YEAR) {
        Time.years = Math.floor((Time.seconds / DAY) / 365);
        Time.seconds -= (Time.years * YEAR);
    }
    Time.years <= 0 ? delete Time.years : Time.years == 1 ? Time.years += ' year' : Time.years += ' years';
}

function calculateDays() {
    while (Time.seconds >= DAY) {
        Time.days = Math.floor(Time.seconds / DAY);
        Time.seconds -= (Time.days * DAY);
    }
    Time.days <= 0 ? delete Time.days : Time.days == 1 ? Time.days += ' day' : Time.days += ' days';
}

function calculateHours() {
    while (Time.seconds >= HOUR) {
      Time.hours = Math.floor(Time.seconds / HOUR);
      Time.seconds -= (Time.hours * HOUR);
    }
    Time.hours <= 0 ? delete Time.hours : Time.hours == 1 ? Time.hours += ' hour' : Time.hours += ' hours';
}

function calculateMinutes() {
    while (Time.seconds >= MINUTE) {
        Time.minutes = Math.floor(Time.seconds / MINUTE);
        Time.seconds -= (Time.minutes * MINUTE);
    }
    Time.minutes <= 0 ? delete Time.minutes : Time.minutes == 1 ? Time.minutes += ' minute' : Time.minutes += ' minutes';
}

function calculateSeconds() {
    Time.seconds <= 0 ? delete Time.seconds : Time.seconds == 1 ? Time.seconds += ' second' : Time.seconds += ' seconds';
}

function cleanResult() {
    readableFormat = Object.values(Time).join(', ');
    const lastCommaIndex = readableFormat.lastIndexOf(', ');
    const lastValue = readableFormat.substring(lastCommaIndex, readableFormat.length).replace(/,/g, ' and ');
    readableFormat = readableFormat.substring(0,lastCommaIndex) + lastValue;
}

function formatDuration (a) {
    Time.seconds = a;
    calculateYears();
    calculateDays();
    calculateHours();
    calculateMinutes();
    calculateSeconds();
    cleanResult();
    return readableFormat;
}

let seconds = prompt('enter seconds count');
// let seconds = input;

function getSec() {
  seconds = input;
  Time.seconds = input;
  console.log('seconds = ' + seconds);
  console.log('input = ' + input);
}
console.log(Time.seconds)

// seconds

btn.addEventListener('click', getSec);

if (seconds == 0 || seconds == undefined) {
    output.innerHTML = 'You entered 0 seconds';
}
else {
    formatDuration(seconds);
    output.innerHTML = readableFormat;
}
