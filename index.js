const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

const DB_URI = process.env.DB_URI
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
