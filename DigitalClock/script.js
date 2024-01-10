const betterDisplay = var1 => {
    if (var1<=9){
        return '0' + String(var1);
    }
    return String(var1); 
}
const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = betterDisplay(hours);
    minutes = betterDisplay(minutes);
    seconds = betterDisplay(seconds);

    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const clockDiv = document.getElementById('clock');
    if (clockDiv) {
        clockDiv.textContent = timeString;
    }
};

// Update time immediately
updateTime();

// Update time every second
setInterval(updateTime, 1000);