flowTime();
const currentTime = setInterval(flowTime, 1000);
function flowTime(){
    const nowDate = new Date();
    let hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    if(hours > 12){
        hours = hours % 12;
    }
    const toText = `${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`
    document.querySelector('.hms').innerText = toText;

    document.querySelector('.hour').style.transform = `rotate(${30*hours + minutes/2}deg)`;
    document.querySelector('.minutes').style.transform = `rotate(${360/60*minutes}deg)`;
    document.querySelector('.seconds').style.transform = `rotate(${360/60*seconds}deg)`;
}