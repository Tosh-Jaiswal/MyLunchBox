const express = require("express"),
    tiffinController = require("../controller/tiffin"),
    router = express.Router();


//for this route main logic will go to tiffincontroller-->controllers/tiffin  
router.get('', (req, res) => {
    res.render('main')
  })
  
  router.get('/Choose_Provider', (req, res) => {
    res.render('Choose_Provider')
  })
  
  router.get('/login-page', (req, res) => {
    res.render('login-page')
  })
  
  router.get('/profile-page', (req, res) => {
    res.render('profile-page')
  })
  
  router.get('/signup-page-delivery', (req, res) => {
    res.render('signup-page-delivery')
  })
  
  router.get('/signup-page-provider', (req, res) => {
    res.render('signup-page-provider')
  })
  
  router.get('/signup-page-user', (req, res) => {
    res.render('signup-page-user')
  })

  router.get('/cart', (req, res) => {
    res.render('cart')
  })

  router.get('/404', (req, res) => {
    res.render('404')
  })
  
  router.get('/main', (req, res) => {
    res.render('main')
  })

module.exports=router;