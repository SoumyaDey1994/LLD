class Car {
    constructor() {
        this.model = '';
        this.engine = '';
        this.seatCount = 0;
        this.transmission = '';
        this.isGpsEnabled = false;
    }

    showDetails() {
        console.log(`Car Details:
            Model: ${this.model}
            Engine: ${this.engine}
            Seats: ${this.seatCount}
            Transmission: ${this.transmission}
            GPS: ${this.isGpsEnabled ? 'Yes' : 'No'}
        `);
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setModel(model) {
        this.car.model = model;
    }

    setEngine(engine) {
        this.car.engine = engine;
    }

    setTransmission(transmission) {
        this.car.transmission = transmission;
    }

    setSeats(count) {
        this.car.seatCount = count;
    }

    setIsGpsEnabled(isGpsEnabled) {
        this.car.isGpsEnabled = isGpsEnabled;
    }

    build() {
        return this.car;
    }
}
/**
 * Cleint Code
 */
const carBuilder = new CarBuilder();

carBuilder.setModel('M1');
carBuilder.setEngine('V8');
carBuilder.setSeats(8);
carBuilder.setTransmission('Automatic');
carBuilder.setIsGpsEnabled(true);

const car = carBuilder.build();
car.showDetails();

const carBuilder2 = new CarBuilder();

carBuilder2.setModel('M2');
carBuilder2.setEngine('V5');
carBuilder2.setSeats(4);
carBuilder2.setTransmission('Manual');
carBuilder2.setIsGpsEnabled(false);

const car2 = carBuilder2.build();
car2.showDetails();
