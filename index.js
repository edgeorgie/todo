const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

mongoose
  .connect(
    'mongodb+srv://todomaster:todomaster123@cluster0.2njxt.mongodb.net/todo?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('Connected to ToDo Database')
  })
  .catch((err) => {
    console.log('Error:', err.message)
  })
