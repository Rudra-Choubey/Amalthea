let $ = (selector) => document.querySelector(selector)

let dayElement = $('.day')
let hoursElement = $('.hours')
let minutesElement = $('.minutes')
let secondsElement = $('.seconds')


function update(){
    let amaltheaDate = new Date("December 1, 2024 00:00:00");
    let now = new Date();
    
    let remainingTime = amaltheaDate.getTime() - now.getTime();
    let day = `${Math.floor(remainingTime/(1000 * 60 * 60 * 24))} D`
    let hours = `${Math.floor(remainingTime/(1000 * 60 * 60)) % 24} H`
    let minutes = `${Math.floor(remainingTime/(1000 * 60)) % 60} M`
    let seconds = `${Math.floor(remainingTime/(1000))  % 60} S`

    dayElement.innerHTML = day;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}
setInterval(update, 1000)