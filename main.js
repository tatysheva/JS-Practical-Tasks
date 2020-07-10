// ################# 2 #################

const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
var todayHTML = document.getElementById("todayHTML");
var timeHTML = document.getElementById("timeHTML");

todayHTML.innerHTML = `Today is : ${daylist[day]}.`;
timeHTML.innerHTML = `Current Time : ${hour}${prepand} : ${minute} : ${second}`;

// 2.1

const reversedNum = number => parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)
const number = document.querySelector('.number');
const text = document.querySelector('.num');
const button = document.querySelector('.number-button');
button.addEventListener('click', (event) => { text.innerHTML = reversedNum(number.value) })


// 2.2 

const factorial = n => (n != 1) ? n * factorial(n - 1) : 1;
const factorialNumber = document.querySelector('.factorial-number');
const fact = document.querySelector('.fact');
const factorialButton = document.querySelector('.factorial-button');
factorialButton.addEventListener('click', (event) => { fact.innerHTML = factorial(factorialNumber.value) })

//  2.3

const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const compareButton = document.querySelector('.compare-button');
const larger = document.querySelector('.larger');
function compare() {
    if (firstNumber.value > secondNumber.value) {
        return firstNumber.value
    } else if (secondNumber.value > firstNumber.value) {
        return secondNumber.value
    }
}
compareButton.addEventListener('click', (event) => { larger.innerHTML = compare() })

// 2.4

const myColor = ["Red", "Green", "White", "Black"];
const color = document.querySelector('.color');
color.innerHTML = myColor.join()

// 2.5 

const date = document.querySelector('.date');
const month = document.querySelector('.month')
const monthBtn = document.querySelector('.month-button')

var month_name = function (dt) {
    monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthList[dt.getMonth()];
};
monthBtn.addEventListener('click', (event) => {
    month.innerHTML = month_name(new Date(date.value))
})

// 2.6

const upperCase = document.querySelector('.upperCase')

function upper_case(str) {
    regexp = /[A-Z]/;
    if (regexp.test(str)) {
        upperCase.innerHTML = "String's first character is uppercase";
    } else {
        upperCase.innerHTML = "String's first character is not uppercase";
    }
}
console.log(upper_case('AbCd'))

//  2.7

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();

ctx.beginPath();
ctx.arc(120, 40, 4, 0, 2 * Math.PI);
ctx.arc(85, 40, 4, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.arc(103, 55, 15, 0, 1 * Math.PI);
ctx.stroke();


// 4.1

const string1 = document.querySelector('#string-1');
const string2 = document.querySelector('#string-2');
const string3 = document.querySelector('#string-3');
const string4 = document.querySelector('#string-4');
const string5 = document.querySelector('#string-5');
const string6 = document.querySelector('#string-6');

string1.innerHTML = 'В недрах тундры, выдры в гетрах';
string2.innerHTML = 'Тырят в вёдра ядра кедров!';
string3.innerHTML = 'Выдрав с выдры в тундре гетры';
string4.innerHTML = 'Вытру выдрой ядра кедров';
string5.innerHTML = 'Вытру выдрой ядра кедров';
string6.innerHTML = 'Ядра в вёдра, выдру в тундру!';


// 4.2 *

const element = document.querySelectorAll('.element');

[...element].forEach((el, index) => {
    el.style.color = index > 2 ? 'blue' : 'red'
})

// 4.3

var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

[...tasks].forEach((el) => {
    const element = el;
    let li = document.createElement('li');
    let list = document.querySelector('#todo-list');
    li.innerText = element;
    list.appendChild(li).classList.add("task");
})

// 4.4

let p = document.querySelectorAll('.para');
let hr = document.createElement('hr');

[...p].forEach((el) => {
    el.insertAdjacentHTML('afterend', '<hr>')
})

// 4.5

let item = document.getElementById('cart-items');
item.removeChild(item.childNodes[3]);

var textnode = document.createTextNode("Canned Fish");
item.childNodes[8];
item.replaceChild(textnode, item.childNodes[8]);

var textnode = document.createTextNode(" x 4");
item.childNodes[9];
item.replaceChild(textnode, item.childNodes[9]);

// 4.6

let addBtn = document.getElementById('add');

addBtn.addEventListener('click', function () {
    let li = document.createElement('li');
    li.addEventListener('click', function(){
        li.remove();
    })
    let text = document.getElementById('text').value;
    let list = document.getElementById('myList');
    if(!text) return;
    li.innerText = text;
    list.appendChild(li);
    });