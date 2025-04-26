// function waitFor3s(resolve){
//     setTimeout(resolve,10000);
// }
// function setTimeOutPromisified(){
//     return new Promise(waitFor3s);
// }

// function main(){
//     console.log("main is called");
// }

// setTimeOutPromisified().then(main);

function random(resolve){
    setTimeout(resolve(),3000);
}

let p=new Promise(random); 
// console.log(p);

function callback(){
    console.log("Promise Succesful");
}

p.then(callback);