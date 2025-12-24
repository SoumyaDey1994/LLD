export const VEHICLE_TYPE = {
  CAR: "car",
  BIKE: "bike",
  TRUCK: "truck",
};

export const PARKING_SPOT_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const PREFERRED_VEHICLE_SPOT = {
  [VEHICLE_TYPE.BIKE]: [
    PARKING_SPOT_SIZE.SMALL,
    PARKING_SPOT_SIZE.MEDIUM,
    PARKING_SPOT_SIZE.LARGE,
  ],
  [VEHICLE_TYPE.CAR]: [PARKING_SPOT_SIZE.MEDIUM, PARKING_SPOT_SIZE.LARGE],
  [VEHICLE_TYPE.TRUCK]: [PARKING_SPOT_SIZE.LARGE],
};

export const PARKING_RATES_HOURLY = {
  [VEHICLE_TYPE.BIKE]: 100,
  [VEHICLE_TYPE.CAR]: 200,
  [VEHICLE_TYPE.TRUCK]: 500,
};

export function isSpotCompatibe(vehicleType, spotSize) {
  const preferredSpots = PREFERRED_VEHICLE_SPOT[vehicleType];
  return preferredSpots && preferredSpots.indexOf(spotSize) > -1;
}
