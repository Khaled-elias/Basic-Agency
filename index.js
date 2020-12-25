const express =require('express');
const app = express();
const PORT =5050
app.use(express.static('public'))
app.set('view engine' , 'ejs')


app.get('/' ,(req,res) =>{
    res.render('index',{title:'Home Basic Agency'})
})
app.get('/work' ,(req,res) =>{
    res.render('work',{title:'Work Basic Agency'})
})
app.get('/about' ,(req,res) =>{
    res.render('about',{title:'About Basic Agency'})
})
app.get('/thinking' ,(req,res) =>{
    res.render('thinking',{title:'Thinking Basic Agency'})
})
app.get('/contact' ,(req,res) =>{
    res.render('contact',{title:'Contact Basic Agency'})
})

app.get('/news' ,(req,res) =>{
    res.render('news',{title:'News Basic Agency'})
})


app.use(function (req, res, next) {
    res.status(404).render('404', { title:'Error' });
});





app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`))