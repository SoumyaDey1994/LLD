// Booking class to represent a booking
class Booking {
  constructor(guest, room, checkInDate, checkOutDate) {
    this.guest = guest;
    this.room = room;
    this.checkInDate = new Date(checkInDate);
    this.checkOutDate = new Date(checkOutDate);
    this.bookingID = `BOOK-${Math.floor(Math.random() * 10000)}`;
  }

  // Method to calculate stay duration in days
  calculateStayDuration() {
    const diffTime = Math.abs(this.checkOutDate - this.checkInDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days
  }

  getBookingDetails() {
    const nights = this.calculateStayDuration();
    const totalAmount = nights * this.room.price;

    return {
      bookingID: this.bookingID,
      guest: this.guest.name,
      roomNumber: this.room.roomNumber,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      pricePerNight: this.room.price,
      totalNights: nights,
      totalAmount: totalAmount, // Include total amount here
    };
  }
}

module.exports = Booking;
