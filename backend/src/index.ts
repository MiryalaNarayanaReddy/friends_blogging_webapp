import express from 'express'

const app = express()


app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})


app.listen(3001, () => {
  console.log('Server is running on http://localhost:3000')
})