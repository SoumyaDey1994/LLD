// Example Usage:
const { Motorcycle, Car, Truck, VehicleType } = require("./vehicle");
const { SpotSize, ParkingSpot } = require("./parkingSpot");
const ParkingLot = require('./parkingLot');
const Payment = require("./payment");

// Create a parking lot
const parkingLot = new ParkingLot();

// Add parking spots to the parking lot
parkingLot.addParkingSpot(new ParkingSpot(1, SpotSize.SMALL));
parkingLot.addParkingSpot(new ParkingSpot(2, SpotSize.MEDIUM));
parkingLot.addParkingSpot(new ParkingSpot(3, SpotSize.MEDIUM));
parkingLot.addParkingSpot(new ParkingSpot(4, SpotSize.LARGE));
parkingLot.addParkingSpot(new ParkingSpot(5, SpotSize.LARGE));

// Create some vehicles
const motorcycle = new Motorcycle('M123');
const car = new Car('C456');
const truck = new Truck('T789');
const motorcycle2 = new Motorcycle('M124');

// Park vehicles
parkingLot.parkVehicle(motorcycle);  // Should park in the small spot
parkingLot.parkVehicle(car);         // Should park in a medium spot
parkingLot.parkVehicle(truck);       // Should park in a large spot
parkingLot.parkVehicle(motorcycle2);  // Should park in the small spot

// Display parking lot status
parkingLot.displayStatus();

const hourlyRates = {
    [VehicleType.MOTORCYCLE]: 200,
    [VehicleType.CAR]: 500,
    [VehicleType.TRUCK]: 1000,
  };

const payment = Payment.getInstance(hourlyRates);

console.log("\nRemoving vehicle from spot");
// Remove a vehicle by license plate
setTimeout(() => {
    const targetVehicle = parkingLot.getByVehicleNumber('C456');
    const parkingDuration = parkingLot.removeVehicleByVehicleNumber('C456');  // Removes the car
    const billAmount = payment.calculatePaymentAmount(targetVehicle, parkingDuration);
    console.log(`Amount payable by vehicle C456 is: INR ${billAmount}`);
    // Display parking lot status again
    parkingLot.displayStatus();
}, 10000);

