"use strict";


const time = document.querySelector(`.current-time`);
const hours = document.querySelector(`.hours`);
const minutes = document.querySelector(`.minutes`);
const seconds = document.querySelector(`.seconds`);
const buttonSetAlarm = document.querySelector(`.set-alarm`);

let alarmElement;
let activeAlarm = false;
const sound = new Audio(`alarm-sound.mp3`);
sound.loop = true;


const currentTime = function(){
    const date = new Date();
    const now = date.toLocaleTimeString(`sr-RS`);
    time.textContent = now;

    setTimeout(currentTime, 1000);

    if(now === alarmElement){
        sound.play();
    }
};
currentTime();

const addHours = function(id){
    const select = id;
    const hour = 23;

    for(let i = 0; i <= hour; i++){
        select.options[select.options.length] = new Option(i < 10 ? `0` + i : i);
    }
};
addHours(hours);

const addMinutes = function(id){
    const select = id;
    const minute = 59;

    for(let i = 0; i <= minute; i++){
        select.options[select.options.length] = new Option(i < 10 ? `0` + i : i);
    }
};
addMinutes(minutes);

const addSeconds = function(id){
    const select = id;
    const second = 59;

    for(let i = 0; i <= second; i++){
        select.options[select.options.length] = new Option(i < 10 ? `0` + i : i);
    }
};
addMinutes(seconds);

buttonSetAlarm.addEventListener(`click`, ()=>{
    if(activeAlarm === false){
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;

        buttonSetAlarm.textContent = `Dismiss`;
        buttonSetAlarm.style.backgroundColor = `rgb(144, 0, 29)`;

        alarmElement = `${hours.value}:${minutes.value}:${seconds.value}`;
        activeAlarm = true;
    }

    else{
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;

        buttonSetAlarm.textContent = `Set Alarm`;
        buttonSetAlarm.style.backgroundColor = `rgb(220, 20, 60)`;

        activeAlarm = false;
        sound.pause();
    }
});