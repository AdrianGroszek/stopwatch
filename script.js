'use strict';

const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const millisecTime = document.querySelector('.time-millisec');

const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval;

const startFun = function () {
	if (millisecond < 99) {
		if (millisecond < 9) {
			millisecond++;
			millisecTime.textContent = `0${millisecond}`;
		} else {
			millisecond++;
			millisecTime.textContent = `${millisecond}`;
		}
	} else if (second < 59) {
		millisecond = 0;
		millisecTime.textContent = `0${millisecond}`;
		if (second < 9) {
			second++;
			secTime.textContent = `0${second}`;
		} else {
			second++;
			secTime.textContent = `${second}`;
		}
	} else if (minute < 59) {
		millisecond = 0;
		second = 0;
		millisecTime.textContent = `0${millisecond}`;
		secTime.textContent = `0${second}`;
		if (minute < 9) {
			minute++;
			minTime.textContent = `0${minute}`;
		} else {
			minute++;
			minTime.textContent = `${minute}`;
		}
	} else if (hour < 23) {
		millisecond = 0;
		second = 0;
		minute = 0;
		millisecTime.textContent = `0${millisecond}`;
		secTime.textContent = `0${second}`;
		minTime.textContent = `0${minute}`;
		if (hour < 9) {
			hour++;
			hourTime.textContent = `0${hour}`;
		} else {
			hour++;
			hourTime.textContent = `${hour}`;
		}
	}
};

btnStart.addEventListener('click', function () {
	interval = setInterval(startFun, 10);
});

btnStop.addEventListener('click', function () {
	clearInterval(interval);
});

btnReset.addEventListener('click', function () {
	clearInterval(interval);
	millisecond = 0;
	second = 0;
	minute = 0;
	hour = 0;
	millisecTime.textContent = '00';
	secTime.textContent = '00';
	minTime.textContent = '00';
	hourTime.textContent = '00';
});
