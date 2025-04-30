class Promise2{
    constructor(fn){
        this.fn=fn;
        this.fn(()=>{
            this.resolve();
        })
    }
    then(callback){
        this.resolve=callback;
    }
}

function doSomething(resolve){
    console.log("Ommo working")
    setTimeout(function(){
        console.log("doSomething has been called!");
        resolve();
    },4000);
}

function setTimeoutPromisified(){
    return new Promise2(doSomething);
}

let p=setTimeoutPromisified();

function callback(){
    console.log("Hello");
}

p.then(callback);
console.log("I will do it !")