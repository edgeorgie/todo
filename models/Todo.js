const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo
