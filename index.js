let express = require('express');
let layouts = require('express-ejs-layouts');
let app = express();

app.set('view engine' , 'ejs');
app.use(layouts);
app.use(express.static(__dirname + '/static/'))

app.get('/', (req,res)=>{
  res.render('home')
});

app.get('/about', (req,res)=>{
  res.render('page/about')
});

app.get('/projects', (req,res)=>{
  res.render('page/projects')
});

app.get('/contact', (req,res)=>{
  res.render('page/contact')
});

app.get('*',(req,res)=>{
res.render('404')
})

app.listen(3000);
