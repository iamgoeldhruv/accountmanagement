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


dotenv.config({ path: './config/config.env' });
connectdb();

const app = express();


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.set('views', path.join(__dirname, './config/views')); // Set the path to your views directory
app.set('view engine', 'hbs'); // Set the view engine to 'hbs'

const port = process.env.PORT || 3000;
app.use('/',require('./routes/index.js'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
