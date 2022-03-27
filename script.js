"use strict";


const time = document.querySelector(`.current-time`);


const currentTime = function(){
    const date = new Date();
    const now = date.toLocaleTimeString(`sr-RS`);
    time.textContent = now;

    setTimeout(currentTime, 1000);
};
currentTime();