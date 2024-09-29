// let heading = document.getElementById("heading");
// console.dir(heading)

// let firstel = document.querySelector(".heading");
// console.dir(firstel)

// let allEl =document.querySelectorAll(".heading")
// console.dir(allEl)
// let div = document.querySelector("h2");
// console.dir(div); 
// div.innerText = div.innerText + " from Apna College students"


// let divs = document.querySelectorAll(".box");
// console.dir(divs);
// let index = 1;
// for (let div of divs) {
//     console.dir(div.innerText=(`This is unique value ${index}`));
//     index++;
// }
// divs[0].innerText = "This is avik";
// divs[1].innerText = "This is suman";
// divs[2].innerText = "This is sourav";

// let div = document.querySelector("p");
// let value = div.getAttribute("class");
// console.log(value);

/*For changing the attribute name */

// let div = document.querySelector("p");
// let value = div.setAttribute("class","paragraph");
// console.log(value);
/*           This is for changing the style using JS                */
// let div = document.querySelector("div");
// console.log(div);

// let change = div.style.backgroundColor="red";
// console.log(div.style.fontSize="25px");

/*                  For add new element in html using JS                     */

let div = document.querySelector("div");
console.log(div);

let newBtn = document.createElement("button");
newBtn.innerText = " click me ";

/*                use for add at the end of the node                   */
div.append(newBtn);

/*                use for add at the start of the node                   */
div.prepend(newBtn);

/*                use for add at the before of the node                   */
div.before(newBtn);

/*                use for add at the after of the node                   */
div.after(newBtn);
(newBtn.style.backgroundColor="yellow");
newBtn.style.padding="4px";
newBtn.style.borderRadius="5px";
newBtn.style.border="1px solid black";
newBtn.style.margin=" 15px 0px";


let newHeading = document.createElement("h3");
newHeading.innerText="Welcome to Apna College";
// document.querySelector("div").before(newHeading)       /* Short cut */


div.before(newHeading);


/*                use for remove any element of the node                   */
// let remove = document.querySelector("p");
// remove.remove();

/*                If we want change the bckground color                  */
let changeColor =document.querySelector("div");
changeColor.style.backgroundColor="lightGreen"


let newButton = document.createElement("button");
newButton.innerText="Submit";
newButton.style.backgroundColor=("red");
newButton.style.color=("white");
document.querySelector("div").prepend(newButton);


/*                Add a new class using classList in CSS                */

let newclass = document.querySelector("p");
// console.log(newclass.getAttribute("class")); 
console.log(newclass.classList.add("newPara"));

