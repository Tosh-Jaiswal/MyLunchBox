const express = require("express")
require('../db/mongoose')
const bodyParser=require("body-parser")
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.json())
app.use(bodyParser.json())

// //routing
const authRoutes = require("../routes/auth")
      auntyRouter = require("../routes/aunty")
      bhukkadRouter = require('../routes/bhukkad')
      deliveryboyRouter = require('../routes/deliveryboy')
      frontendRoute = require('../routes/frontendRoutes') 

// //connection
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("./public"))
app.use(express.static(publicDirectoryPath))



//use route
app.use(authRoutes);
app.use(auntyRouter);
app.use(bhukkadRouter);
app.use(deliveryboyRouter);
app.use(frontendRoute);

//listining to port 3000
app.listen(port, () =>{
  console.log("Server is up on port "+port)
});

//to start the server write npm start on your terminal and write http://localhost:3000/ on your browser
//and to stop the server ctrl+c


//FOR FRONTEND GUYS
// 1)  your files will be inside views folder
// 2)  in partials you will keep nav bar in Headers.ejs and footer in footer.ejs for dynammic templating
// 3)  to make header.ejs and footer.ejs to work on every other file see home.ejs page to see how to  include file 
// 4)  your css and js file will be inside public folder
// 5)  since this is a team and big project always comment what you are doing so that you can quickly refer in future