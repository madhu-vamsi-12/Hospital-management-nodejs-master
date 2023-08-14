var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://madhuvamsi948:ganapathi@cluster0.xf3yo9d.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
