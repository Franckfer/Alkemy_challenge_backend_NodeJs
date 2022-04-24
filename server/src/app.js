require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const logger = require('morgan');
const { sequelize } = require('./database/models');

// table creation 
// require('./database/models/User')




// APIS
const indexRouter = require('./routes/index.routes');
const authRouter = require('./routes/auth.routes');
// const charactersRouter = require('./routes/characters.routes');
// const genresRouter = require('./routes/genres.routes');
// const seriesAndMoviesRouter = require('./routes/genres.routes');


// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
// app.use('/characters', charactersRouter);
// app.use('/genres', genresRouter);
// app.use('/series-and-movies', seriesAndMoviesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error 
  res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
});


async function main() {

  try {

      // await sequelize.sync({ alter: true});

      app.listen(port, () => {
          console.log('Server is listening on port', port);
      });

      await sequelize.authenticate();
      console.log('DB connected 🚀🚀');
      
  } catch (error) {
      console.error('Unable to connect to the database', error);
  }
}

main()



module.exports = app;
