const mongoose = require("mongoose");


const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    CoverImg:{
        type:String,
    },
    SubCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"SubCategory"
    },
    Content:{
        type:String,
    }
},{timestamps:true})


const Course = mongoose.Model("Course", CourseSchema);

module.exports = Course;