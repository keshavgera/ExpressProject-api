
const express = require('express')
const exphbs  = require('express-handlebars');      // This one is for  express-handlebars
const path = require('path')
const app = express()
const port = 3011

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
// app.engine('handlebars', exphbs());               // This one is for  express-handlebars
app.set('view engine', 'handlebars');             // This one is for  express-handlebars

// this is a way to create custom middle ware 
// normally we are using middle Don;t need to create middle ware

// const keshavMiddleware = (req, res, next)=>{    
//   console.log(req)
//   next()
// }


// app.get('/', function (req, res) {
//   res.render('../home');
// });


app.use(express.static(path.join(__dirname, "public")))
// app.use(keshavMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' +  req.params.name)
})

app.get('/about', (req, res) => {
//   res.send('about')
// res.sendFile(path.join(__dirname, 'index.html'))
// res.status(500)
    // res.json({"harry": 34})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})