import { Hotel } from "./hotel.js";
import { Room } from "./room.js";
import { Guest } from "./guest.js";
import { ROOM_TYPE, ROOM_PRICE_PER_NIGHT } from "./constants.js";

// Example Usage:

// 1. Create a hotel and add rooms
const myHotel = new Hotel("The Grand Hotel");
myHotel.addRoom(
  new Room(101, ROOM_TYPE.SINGLE, ROOM_PRICE_PER_NIGHT[ROOM_TYPE.SINGLE])
);
myHotel.addRoom(
  new Room(102, ROOM_TYPE.DUPLEX, ROOM_PRICE_PER_NIGHT[ROOM_TYPE.DUPLEX])
);
myHotel.addRoom(
  new Room(201, ROOM_TYPE.SUITE, ROOM_PRICE_PER_NIGHT[ROOM_TYPE.SUITE])
);

// 2. Create a guest
const guest1 = new Guest("Alice Johnson", "alice@example.com");
const guest2 = new Guest("Soumya Dey", "soumya.dey@gmail.com");
const guest3 = new Guest("Jenifer", "jenifer@gmail.com");

// 3. Make a booking for the guest
const aliceBookingDetails = myHotel.book(
  guest1,
  ROOM_TYPE.DUPLEX,
  "2025-12-01",
  "2025-12-05"
);
console.log(aliceBookingDetails);

const soumyaBookingDetails = myHotel.book(
  guest2,
  ROOM_TYPE.SINGLE,
  "2025-12-25",
  "2025-12-28"
);
console.log(soumyaBookingDetails);

// 4. View all bookings
console.log("All Bookings:");
myHotel.displayBookings();

let jeniferBookingDetails = myHotel.book(
  guest3,
  ROOM_TYPE.SINGLE,
  "2025-12-27",
  "2025-12-29"
);
console.log(jeniferBookingDetails);

// 5. Cancel an existing booking

myHotel.cancelBooking(soumyaBookingDetails.bookingId);
jeniferBookingDetails = myHotel.book(
  guest3,
  ROOM_TYPE.SINGLE,
  "2025-12-27",
  "2025-12-29"
);
console.log(jeniferBookingDetails);

// 6. View all bookings
console.log("All Bookings:");
myHotel.displayBookings();
