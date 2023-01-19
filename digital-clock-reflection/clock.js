let second = document.getElementById('seconds');
let minute = document.getElementById('minutes');
let hour = document.getElementById('hours');

//Function for counting

function counter() {
    var timer;
    var sec = 0;
    var min = -1;
    timer = setInterval(() => {
        second.innerHTML = sec;
        sec++;
        console.log(sec);
        if(sec == 60){
            sec = 0;
        }
        if (sec == 1) {
            min++;
            minute.innerHTML = min;
        }
    }, 1000);
    

}

//Function for reflection counting

let reflectedSecond = document.getElementById('refsec');
let reflectedMinute = document.getElementById('refmin');

function reverseCounter() {
    var reflectionTimer;
    var refSec = 0;
    // var refMin = -1;
    reflectionTimer = setInterval(() => {
        reflectedSecond.innerHTML = refSec;
        refSec++;
        if(refSec == 60){
            refSec = 0;
        }
        // if(refSec = 1){
        //     refMin++;
        //     reflectedMinute.innerHTML = refMin;
        // }
        reflectedMinute.innerHTML = minute.innerHTML;
    }, 1000);
}

second.addEventListener('click', counter);
second.addEventListener('click', reverseCounter);