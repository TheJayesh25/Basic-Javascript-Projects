let refChange;
let isStarted = false; 
const change = () => {
    refChange = setInterval(function(){
        const hex = '0123456789ABCDEF'
        const hex_val = () => Math.floor((Math.random()*hex.length-1) + 1);
        color = '#'
        for (let i=0; i<6; i++){
            let val = hex_val();
            // console.log(val)
            // console.log('-------------------')
            color += hex.charAt(val);
            // console.log(color)
            // console.log('===================')
        }
        document.querySelector('body').style.backgroundColor = color
    },1000)
}


document.getElementById('start').addEventListener('click',function(e){
    // console.log(e);
    if (!isStarted) { // Only start if it hasn't been started yet
        change();
        isStarted = true; // Mark it as started
    }
    // document.getElementById('start').removeAttribute('id');
    // e.preventDefault();
});

document.getElementById('stop').addEventListener('click',function(e){
    clearInterval(refChange);
    isStarted = false;
    // document.querySelector('.start').setAttribute('id','start');
});