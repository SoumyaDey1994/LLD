// Example Usage:
import { Bike, Car, Truck } from "./Vehicle.js";
import { ParkingSpot } from "./ParkingSpot.js";
import { ParkingLot } from "./ParkingLot.js";
import { Payment } from "./Payment.js";
import {
  VehicleType,
  ParkingRatesByMinutes,
  ParkingSpotSize,
  PrefferedSpotsAgainstVehicleType,
} from "./constant.js";

// Create a parking lot
const parkingLot = new ParkingLot();

// Add parking spots to the parking lot
parkingLot.addParkingSpot(new ParkingSpot(1, ParkingSpotSize.Small));
parkingLot.addParkingSpot(new ParkingSpot(2, ParkingSpotSize.Medium));
parkingLot.addParkingSpot(new ParkingSpot(3, ParkingSpotSize.Medium));
parkingLot.addParkingSpot(new ParkingSpot(4, ParkingSpotSize.Large));
parkingLot.addParkingSpot(new ParkingSpot(5, ParkingSpotSize.Large));

// Create some vehicles
const motorcycle = new Bike("M123");
const car = new Car("C456");
const truck = new Truck("T789");
const motorcycle2 = new Bike("M124");

// Park vehicles
parkingLot.parkVehicle(motorcycle); // Should park in the small spot
parkingLot.parkVehicle(car); // Should park in a medium spot
parkingLot.parkVehicle(truck); // Should park in a large spot
parkingLot.parkVehicle(motorcycle2); // Should park in the small spot

// Display parking lot status
parkingLot.displayParkingStatus();

const minuteRates = ParkingRatesByMinutes;

const payment = Payment.getInstance();

// Remove a vehicle by license plate
setTimeout(() => {
  console.log("\nRemoving vehicle C456");
  const targetVehicle = parkingLot.getVehicleByNo("C456");
  const parkingDuration = parkingLot.unParkVehicle("C456"); // Removes the car
  const billAmount = payment.getTotalPayable(
    targetVehicle.type,
    parkingDuration,
    minuteRates,
  );
  console.log(`Amount payable by vehicle C456 is: INR ${billAmount}`);
  // Display parking lot status again
  console.log("\n");
  parkingLot.displayParkingStatus();
}, 10000);

setTimeout(() => {
  console.log("\nRemoving vehicle T789");
  const targetVehicle = parkingLot.getVehicleByNo("T789");
  const parkingDuration = parkingLot.unParkVehicle("T789"); // Removes the car
  const billAmount = payment.getTotalPayable(
    targetVehicle.type,
    parkingDuration,
    minuteRates,
  );
  console.log(`Amount payable by vehicle T789 is: INR ${billAmount}`);
  // Display parking lot status again
  console.log("\n");
  parkingLot.displayParkingStatus();
}, 15000);
