// const Workout = require("../models/workout.js");
import Workout from "../models/workout.js";

module.exports = function(app) {
  app.get("/api/workouts", ({ body, params }, res) => {
    Workout.find({})
      .then((data) => { res.json(data); })
      .catch((err) => { res.json(err); });
  });

  app.get("/api/workouts/range", ({ body, params }, res) => {
    Workout.find({})
      .then(data => {res.json(data);})
      .catch(err => {res.json(err);});
  });

  app.post("/api/workouts/:id", ({ body, params }, res) => {
    const workout = new Workout(req.body);
    Workout.create(workout)
      .then(data => {res.json(data);})
      .catch(err => {res.json(err);});
  });

}