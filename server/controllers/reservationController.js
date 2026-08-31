const Reservation = require('../models/Reservation');
const Restaurant = require('../models/Restaurant');

const createReservation = async (req, res) => {
  try {
    const { restaurant, date, time, guests, notes } = req.body;
    const exists = await Restaurant.findById(restaurant);
    if (!exists || !exists.active) return res.status(404).json({ message: 'Restaurant not found' });
    const reservation = await Reservation.create({ customer: req.user._id, restaurant, date, time, guests, notes });
    await reservation.populate('restaurant', 'name location cuisine');
    res.status(201).json(reservation);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const getMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ customer: req.user._id }).populate('restaurant').sort({ createdAt: -1 });
    res.json(reservations);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

const cancelReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findOne({ _id: req.params.id, customer: req.user._id });
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    reservation.status = 'cancelled';
    await reservation.save();
    res.json(reservation);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('customer', 'fullName email').populate('restaurant', 'name location').sort({ createdAt: -1 });
    res.json(reservations);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

const updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true });
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.json(reservation);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

module.exports = { createReservation, getMyReservations, cancelReservation, getAllReservations, updateReservation };
