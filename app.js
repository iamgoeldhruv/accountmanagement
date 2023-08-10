// const express=require('express')
// const connectdb=require('./config/db.js')

// const dotenv=require('dotenv')
// const hbs=require('hbs')

// dotenv.config({path:'./config/config.env'})
// connectdb()
// const app=express()
// if(process.env.NODE_ENV==="development"){
//     app.use(morgan('dev'))
// }
// app.engine('.hbs',hbs({defaultLayout:'main',extname:'.hbs'}))
// app.set('view engine','hbs')
// const port=process.env.PORT || 3000
// app.listen(port,()=>{
//     console.log(`server running on port${port}`  )
// })
const express = require('express');
const path = require('path'); // Import the 'path' module for path manipulation
const connectdb = require('./config/db.js');
const dotenv = require('dotenv');
const morgan = require('morgan'); // Import 'morgan' for logging
const passport=require('passport');
const session=require('express-session')

dotenv.config({ path: './config/config.env' });

connectdb();
require('./config/passport.js')(passport)
const app = express();


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(passport.initialize())
app.use(passport.session())

app.set('views', path.join(__dirname, './config/views')); // Set the path to your views directory
app.set('view engine', 'hbs'); // Set the view engine to 'hbs'
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized:false,
    
  }))
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"public")))
app.use('/',require('./routes/index.js'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
