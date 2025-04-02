// js is an interpreted language:-
console.log("hello world");
// console.log(a)

// js is dynamic in nature (loosely typed )
// this is although not a good thing as your project will grow you will see a lot of run time errors
// js can move fast as there is no compilation errpr over here 
// but will give you runtime errors
// but in good projects it is better to have types that's why typescript came into picture
let number=6;
number='hello';
console.log(number)
// single threaded (means it uses only one core at a time)
// considered as bad language for scalable systems
// cluster module in js can help you in paralysing js 

// variables:-
// let var const
var a=1;
console.log(a);
a=2;
console.log(a);//value or variable
const b=10;
console.log(b);
// b=20
// console.log(b);


let firstName = "Anushka Mishra";
let age=20;
let isMarried=false;
console.log("The name of the Person is "+firstName+",and age of the person is "+age);

if(isMarried==true){
    console.log(firstName+"is Married...");
}
else{
    console.log(firstName+" is not Married...")
}


// loop:-
let ans=0;
let new_num=10;
for(i=1;i<=new_num;i++){
    ans+=i;
}
console.log(ans);


//arrays
const ages=[21,22,23,24,25,26];
for(i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]+" ");
    }
}

// greatest number in an array:-
const arr1=[67,90,45,78,100,34];
let max_num=Number.MIN_VALUE;
for(i=0;i<arr1.length;i++){
    if(arr1[i]>max_num){
        max_num=arr1[i];
    }
}
console.log(max_num+" is the maximum number present in this array...");


// another sort of practice lol
const personArray=["Anushka","Ayushi","Arpita","Abhiraj"];
const genderArray=["Feamle","Female","Female","Male"]

for(i=0;i<personArray.length;i++){
    if(genderArray[i]=='Male'){
        console.log(personArray[i]);
    }
}

// now instead of using 2 different arrays we can use objects:-

const allUsers=[
    {
        firstName:"Anushka",
        gender:"Female"
    },
    {
        firstName:"Shreya",
        gender:"Female"
    },
    {
        firstName:"Aryan",
        gender:"Male"
    },
    {
        firstName:"Arnab",
        gender:"Male"
    },
    {
        firstName:"Muskan",
        gender:"Female"
    }
];
for(i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=='Male'){
        console.log(allUsers[i]['firstName']);
    }
}


// functions:-

// function calSum(a,b){
//     return a+b;
// }

// console.log(calSum(2,3));

// allUsers["firstName"]
// allUsers.firstName
// don't do allUsers[firstName]  (error)

// function calllbacks:-


function sum(a,b,fntocall){
    let result=a+b;
    fntocall(result);
    
}

function displayResult(data){
    console.log("The answer is:"+data)
}

function displayPassiveResult(data){
    console.log(data);
}

let x=2;
let y=3;
sum(x,y,displayResult);



// callbacks:-
function calculatorArithimetic(a,b,arithmeticFinalFunction){
    const ans=arithmeticFinalFunction(a,b)
    return ans;
}
function newSum(a,b){
    return a+b;
}
const value = calculatorArithimetic(4,5,newSum);
console.log(value);

// timeout function:-

function greet(){
    console.log("Hello World");
}

setTimeout(greet,3*1000);//(will wait for 3 seconds )

// setInterval(greet,1*1000) (ye har 1 second ke interval pe greet karega)



