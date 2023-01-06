import express from 'express'
import {car, years, token, createUser} from './data.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
  res.sendStatus(200)
})



app.get('/test-user', (req, res) => {
  let newUser = createUser()
  res.send(newUser)
})


app.get('/test-get', (req, res) => {
  res.send(car);
})

app.post('/test-post', function (req, res) {

  if(req.headers.token === token) {
    res.send(years)
  }
  else {
    res.sendStatus(403)
  }

});

// USE FOR LOCAL TESTING
// app.listen(port, () => {
//   console.log(`🏃 on port ${port}`)
// })

// USE FOR RAILWAY
app.listen(process.env.PORT, () => {
  console.log(`🏃 on port ${process.env.PORT}`)
})

