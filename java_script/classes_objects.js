const student = {
    name : "Avik",
    roll : "024",
    marks : 86,
    printMarks : function() {
        console.log(this.marks);  // When we use 'this' keyword in an object then that means this is that object... here(this.marks) means (student.marks)
        
    }, 
}
// jokhon ackta object er vitore ar ackta by defult object create hoi then that is /prototypes

let marks = (a,b)=>{
    
    console.log("hello",a+b);
    
}
marks(10,12);

const employee = {
    calTax(){
        console.log("Tax rate is 10%");
        
    }
};
const karan = {
    salary : 5000,
    calTax(){
        console.log("Tax rate is 30%");
        
    }
};
karan.__proto__=employee;



/*                           Class                                   */

class car {
    constructor(brand){
        console.log("This is new constructor");
        this.brand=brand;
        
    }
    start () {
        console.log("start");
    
    }
    stop(){
        // let a = 10;
        // let b = 20;
        console.log("Stop");     
    }
   
}
let myCar=new car("toyota");
let yourCar=new car();
// myCar.setBrand("fortuner");
// myCar.start();
// myCar.stop();