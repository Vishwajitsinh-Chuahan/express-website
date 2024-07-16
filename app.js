const express = require('express')
const app = express()
const port = 3002
app.use(express.static('public'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
    res.send('hello world')
  })
  app.get('/surat', (req, res) => {
    res.send('Hello surat!')
  })
  app.get('/home/cake', (req, res) => {
    res.send('Hello home!')
  })
  app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/home.html')
  })

  app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/about.html')
  })

  app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/contact.html')
  })

  app.get('/*', (req, res) => {
    res.send('404 Not Found')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})