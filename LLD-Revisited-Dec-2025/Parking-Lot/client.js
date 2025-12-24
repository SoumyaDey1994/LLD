// Example Usage:
import { Bike, Car, Truck } from './vehicle.js';
import { ParkingSpot } from "./parkingSpot.js";
import { ParkingLot } from './parkingLot.js';
import { Payment } from "./payment.js";
import { PARKING_RATES_HOURLY, VEHICLE_TYPE, PARKING_SPOT_SIZE, PREFERRED_VEHICLE_SPOT } from "./constants.js";

// Create a parking lot
const parkingLot = new ParkingLot();

// Add parking spots to the parking lot
parkingLot.addParkingSpot(new ParkingSpot(1, PARKING_SPOT_SIZE.SMALL));
parkingLot.addParkingSpot(new ParkingSpot(2, PARKING_SPOT_SIZE.MEDIUM));
parkingLot.addParkingSpot(new ParkingSpot(3, PARKING_SPOT_SIZE.MEDIUM));
parkingLot.addParkingSpot(new ParkingSpot(4, PARKING_SPOT_SIZE.LARGE));
parkingLot.addParkingSpot(new ParkingSpot(5, PARKING_SPOT_SIZE.LARGE));

// Create some vehicles
const motorcycle = new Bike('M123');
const car = new Car('C456');
const truck = new Truck('T789');
const motorcycle2 = new Bike('M124');

// Park vehicles
parkingLot.parkVehicle(motorcycle);  // Should park in the small spot
parkingLot.parkVehicle(car);         // Should park in a medium spot
parkingLot.parkVehicle(truck);       // Should park in a large spot
parkingLot.parkVehicle(motorcycle2);  // Should park in the small spot

// Display parking lot status
parkingLot.displayParkingStatus();

const hourlyRates = PARKING_RATES_HOURLY;

const payment = Payment.getInstance(hourlyRates);

console.log("\nRemoving vehicle from spot");
// Remove a vehicle by license plate
setTimeout(() => {
    const targetVehicle = parkingLot.getVehicleByNo('C456');
    const parkingDuration = parkingLot.removeVehicle('C456');  // Removes the car
    const billAmount = payment.getTotalPayable(parkingDuration, targetVehicle);
    console.log(`Amount payable by vehicle C456 is: INR ${billAmount}`);
    // Display parking lot status again
    parkingLot.displayParkingStatus();
}, 10000);

