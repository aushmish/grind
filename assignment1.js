// 1. Create a counter in JavaScript (Counts from 30 to 0)
// 2. Calculate the time it takes between a setTimeout call and inner function actually running 
// 3.Create a terminal clock(HH:MM:SS)
// anagram.js
// expenditure-analysis
// calculator.js
// to-do list
// count-vowels
// palindromes


function print(){
    const num=30;
    for(i=num;i>=1;i--){
        console.log(i);
    }
}

setInterval(print,1000);


// let count = 30; // Start from 30

// function countdown() {
//     console.log(count);
//     count--;

//     if (count < 0) {
//         clearInterval(interval); // Stop once it reaches 0
//     }
// }

// let interval = setInterval(countdown, 1000); // Run every second



