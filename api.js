const express = require('express');
const moodController = require('../controllers/moodController');
const router = express.Router();

// add/update mood route handler
router.post('/mood', moodController.addMood, (req, res) => {
  return res.status(200).json(res.locals.newMood);
});

// get moods routes handler
router.get('/', moodController.getMood, (req, res) => {
  return res.status(200).json(res.locals.getMoods);
});

// delete mood routes handler
router.delete('/:date', moodController.deleteMood, (req, res) => {
  return res.status(200).json(res.locals.deletedMood);
});

module.exports = router;
