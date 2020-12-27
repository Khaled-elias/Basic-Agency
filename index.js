const express =require('express');
const routes = require('./routes')
const app = express();
const PORT =5050
app.use(express.static('public'))
app.set('view engine' , 'ejs')


const homeSection3 = require('./homeSection3.json');
const router = require('./routes');
app.use(routes)









app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`))