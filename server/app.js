const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  const statusCode = err.status | 500
  const message = err.message | {}
  console.log('xxxxxxxxxxx', err)
  res.status(statusCode).json({message: err.message, statusCode})
})

module.exports = app
