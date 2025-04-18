/**
 * The Abstract Factory Pattern provides an interface for 
 * creating families of related or dependent objects without specifying their concrete classes.
 */

class Vehicle {
    constructor() {
        if(this.constructor === Vehicle) {
            throw new Error("This is an abtract Vehicle class, needs to be extended by subclass");
        }
    }

    getType() {
        throw new Error("Abstract method 'getType' must be implemented in subclass");
    }
}

class PatrolCar extends Vehicle {
    constructor(brand, model) {
        super();
        this.brand = brand;
        this.model = model;
    }

    getType() {
        console.log(`This is a patrol car of ${this.brand} - ${this.model}`);
    }
}

class EletricCar extends Vehicle {
    constructor(brand, model) {
        super();
        this.brand = brand;
        this.model = model;
    }

    getType() {
        console.log(`This is an electric car of ${this.brand} - ${this.model}`);
    }
}

class PatrolTruck extends Vehicle {
    constructor(brand, model) {
        super();
        this.brand = brand;
        this.model = model;
    }

    getType() {
        console.log(`This is a patrol truck of ${this.brand} - ${this.model}`);
    }
}

class ElectricTruck extends Vehicle {
    constructor(brand, model) {
        super();
        this.brand = brand;
        this.model = model;
    }

    getType() {
        console.log(`This is an electric truck of ${this.brand} - ${this.model}`);
    }
}

class VehicleFactory {
    constructor() {
        if(this.constructor === VehicleFactory) {
            throw new Error("This is an abtract VehicleFactory class, needs to be extended by subclass");
        }
    }

    create() {
        throw new Error("Abstract method 'create' must be implemented in subclass");
    }
}

class PatrolCarFactory extends VehicleFactory {
    constructor() {
        super();
    }

    create(brand, model) {
        return new PatrolCar(brand, model);
    }
}

class PatrolTruckFactory extends VehicleFactory {
    constructor() {
        super();
    }

    create(brand, model) {
        return new PatrolTruck(brand, model);
    }
}

class ElectricCarFactory extends VehicleFactory {
    constructor() {
        super();
    }

    create(brand, model) {
        return new EletricCar(brand, model);
    }
}

class ElectricTruckFactory extends VehicleFactory {
    constructor() {
        super();
    }

    create(brand, model) {
        return new ElectricTruck(brand, model);
    }
}

class FactoryProvider {

    static getPtrolCarFactory() {
        return new PatrolCarFactory();
    }

    static getElectricCarFactory() {
        return new ElectricCarFactory();
    }

    static getPtrolTruckFactory() {
        return new PatrolTruckFactory();
    }

    static getElectricTruckFactory() {
        return new ElectricTruckFactory();
    }
}

/**
 * Cleint code
 */
const patrolCarFactory = FactoryProvider.getPtrolCarFactory();
const pCar = patrolCarFactory.create('Tyota', 'PC1');
pCar.getType();
const electricCarFactory = FactoryProvider.getElectricCarFactory();
const eCar = electricCarFactory.create('Tyota', 'EC1');
eCar.getType();

const patrolTruckFactory = FactoryProvider.getPtrolTruckFactory();
const pTruck = patrolTruckFactory.create('Ford', 'PT1');
pTruck.getType();
const electricTruckFactory = FactoryProvider.getElectricTruckFactory();
const eTruck = electricTruckFactory.create('Tyota', 'ET1');
eTruck.getType();