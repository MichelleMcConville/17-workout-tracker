// const Workout = require("../models/workout.js");
import Workout from "../models/workout.js";

module.exports = function(app) {
  app.get("/api/workouts", ({ body, params }, res) => {
    Workout.find({})
      .then((data) => { res.json(data); })
      .catch((err) => { res.json(err); });
  });
  
}