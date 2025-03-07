
let firstCount = 10;
let secondCount = 10;
let thirdCount = 30;

const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const numList = document.getElementById('numbers-list');
const inputNum = document.getElementById('answers-form');
const button = document.getElementById('button');
const output = document.getElementById('message');

const randomNum = [];
const userNum = [];
const verNum = [];

for (i = 0; i < 5; i++) randomNum.push(Math.floor(Math.random() * 50) + 1);

const simon = setInterval(function () {
    if (firstCount > 0) {
        countdown.innerText = firstCount;
        firstCount = firstCount - 1;
    } else {
        instructions.classList.add('d-none');
        numList.innerHTML = `<li>${randomNum[0]}</li>
                             <li>${randomNum[1]}</li>
                             <li>${randomNum[2]}</li>
                             <li>${randomNum[3]}</li>
                             <li>${randomNum[4]}</li>`;
        if (secondCount > 0) {
            countdown.innerText = secondCount;
            secondCount = secondCount - 1;
        } else {
            numList.classList.add('d-none');
            inputNum.classList.remove('d-none');
            if (thirdCount > 0) {
                countdown.innerText = thirdCount;
                thirdCount = thirdCount - 1;
            } else {
                clearInterval(simon);
                countdown.classList.add('d-none');
                inputNum.classList.add('d-none');
                document.getElementById('message').innerText = `tempo scaduto! hai perso, riprova a giocare!`;
            };
        };
    };
}, 1000);
button.addEventListener('click', function (event) {
    event.preventDefault();
    clearInterval(simon);
    countdown.classList.add('d-none');
    inputNum.classList.add('d-none');
    userNum.length = 0;
    verNum.length = 0; 
    for (i = 0; i < randomNum.length; i++) userNum.push(Number(document.getElementById(`input${i}`).value));
    for (i = 0; i < randomNum.length; i++) if (randomNum.includes(userNum[i])) verNum.push(userNum[i]);
    console.log(`hai indovinato ${verNum.length} numeri! (${verNum.length})`);
    output.innerText = `hai indovinato ${verNum.length} numeri! (${verNum})`;
});