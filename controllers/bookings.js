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
router.post("/", async (req,res) => {
try{
const {listingId, startDate, endDate} = req.body;
if (!listingId || !startDate || !endDate){
    return res.status(400).json({message: "Missing booking info"})
}
const listing = await Listing.findById(listingId);
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    const overlap = await Booking.findOne({
        listingId,
        $or: [
            {startDate: {$lte:endDate, $gte:startDate}},
            {endDate: {$lte:startDate, $gte:endDate}},
            {startDate: {$lte:startDate}, endDate:{$gte: endDate}},
        ]
    });
    if (overlap) return res.status(400).json({message: "This date range is already booked"})
  
}
 
catch (err) {
    res.status(500).json({message: err.message})
}
})
module.exports = router;