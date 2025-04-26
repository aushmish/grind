const fs=require('fs');

function writing(resolve){
    fs.writeFile("b.txt","Now the file has been updated",'utf-8',(err)=>{
        if(err){
            console.log("error has been found!");
        }

        else{
            resolve();
            console.log("Done bro updated!!");
        }
    })
}

const p=new Promise(writing);

function show(){
    console.log("Whatever :)");
}

p.then(show);