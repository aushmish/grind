// const fs = require('fs');

// function readTheFile(sendTheFinalValue){
//     fs.readFile('example.txt','utf-8',(err,data)=>{
//         sendTheFinalValue(data);
//     })
// }

// function readBro(){
//     return new Promise(readTheFile);
// }

// let p= readBro();


// function callBack(content){
//     console.log(content);
// }

// p.then(callBack);


// function doAsyncOp(resolve){
//     setTimeout(resolve,3000);
// }

// const p=new Promise(doAsyncOp);

// function callback(){
//     console.log("The promise has been resolved Successfully...");
// }
// p.then(callback);




function setTimeoutPromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time);
    })
}

function callBack(){
    console.log("Time has passed....");
}

setTimeoutPromisified(4000).then(callBack);