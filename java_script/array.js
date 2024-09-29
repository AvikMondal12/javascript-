let arr = [2, 3, 45, 6, 8, 4];
console.log(arr);
console.log(arr[2]); // use to print any value of specific index
arr[2] = 24; // it's use to repalce element in specific index
console.log(arr);

let namee = ["Avik", "suman", "kuntal", "Manish", "Ayan"];
console.log(namee);
for (let i = 0; i < namee.length; i++) {
    const element = namee[i];
    console.log(element);

}
for (let element of namee) {
    console.log(element);

}

// Question 1 :-
// For given array with marks of studdent -> [85,97,44,37,76,60] Find the avarage marks of the entire class

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (const element of marks) {
    sum = sum + element;


}
// let marks =[85,97,44,37,76,60];
// let sum=0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];

}
console.log(`${(sum) / marks.length}`);

let item = [300, 400, 909, 890];


for (const element of item) {
    let num = element / 10;
    num = element - num;
    console.log(num);
}


let fruitItem = ["Mango", "Watermelon", "Litchi", "Jackfruits"];

fruitItem.push("orange"); // push method 
fruitItem.pop();   // pop method 


for (const element of fruitItem) {
    console.log(element);

}
let name = ["Avik", "Suman", "Manish"];
let name2 = ["Rinki", "Kuntal"];
name2.unshift("avik"); // unshift method
console.log(name2);
let val = name2.shift(); // shift method 
console.log(name2);
console.log(name.slice(1, 3));  // slice method

name2 = (name2.splice(1, 0, "jinat", "nasrine"));
console.log(name2);

let num9 = [1, 2, 3, 4, 5];
num9.splice(2, 0, 12); // slice method
console.log(num9);




let newName = name.concat(name2);
for (const element of newName) {
    console.log(element);

}





//                                         Map Method
let arrrr =[1,2,3,4,5,6,7,8,9]
console.log("Print the array using Map Method :");

arrrr.map((val)=>{
    console.log(`${val}`);
    
})
let newArr=arrrr.map((val)=>{
    return val;
    
})
console.log(`The same array using map method ${newArr}`);


//                                         Filter Method

let newArray = [34,55,64,34,87,23]
console.log("Print the even number of the array using Filter Method :");

let evenArray=newArray.filter((val)=>{
    return val%2===0;
})
console.log(evenArray);


//                                         Reduce Method

let newwArray=[2,5,4,3,7];

const output=newwArray.reduce((prv , cur)=>{
    return prv>cur ? prv:cur;
})
console.log(output);


//          Question 1 :

let markss = [88,54,99,90,76,91];
const outtput=markss.filter((value)=>{
    return value >=90 ;
})
console.log(outtput);
