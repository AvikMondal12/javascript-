/*          This asynchronous programings            */
function hello() {
    console.log("hello world");

}
setTimeout(hello,2000);
/*          This asynchronous programing using arrow function*/

console.log("One");
console.log("Tow");


setTimeout(()=>{
    console.log("hello Avik");
},3000);

console.log("Three");
console.log("Four");


/*              Call Backs             */

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,callbacks){
    callbacks(a,b); // To passing the parameters into the previous parameters

}
calculator(1,2,sum);

/* CallBacks Hell for delay indivitual function */


function getData(dataId, getNextData) {
    setTimeout(() => {

        console.log("Data", dataId);
        if (getNextData) {
            getNextData();

        }

    }, 2000);
}       // Nested CallBacks 
getData(1, () => {
    getData(2, () => {      // This is for multiple callBacks
        getData(3, () => {
            getData(4);
        });
    });

});


/*          promise          */

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        // console.log(dataId);



        setTimeout(() => {
            resolve("Okay success");
            // console.log("Data", dataId);
            if (getNextData) {
                getNextData();

            }

        }, 5000);
    });
} 
getData(12)

/* .then and .reject function in promise function */

let getPromis = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promis");
        resolve("Success");
        // reject("Error by Avik");

    })
}
// This is use for resolved funtion only
let promise = getPromis();
promise.then((res) => {       
    console.log("promise worked",res);

})

// This is use for reject function
promise.catch((err) => {        
    console.log("Yes error", err);

})

/*              Promise Chaining           */
function asynFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("Success")
        }, 4000);
    })
}
function asynFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("Success")
        }, 4000);
    })
}
function asynFun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data3");
            resolve("Success")
        }, 4000);
    })
}

console.log("fetching data1");
asynFun1().then((res) => {
    console.log("fetching data2");
    asynFun2().then((res) => {
        console.log("fetching data3");
    asynFun3().then((res) => {});
    });
});


/* Example  */

function getData(dataId) {
    return new Promise((resolve,reject)=>{


    setTimeout(() => {

        console.log("Data", dataId);
        resolve("Success")

    }, 4000);
})
}       // Nested CallBacks 


getData(1).then((res)=>{
    console.log(res);
    getData(2).then(()=>{
        console.log(res);

    })
})
getData(1, () => {
    getData(2, () => {      // This is for multiple callBacks
        getData(3, () => {
            getData(4);
        });
    });

});


/*              Async await             */
function getData(dataId) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {

            console.log("Data", dataId);
            resolve("Success")

        }, 4000);
    })
}       // Nested CallBacks 


(async function getAllData() {
    console.log("Fetching data 1");
    await getData(1);
    console.log("Fetching data 2");
    await getData(2);
    console.log("Fetching data 3");
    await getData(3);
    console.log("Fetching data 4");
    await getData(4);
    console.log("Fetching data 5");
    await getData(5);
    console.log("Fetching data 6");
    await getData(6);
})();