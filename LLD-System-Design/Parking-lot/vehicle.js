/**
 * Type of Cars
 */
const VehicleType = {
    CAR: 'CAR',
    MOTORCYCLE: 'MOTORCYCLE',
    TRUCK: 'TRUCK'
}
/**
 * Class Vehicle
 * attributes:
 *      vNumber: Vehicle Number
 *      type: VehicleType
 *      entryTime: time
 * methods:
 *      setEntryTime
 *      calculateParkingDuration
 */
class Vehicle {
    constructor(vehicleNumber, type) {
        this.vehicleNumber = vehicleNumber;
        this.type = type;
        this.entryTime = null;
    }

    setEntryTime(time) {
        this.entryTime = time;
    }

    calculateParkingDuration(exitTime) {
        return exitTime - this.entryTime;
    }
}

class Car extends Vehicle {
    constructor(vehicleNumber) {
        super(vehicleNumber, VehicleType.CAR)
    }
}

class Motorcycle extends Vehicle {
    constructor(vehicleNumber) {
        super(vehicleNumber, VehicleType.MOTORCYCLE)
    }
}

class Truck extends Vehicle {
    constructor(vehicleNumber) {
        super(vehicleNumber, VehicleType.TRUCK)
    }
}

module.exports = {
    Car,
    Motorcycle,
    Truck,
    VehicleType
}