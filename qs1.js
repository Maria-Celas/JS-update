// ***********************************************************
// How to define a class with properties and methods in JS?

class Car {
    constructor(model, name) {
      this.model = model;
      this.name = name;
    }
    start() {
      console.log(`Name of the car: ${this.name}`);
    }
  }

  bmw = new Car(340, "Sports Edition");
  bmw.start();

// ***********************************************************
// How to implement class inheritance in JS?

class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    display_value(){
        console.log(this.length);
        console.log(this.breadth);
    }
}

class Area extends Rectangle{
    dashboard(){
        console.log("Child Class")
    }
    calc_area(){
        super.display_value();
        
    }
}
ar = new Area('10', '20');
ar.display_value();

// ***********************************************************
// How to find duplicate elements in a given array?
// use array filter method

 