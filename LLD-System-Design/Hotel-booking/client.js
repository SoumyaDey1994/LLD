const Hotel = require("./hotel");
const Room = require("./room");
const Guest = require("./guest");

// Example Usage:

// 1. Create a hotel and add rooms
const myHotel = new Hotel("The Grand Hotel");
myHotel.addRoom(new Room(101, "Single", 100));
myHotel.addRoom(new Room(102, "Double", 150));
myHotel.addRoom(new Room(201, "Suite", 300));

// 2. Create a guest
const guest = new Guest("Alice Johnson", "alice@example.com");

// 3. Make a booking for the guest
const bookingDetails = myHotel.makeBooking(guest, "Double", "2024-12-01", "2024-12-05");
console.log(bookingDetails);

// 4. View all bookings
console.log("All Bookings:");
console.log(myHotel.viewBookings());