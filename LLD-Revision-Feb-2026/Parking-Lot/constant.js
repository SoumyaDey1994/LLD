export const VehicleType = {
  Bike: "bike",
  Car: "car",
  Truck: "truck",
};

export const ParkingSpotSize = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};

export const PrefferedSpotsAgainstVehicleType = {
  [VehicleType.Bike]: [
    ParkingSpotSize.Small,
    ParkingSpotSize.Medium,
    ParkingSpotSize.Large,
  ],
  [VehicleType.Car]: [ParkingSpotSize.Medium, ParkingSpotSize.Large],
  [VehicleType.Truck]: [ParkingSpotSize.Large],
};

export const ParkingRatesByMinutes = {
    [VehicleType.Bike]: 10,
    [VehicleType.Car]: 50,
    [VehicleType.Truck]: 100
}

export function isSpotCompatibe(vehicleType, spotSize) {
  const targetSpots = PrefferedSpotsAgainstVehicleType[vehicleType];
  return targetSpots && targetSpots.indexOf(spotSize) !== -1;
}
