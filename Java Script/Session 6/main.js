// function test() {
//     console.log("test");
// }

// let x = test();
// console.log(x);

// let x = function () {
//     console.log("test");
// }

// function call(functionToCall) {
//     console.log("from call :")
//     functionToCall();
// }

// call(test);


// function calculateTotalPrice(callback,...prices) {
//     let total = 0;
//     for(let price of prices) {
//         total += price;
//     }
//     // console.log(total);
//     if(total > 200) {
//         return callback(total)
//     }
//     return total;
// }

// function discount(total) {
//     return (total - total * 0.1);
// }

// console.log(calculateTotalPrice(function (total) {
//         return (total - total * 0.1);
// },1,2,3,4,5,200));


// let arr = [1,2,3,4,100,20,70];
// console.log(arr.sort(function (a,b) {
//     return a - b;
// }));

// setTimeout(function () {
//     console.log("test");
// },5000);

// arr.forEach(function(element) {
//     console.log(element / 5);
// })

// console.log(arr);

// function hi(a,b) {

// }

// const x = function () {
//     console.log("hi");
// }

// const y = () => {
//     console.log("hi");
// }

// const z = (a,b) => a*b;
// console.log(z(1,2));


// const h = a => {
//     console.log(a);
// }

// const i = a => a * 10;

// {
//     var y = 2;
// }
// console.log(y);
// var z = 9;

// let x = 5;
// function test() {
//     let x = 10;
//     x++;
//     console.log(x);
//     // console.log(z);
// }
// console.log(x);
// test();
// console.log(x);


// let arr = [1,2,3,4];

// arr.forEach((element,index) => {
//     // console.log(`${index} : ${element}`);
//     element *= 10;
// })

// console.log(arr);

// let arr2 = arr.map(element => element * 5);
// console.log(arr);
// console.log(arr2);

// let arr3 = arr.filter(element => element > 2);
// console.log(arr);
// console.log(arr3);


// let sum = arr.reduce((acc,element) => acc + element,5);
// console.log(sum);


// -> Intialization
// acc = 0   element -> _
// 1st step
// acc = 0   element = 1
// acc = 1   element = 1
// acc = 1   element = 2
// acc = 3   element = 2
// acc = 3   element = 3
// acc = 6   element = 3
// acc = 6   element = 4
// acc = 10  element = 4
// acc = 10  element -> _

// let x = 10;
// console.log(x);
// console.log(y);

// console.log(x);
// var x = 0;

// var x;
// console.log(x);
// x = 0;

// hello();
// function hello() {
//     console.log("hello");
// }

// hello();
// var hello = function () {
//     console.log("hello");
// }


// var hello;
// // hello();
// hello = function () {
//     console.log("hello");
// }
// hello()


// let name = "Ahmed";
// let age = 23;
// let gender = "Male";
// let job = "Backend Developer";


// let name1 = "Sara";
// let age1= 21;

// let person = ["Ahmed", 23, "Male", "Backend"];

// let names = [ "Sara"];
// let ages = [21];
// let gender = ["Male", "Female"];
// let job = ["Backend", "Frontend"]

// console.log(names[0]);
// console.log(ages[0]);


let person1 = {
    name: {
        firstName: "Ahmed",
        lastName: "Mohammed"
    },
    age: 23,
    gender: "Male",
    job: "Backend",
    introduce: function () {
        console.log(`I am ${this.name.firstName} and 
            I am ${this.job}`);
    }
}

let person2 = {
    name: {
        firstName: "Sara",
        lastName: "Ahmed"
    },
    age: 21,
    gender: "Female",
    job: "Frontend",
}

// console.log(person1);
// console.log(person1.name)
// console.log(person1["name"])

// person1.age = 24;
// console.log(person1.age)

// console.log(person1.eferf);

// delete person1.gender;
// console.log(person1.gender);

// person1.gender = "Male";

// console.log(person1.gender)

// person1.introduce()

// let people = [person1,person2];
// people.forEach((element) => {
//     // let age = element.age;
//     // let name = element.name.firstName;

//     // let {name, age} = element;
//     // let {name: myName, age: myAge} = element;
//     let {introduce} = person1;
//     console.log(introduce);

//     // console.log(`hi i am ${myName} and i am ${myAge}`);
// })

let nums = [1,2,3,4];

let [num1 , num2, ...rest] = nums;
console.log(num1,num2,rest);


