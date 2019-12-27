const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const userid = req.body.userid;
  const useryear = req.body.useryear;
  const coursename = req.body.coursename;
  const courseid = req.body.courseid;
  const semester = req.body.semester;
  const assignment = req.body.assignment;
  const technologyuse = req.body.technologyuse;
  const industry = req.body.industry;
  const photo = req.body.photo;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    userid,
    useryear,
    coursename,
    courseid,
    semester,
    assignment,
    technologyuse,
    industry,
    photo,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id).limit(3)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.userid = req.body.userid;
      exercise.useryear = req.body.useryear;
      exercise.coursename = req.body.coursename;
      exercise.courseid = req.body.courseid;
      exercise.semester = req.body.semester;
      exercise.assignment = req.body.assignment;
      exercise.technologyuse = req.body.technologyuse;
      exercise.industry = req.body.industry;
      exercise.photo = req.body.photo;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;