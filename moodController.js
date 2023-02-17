const db = require('../models/moodModel.js');

const moodController = {};

moodController.addMood = (req, res, next) => {
  const { newDate, newMood } = req.body;
  // update mood if data already exists
  // else, insert date and mood from req.body into SQL database
  // INSERT INTO "WellnessTracker"."moodtracker" (date, mood) VALUES('2023-02-16', '4') ON CONFLICT (date) DO UPDATE SET mood = '4'
  const sqlQuery =
    'INSERT INTO "WellnessTracker"."moodtracker" (date, mood) VALUES($1, $2) ON CONFLICT (date) DO UPDATE SET mood = $2';
  const values = [newDate, newMood];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.newMood = data;
      return next();
    })
    .catch((err) => console.log('MoodController.addMood Error', err));
};

moodController.getMood = (req, res, next) => {
  // retrieve all dates and moods from req.body into SQL database
  const sqlQuery =
    'SELECT * FROM "WellnessTracker"."moodtracker" ORDER BY date ASC';
  db.query(sqlQuery)
    .then((data) => {
      res.locals.getMoods = data.rows;
      return next();
    })
    .catch((err) => console.log('MoodController.getMood Error', err));
};

moodController.deleteMood = (req, res, next) => {
  const { date } = req.params;
  // retrieve data that matches newDate and delete row from SQL database
  // SQL QUERY TESTED IN ELEPHANT SQL THAT WORKS: DELETE FROM "WellnessTracker"."moodtracker" WHERE date = '2023-02-17'
  const sqlQuery =
    'DELETE FROM "WellnessTracker"."moodtracker" WHERE date = $1 RETURNING *';
  const values = [date.slice(0, 25)];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.deletedMood = data;
      return next();
    })
    .catch((err) => console.log('MoodController.deleteMood Error', err));
};

module.exports = moodController;
