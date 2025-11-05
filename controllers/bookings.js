const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Listing = require("../models/Listing");
const { verifyToken } = require("../middleware/auth");
router.get('/listing/:listingId/bookedDates', async (req, res)=> {
try {
const bookings = await Booking.find({listingId: req.params.listingId});
const bookedDates = bookings.map((b) => ({
    start:b.startDate,
    end: b.endDate, 
    
}));
res.json(bookedDates)
}
catch (err) {
    res.status(500).json({message: err.message})
}
})