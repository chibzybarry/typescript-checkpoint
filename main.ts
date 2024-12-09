
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}


// Implement the Car class that adheres to the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize the make, model, and year
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implement the start method
    start(): void {
      console.log("Car engine started");
    }
}

const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
myCar.start();