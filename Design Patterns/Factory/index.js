/**
 * The Factory Design Pattern is a creational pattern that
 * provides an interface for creating objects without specifying the exact class of object that will be created.
 */
class Vehicle {
    constructor() {
        if (this.constructor === Vehicle) {
            throw new Error("Abstract class 'Vehicle' cannot be instantiated directly.");
        }
    }

    drive() {
        throw new Error("This method has to be implemented by subclass")
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super();
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`Drive Car: ${this.brand}-${this.model}`);
    }


}

class Truck extends Vehicle {
    constructor(brand, model) {
        super();
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`Drive Truck: ${this.brand}-${this.model}`);
    }
}

class VehicleFactory {
    static create(type, brand, model) {
        switch (type.toLowerCase()) {
            case 'car':
                return new Car(brand, model);
            case 'truck':
                return new Truck(brand, model);
            default:
                throw new Error("Unsupported vehicle type: "+type);
        }
    }
}

const car = VehicleFactory.create('car', 'Tyota', 'M1');
const truck = VehicleFactory.create('truck', 'Ford', 'T1');

car.drive();
truck.drive();
