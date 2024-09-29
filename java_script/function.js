// function Student(name) {
//     console.log("Heyy "+name+" you are looking good..");
//     console.log("Heyy "+name+" your course is good..");
//     console.log("Heyy "+name+" your t-shirt good..");
//     console.log("Heyy "+name+" your shoes is good..");

// }
// Student("Diya");
// console.log();

// Student("Avik");
// console.log();

// Student("Suman");



// function sum(a,b) {
//     console.log(a+b);

//     console.log(a,b);

// }
// sum(5);
// // sum(10000,99999)

// const avik=(a)=> { //Const is mandatory for Arrow Function
//     console.log("Hey i' m arrow function",a);

// }
// avik(12);
// function name(a,b) {
// console.log("Hello world");
//     console.log(a*b);
//     return;

// }
// name(2,6);
// name(5,7);
// name(9,0)

//                              // Arrow function

// const arrow = (a,b)=>{
//     console.log(a+b);

//     return ;    
// }
// arrow(5,3);


//                          // Find the vowel of a string on a Function
/*function findVowel(str) {
    let num = 0;
    for (const element of str) {
        if (element === "A" || element === "a" || element === "E" || element === "e" || element === "I" || element === "i" || element === "O" || element === "o" || element === "U" || element === "u") {
            num++;
        }
           }
           console.log(num);
}
findVowel("AnpaCollege")*/
const findVowel=(str) =>{
    let num = 0;
    for (const element of str) {
        if (element === "A" || element === "a" || element === "E" || element === "e" || element === "I" || element === "i" || element === "O" || element === "o" || element === "U" || element === "u") {
            num++;
        }
           }
           console.log(`The number of vowel is :${num}`);
}
findVowel("ApnaCollege");


let arr = [1,2,3,4,5];

//                        //for each loop
// arr.forEach((num) => {
//     console.log(num*2);
    
// });
//                                         Map function
arr.map((val)=>{
    console.log(val);
    
})





