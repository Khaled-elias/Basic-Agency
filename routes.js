const express = require('express')
const router = express.Router()


const homeSection3 = require('./homeSection3.json')

// console.log(nav);

    router.get('/', (req, res) => {
    res.render('index', {  title:'Home Basic Agency', homeSection3 })
    })

    router.get('/work' ,(req,res) =>{
        res.render('work',{title:'Work Basic Agency'})
    })

    router.get('/about' ,(req,res) =>{
        res.render('about',{title:'About Basic Agency'})
    })

    router.get('/thinking' ,(req,res) =>{
        res.render('thinking',{title:'Thinking Basic Agency'})
    })

    router.get('/contact' ,(req,res) =>{
        res.render('contact',{title:'Contact Basic Agency'})
    })
    
    
    router.get('/news' ,(req,res) =>{
        res.render('news',{title:'News Basic Agency'})
    })
    
    
    router.use(function (req, res, next) {
        res.status(404).render('404', { title:'Error' });
    });



module.exports = router