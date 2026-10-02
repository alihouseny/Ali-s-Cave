
// let jsonText = '{"name":"Tahany","age":21,"isStudent":true}';
// let user = JSON.parse(jsonText);
// console.log(jsonText);
// console.log(typeof jsonText);//string
// console.log(user)
// console.log(typeof user)//object



// let ob3={
//     name: "tahany",
//     age:21,
//     skills:["c++","java"],
//     add:{
//         "egypt":"132",
//         "ger":[1,2,3]
//     }
// };
// let ob4=JSON.stringify(ob3);

// let jsonText = {"name":"Tahany","age":21,"isStudent":true};
// let user = JSON.stringify(jsonText);
// console.log(jsonText);
// console.log(typeof jsonText);//object
// console.log(user);


// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log("timeout");
// },0);
// console.log(3);


// setTimeout(()=>{
//     console.log("timeout");
// },0);

// function one(){
//     console.log("one");
// }

// setTimeout(()=>{
//     console.log("timeout two");
// },0);

// function two (){
//     one();
//     console.log("two");
// }

// function three(){
//     two();
//     console.log("three");
// }

// three();


// setTimeout(()=>{
// 	console.log("result 1");
// 	setTimeout(()=>{
// 		console.log("result two");
// 		setTimeout(()=>{
// 			console.log("Result three");
// 			setTimeout(()=>{
// 				console.log("Result four");
// 			},1000)
// 		},1000)
// 	},1000)
// },1000);

// function delayLog(message,time){
//     let p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(message);
//             res();
//         },time);
//     })
//     return p;
// }
// // console.log(delayLog());
// delayLog("result one",1000)
// .then(()=>delayLog("result 2",1000))
// .then(()=>delayLog("result 3",1000))
// .then(()=>delayLog("result 4",1000));



// let pro=new Promise((res,rej))

// let p = new Promise((resolve, reject) => {
//   resolve(5);
// });
// console.log(p);
// p.then(result=>{
//     console.log(result);
// })


// p.then(result => {
//   console.log(result);
// });




// async function getData(){
//     let user=[];
//         if(user.length>0){
//           return "usser found";
//         }else{
//            throw "user not found";
//         }
// }

// getData().then(
//     (resolveValue)=> console.log(resolveValue),
//     (rejectValue)=> console.log("message"+rejectValue)
// );

// function wait(){
//     setTimeout(()=>{
//         console.log("Done Waiting");
//     },2000);
// }

function wait(){
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("waiting");
            res("finished");
        })
    },1000); 
}
async function test() {
    console.log("Start");
    let result= await wait();
    console.log(result);
    console.log("end");

}

test();


