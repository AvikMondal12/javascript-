// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log("btn1 was clicked");
//     // let a=23;
//     // a++;
//     // console.log(a);
//     console.log(e);
// }

/*                          Event listniear                          */
// btn1.addEventListener("click",()=>{
//     console.log("hello world");
    
// });
// const handler =()=>{
//     console.log("Heyy , this is Avik");
    
// };
// btn1.addEventListener("click",handler);             // This is for add any event .
// btn1.removeEventListener("click",handler);          // This is for remove any event. 
// btn1.addEventListener("click",()=>{
//     let a =10;
//     for (let i = 1; i <= a; i++) {
//         console.log(i);
        
        
//     }
    
// })
// let btn2= document.querySelector("#btn2");
// btn2.ondblclick = (e) => {
//     console.log("btn2 was clicked");
//     // let a=23;
//     // a++;
//     // console.log(a);
//     console.log(e);
    
    
// }
// let btn3 = document.querySelector("#btn3");
// btn3.onmouseover = (e) => {
//     console.log("btn3 was clicked");
//     // let a=23;
//     // a++;
//     // console.log(a);
//     console.log(e);
    
    
// }


let  mode = document.querySelector("#btn1");
let body = document.querySelector("body")
let currMode="light";

mode.addEventListener("click", ()=>{
    if (currMode==="light"){
        currMode="dark";
        // let dark = document.querySelector("body")
        // dark.style.backgroundColor="black";
        body.classList.add("dark");                 //add using class
        body.classList.remove("light");
    } else{
        currMode="light";
        body.classList.add("light");
        // light.style.backgroundColor="white";
        body.classList.remove("dark");
    }
    console.log(currMode);
    
});