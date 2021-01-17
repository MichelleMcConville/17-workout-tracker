let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 29),
    exercises: [
      {
        // Chest: Monday
        type: "resistance",
        name: "Barbell Flat Bench - Heavy",
        duration: 10,
        weight: 315,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 28),
    exercises: [
      {
        // Chest: Monday
        type: "resistance",
        name: "Barbell Flat Bench - 50%",
        duration: 10,
        weight: 315,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 27),
    exercises: [
      {
        // Chest: Monday
        type: "resistance",
        name: "Barbell Incline Bench - Heavy",
        duration: 10,
        weight: 315,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 26),
    exercises: [
      {
        // Chest: Monday
        type: "resistance",
        name: "Barbell Incline Bench - 50%",
        duration: 10,
        weight: 315,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 25),
    exercises: [
      {
        // Chest: Monday
        type: "resistance",
        name: "Dumbbell Flys - Heavy",
        duration: 10,
        weight: 60,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 24),
    exercises: [
      {
        // Chest: Monday
        type: "resistance",
        name: "Dumbbell Flys - 50%",
        duration: 10,
        weight: 60,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 23),
    exercises: [
      {
        // Back: Tuesday
        type: "resistance",
        name: "Seated Cable Rows",
        duration: 10,
        weight: 195,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 22),
    exercises: [
      {
        // Back: Tuesday
        type: "resistance",
        name: "Pull Ups",
        duration: 10,
        weight: 215,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 21)),
    exercises: [
      {
        // Back: Tuesday
        type: "resistance",
        name: "Dumbbell Rows",
        duration: 10,
        weight: 60,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 20)),
    exercises: [
      {
        // Wednesday: Shoulders
        type: "resistance",
        name: "Dumbbell Press - Heavy",
        duration: 10,
        weight: 60,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 19)),
    exercises: [
      {
        // Wednesday: Shoulders
        type: "resistance",
        name: "Dumbbell Press - 50%",
        duration: 10,
        weight: 60,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 18)),
    exercises: [
      {
        // Wednesday: Shoulders
        type: "resistance",
        name: "Side Dumbbell Raise",
        duration: 10,
        weight: 20,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 17)),
    exercises: [
      {
        // Wednesday: Shoulders
        type: "resistance",
        name: "Front Dumbbell Raise",
        duration: 10,
        weight: 25,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 16)),
    exercises: [
      {
        // Wednesday: Shoulders
        type: "resistance",
        name: "Dumbbell Shrugs",
        duration: 10,
        weight: 75,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 15)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Dumbbell Curl - Heavy",
        duration: 10,
        weight: 50,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 14)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Dumbbell Curl - 50%",
        duration: 10,
        weight: 50,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 13)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Hammer Curl - Heavy",
        duration: 10,
        weight: 50,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 12)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Hammer Curl - 50%",
        duration: 10,
        weight: 50,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 11)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Close Grip Chin Ups",
        duration: 10,
        weight: 215,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Weighted Dips",
        duration: 10,
        weight: 45,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Skull Crusher",
        duration: 10,
        weight: 120,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        // Thursday: Arms
        type: "resistance",
        name: "Tricep Extensions",
        duration: 10,
        weight: 100,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        // Friday: Legs
        type: "resistance",
        name: "Barbell Squats",
        duration: 10,
        weight: 300,
        reps: 8,
        sets: 8
      }
    ]
  },{
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        // Friday: Legs
        type: "resistance",
        name: "Seated Leg Extension",
        duration: 10,
        weight: 150,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        // Friday: Legs
        type: "resistance",
        name: "Seated Leg Curl",
        duration: 10,
        weight: 100,
        reps: 8,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        // Friday: Legs
        type: "resistance",
        name: "Calf Raises",
        duration: 10,
        weight: 500,
        reps: 15,
        sets: 8
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 3),
    exercises: [
      {
        // M-W-F
        type: "resistance",
        name: "Abs",
        duration: 10,
        weight: 100,
        reps: 15,
        sets: 8
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        // Sat-Sun
        type: "cardio",
        name: "Elliptical",
        duration: 45,
        distance: 6
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
