const secondHand = document.querySelector(".second");//get the seconds hand in css
const minuteHand = document.querySelector(".minute");//get the minutes hand in css
const hourhand = document.querySelector(".hour");//get the hour hand in css


function setDate(){
    // get the time from the date method 
    const now = new Date();
    const seconds = now.getSeconds();//get seconds
    const minutes = now.getMinutes();//get minutes
    const hours = now.getHours();//get hours
    
    // turn the time seconds into degree in css 
    const secondDegrees = ((seconds / 60) * 360) + 270;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    console.log(`Seconds ${secondDegrees}`);

    //turn the time minutes into degree in css
    const minuteDegrees = ((minutes / 60) * 360) + 270;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`; 
    console.log(`Minutes ${minuteDegrees}`);

    //turn the time hours into degree in css
    const hourDegrees = ((hours / 24) * 360) + 270;
    hourhand.style.transform = `rotate${hourDegrees}deg`;
    console.log(`Hour ${hourDegrees}`);

    
}

setInterval(setDate,1000);