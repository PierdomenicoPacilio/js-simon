let firstCount = 10;
let secondCount = 10;
let thirdCount = 30;
const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const numList = document.getElementById('numbers-list');
const inputNum = document.getElementById('answers-form');
const randomNum = [];
for(i = 0; i < 6; i++) randomNum.push(Math.floor(Math.random() * 50) + 1);
const timer = setInterval(function(){
    if (firstCount > 0){
        countdown.innerText = firstCount;
        firstCount = firstCount -  1;
    } else{
        instructions.classList.add('d-none');
        numList.innerHTML = `<li>${randomNum[0]}</li>
                             <li>${randomNum[1]}</li>
                             <li>${randomNum[2]}</li>
                             <li>${randomNum[3]}</li>
                             <li>${randomNum[4]}</li>`;
        if (secondCount > 0){
            countdown.innerText = secondCount;
            secondCount = secondCount -  1;
        } else{
            numList.classList.add('d-none');
            inputNum.classList.remove('d-none');
            if (thirdCount > 0){
                countdown.innerText = thirdCount;
                thirdCount = thirdCount -  1;
            } else{
                clearInterval(timer);
                countdown.classList.add('d-none');
                inputNum.classList.add('d-none');
            };
        };
    };
},1000);
timer;