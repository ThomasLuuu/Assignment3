const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  userid:{type:String, required:true},
  useryear:{type:String,required:true},
  coursename:{type:String,required:true},
  courseid:{type:String,required:true},
  semester:{type:String,required:true},
  assignment:{type:String,required:true},
  technologyuse:{type:String, required:true},
  industry:{type:String,required:true},
  photo:{type:String,required:true},
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;