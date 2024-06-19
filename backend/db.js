const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Admin:kwlDLmi3znHLBkgv@cluster0.fn7thl6.mongodb.net/")

const todoSchema = mongoose.Schema({
    titile: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}