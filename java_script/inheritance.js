class parent {
    constructor(){
        console.log("enter parent constructor");
        
        this.ram = ("Ram is a boy");
        
    }
    // hello() {
    //     for (let i = 1; i <= 10; i++) {
    //         console.log(i);

    //     }
    // }
}
class child extends parent {
    constructor(stream){
        console.log("Enter child constructor");
        
        super();  // It invoked the parent class constructor ..
        this.stream = stream;
    }
    printMe() {
        console.log("Heyyy,this is Avik");

    }
}
let childobj = new child("BCA");

// obj.hello();