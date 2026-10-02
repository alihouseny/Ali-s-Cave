//Numbers
console.log(Number((.1+.2).toFixed(1)));

let x="abc10    "
console.log(parseInt(x));
console.log(Number(x));


console.log(Number.isNaN(5/"abc"));

isNaN("abc");            
Number.isNaN("abc"); 



//condition
let grade=80;

if(grade>70){
    console.log("excellent");
}else{
    console.log("fail");
}

grade>70? console.log("excellent") : console.log("fail");

let day=+window.prompt("enter day");

switch(day){
    case 1 :
        console.log("saturday");
        break;
    case 2 :
        console.log("sunday");
        break;
    default:
        console.log("err");
}


//Array
let arr=[1,2,3,4,5,6];
let z=arr;
let y=[...arr]
b.push(4);
arr.name="Tahany";
console.log(arr);

console.log(typeof arr);

let ob={};
console.log(Array.isArray(ob));

arr.push(4);
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);


arr.splice(1,3);
console.log(arr);

arr.splice(1,0,2,3,4);
console.log(arr);

arr.splice(1,2,"Tahany");
console.log(arr);

