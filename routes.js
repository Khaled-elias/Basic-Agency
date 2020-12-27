const express = require('express')
const router = express.Router()


const homeSection3 = require('./homeSection3.json')
const workData = require('./workData.json')
const workDatavideo = require('./workDataVideo.json')

const SectionAbout3 = require('./aboutSection3.json')

const SectionAbout4 = require('./aboutSection4.json')

const NEWS = require('./news.json')


    router.get('/', (req, res) => {
    res.render('index', {  title:'Home Basic Agency', homeSection3 })
    })

    router.get('/work' ,(req,res) =>{
        res.render('work',{title:'Work Basic Agency',workData,workDatavideo})
    })

    router.get('/about' ,(req,res) =>{
        res.render('about',{title:'About Basic Agency',SectionAbout3,SectionAbout4})
    })

    router.get('/thinking' ,(req,res) =>{
        res.render('thinking',{title:'Thinking Basic Agency'})
    })

    router.get('/contact' ,(req,res) =>{
        res.render('contact',{title:'Contact Basic Agency'})
    })
    
    
    router.get('/news' ,(req,res) =>{
        res.render('news',{title:'News Basic Agency',NEWS})
    })
    
    
    router.use(function (req, res, next) {
        res.status(404).render('404', { title:'Error' });
    });



module.exports = router