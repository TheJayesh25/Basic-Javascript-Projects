const now = new Date();
// const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday

const betterDisplay = var1 => {
    if (var1<=9){
        var1 = '0' + String(var1);
    }
}


let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

betterDisplay(hours);
betterDisplay(minutes);
betterDisplay(seconds);

// console.log(typeof seconds);

console.log(`The time is ${hours}:${minutes}:${seconds}.`);


const localTime = document.createElement('div')
localTime.setAttribute('id','clock')
localTime.appendChild(document.createTextNode(`${hours}:${minutes}:${seconds}`));
document.querySelector('#clock').replaceWith(localTime);



// const refreshTimer = document.getElementById('refresh-timer');

// let timerInSeconds = 0;

// setInterval(() => {
//   timerInSeconds += 1;

// //   refreshTimer.innerHTML = `Refreshing page in: ${timerInSeconds} seconds`;

//   if (timerInSeconds >= 0.75) {
//     window.location.reload();
//   }
// }, 1000);