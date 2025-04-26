// setTimmeout(()=>{
//     console.log("Hi");
//     setTimeout(()=>{
//         console,log("Hey");
//         setTimeout(()=>{
//             console.log("Hey There")
//         },5000);
//     },3000);
// },1000)

function setTimeOutPromisified(ms){
    return new Promise(resolve=>(setTimeout(resolve,ms)));
}
setTimeOutPromisified(1000).then(()=>{
    console.log("Hey");
    setTimeOutPromisified(3000).then(()=>{
        console.log("Hello");
        setTimeOutPromisified(5000).then(()=>{
            console.log("Hola Amigos");
        })
    })
})