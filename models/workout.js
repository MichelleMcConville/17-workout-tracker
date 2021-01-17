const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Data(),
  },

  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter exercise type",
    },

    name: {
      type: String,
      trim: true,
      require: "Enter exercises type",
    }
  }]
});
