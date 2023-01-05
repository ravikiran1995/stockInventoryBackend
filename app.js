var createError = require('http-errors');
var express = require('express');
var helmet = require('helmet');
var cors = require('cors');
var fs = require('fs');
var logger = require('morgan');
var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
var manufactureRouter = require('./server/routes/manufactureRoutes');
var supplierRoutes = require('./server/routes/supplierRoutes');
var commonRoutes = require('./server/routes/commonRoutes');
var stockRoutes = require('./server/routes/stockRoutes');

var app = express();

const mongoose = require("mongoose");

app.use(logger('dev'));
app.use(cors())

const file = fs.readFileSync('./AA96742FCF3680086DE53699290CEEC9.txt');


// set security HTTP headers
app.use(helmet());
// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));



// routes
app.get('/.well-known/pki-validation/AA96742FCF3680086DE53699290CEEC9.txt',(req,res)=>{
  res.sendFile('./AA96742FCF3680086DE53699290CEEC9.txt')
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/manufacture', manufactureRouter);
app.use('/suppliers', supplierRoutes);
app.use('/common', commonRoutes);
app.use('/stocks', stockRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',err);
});

app.listen(process.env.PORT || 8081, () => {
  console.log('Server is started on 127.0.0.1:' + (process.env.PORT || 8081));
});
const uri = "mongodb+srv://myviz:stockinventory@cluster0.zgjhlzu.mongodb.net/?retryWrites=true&w=majority";
//configure mongoose
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(">>>>>error",err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);


module.exports = app;
