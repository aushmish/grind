const fs=require('fs');

function reading(resolve){
    setTimeout(function(){
        fs.readFile('b.txt','utf-8',(err,data)=>{
            if(err){
                console.log("error occured!");
            }
            else{
                resolve();
                console.log(data);
            }
        })
    },4000);
}

let p=new Promise(reading);

function done(){
    console.log("contents read properly!");
} 


p.then(done);



