const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res) => {
  try {
    const filter = req.query.search
      ? { active: true, $or: [
          { name: { $regex: req.query.search, $options: 'i' } },
          { location: { $regex: req.query.search, $options: 'i' } },
          { cuisine: { $regex: req.query.search, $options: 'i' } }
        ] }
      : { active: true };
    const restaurants = await Restaurant.find(filter).sort({ createdAt: -1 });
    res.json(restaurants);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.json(restaurant);
  } catch (error) { res.status(400).json({ message: 'Invalid restaurant id' }); }
};

const createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.json(restaurant);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
    if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.json({ message: 'Restaurant deactivated', restaurant });
  } catch (error) { res.status(400).json({ message: 'Invalid restaurant id' }); }
};

module.exports = { getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant };
