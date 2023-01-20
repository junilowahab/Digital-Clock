let second = document.getElementById('seconds');
let minute = document.getElementById('minutes');
let hour = document.getElementById('hours');

//Function for counting

function counter() {
    var timer;
    var sec = 0;
    var min = -1;
    var hr = 0;
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
        if (min == 60){
            min = 0;
        }
        if (min == 0) {
            hr++
            hr.innerHTML = hr;
        }
    }, 1000);
    

}

//Function for reflection counting

let reflectedSecond = document.getElementById('refsec');
let reflectedMinute = document.getElementById('refmin');

function reverseCounter() {
    var reflectionTimer;
    reflectionTimer = setInterval(() => {
        reflectedSecond.innerHTML = second.innerHTML;
        reflectedMinute.innerHTML = minute.innerHTML;
    }, 1000);
}

second.addEventListener('click', counter);
second.addEventListener('click', reverseCounter);