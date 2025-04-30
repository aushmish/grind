const fs=require('fs');
console.log('------Top of the file------');


function readTheFile(resolve){
    console.log("Read the file called!");
    setTimeout(()=>{
        console.log("Callback base timeout completed");
        resolve();
    },4000);
}


function setTimeOutPromisified(){
    console.log("setTimeOutPromisified called");
    return new Promise(readTheFile);
}


const p=setTimeOutPromisified();

function callback(){
    console.log("Timer is Done");
}

p.then(callback);

console.log("------End of the File------");