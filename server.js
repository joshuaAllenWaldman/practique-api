const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const app = express() 

const PORT = process.env.PORT || 4000;
const routes = require('./routes')


app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  secret: 'barkwoofbark',
  resave: false,
  saveUninitialized: false,
  unset: 'destroy',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2, //valid for 2 weeks. 
  }
}))

//Home Route
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use('/api/v1/users', routes.users)
app.use('/api/v1/hobbies', routes.hobbies)




app.listen(PORT, () => console.log(`Server connected on port : ${PORT}`))