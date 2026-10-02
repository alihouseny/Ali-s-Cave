// for(let i = 1; i < 5; i++) {
//     console.log("....");
// }


// console.log("nodejs");
// console.error("name is empty");

// window.print();
// window.document.write("sdfsf");
// window.console.log("shams");

// window.alert("Nodejs");
// print()
// alert("sdf");

// document.getElementById("heading").style.color = 'red';
// let h1 = document.getElementById("heading");
// h1.innerHTML = "Welcome";

// document.getElementsByTagName('h1')[0].innerHTML = "Welcome"

// let h1Elements = document.getElementsByTagName('h1');
// for(let i = 0; i < h1Elements.length; i++) {
//     h1Elements[i].innerHTML = "Welcome";
// }

// for(let h1 of h1Elements) {
//     h1.innerHTML = "Welcome2";
// }


// let h1 = document.querySelector("#heading");
// console.log(h1);
// let h1 = document.querySelector("h1");
// console.log(h1);

// let h1 = document.querySelectorAll("#heading");
// console.log(h1);

// let h1 = document.querySelectorAll("h1");
// console.log(h1);

// let img = document.getElementsByTagName("img");
// console.log(img);

// let img = document.querySelector("div img");
// console.log(img);

// let input = document.querySelector("input");
// console.log(input);
// console.log(input.value)
// input.value = "sdfdfwf";

// input.setAttribute("value","dferfe");
// console.log(input.getAttribute("value"));

// input.value = "SS";
// console.log(input.value); // SS
// console.log(input.getAttribute("value")); // shams
// input.setAttribute("value","Mohammed");
// console.log(input.getAttribute("value"));

// console.log(this);

// function SayThankYou() {
//     const btn = document.getElementById("btn");
//     btn.innerHTML = "Thank You";
// }

// const btn = document.getElementById("btn");
// // btn.onclick = SayThankYou;

// btn.onmouseover = SayThankYou;
// btn.onmouseout = function () {
//     btn.innerHTML = "Click";
// }

// btn.addEventListener('mouseout', function () {
//     btn.innerHTML = "Thank You";
// })


// btn.onclick = function () {
//     console.log("first");
// }

// btn.onclick = function () {
//     console.log("second");
// }

// btn.onclick = function () {
//     console.log("third");
// }


// btn.addEventListener('click', function () {
//     console.log("first");
// });

// btn.addEventListener('click', function () {
//     console.log("second");
// });

// btn.addEventListener('click', function () {
//     console.log("third");
// });

// btn.onclick = function () {

// }

// btn.onclick = "test";
// // btn.addEventListener('click',function () {

// // })

// console.log(btn.onclick);


const student1li = document.createElement('li');
const student2li = document.createElement('li');
const student3li = document.createElement('li');

// // console.log(student1li);

const student1 = document.createTextNode("Ahmed");
const student2 = document.createTextNode("Mona");
const student3 = document.createTextNode("Sara");

// // console.log(student1);
// // console.log(student1li);
student1li.appendChild(student1);
student2li.appendChild(student2);
student3li.appendChild(student3);

// // console.log(student1li);

const ul = document.querySelector('ul');
// // console.log(ul);

ul.appendChild(student1li);
ul.appendChild(student2li);
ul.appendChild(student3li);

// ul.innerHTML = `
// <li>Ahmed</li>
// <li>Mona</li>
// <li>Sara</li>
// `

// ul.removeChild(student2li);


