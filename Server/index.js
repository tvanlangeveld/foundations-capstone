const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const {customerQuote, findDiscount} = require('./controller')

app.use(cors());
app.use(express.json());



app.get('/api/discount', findDiscount)
app.post('/api/info',customerQuote)

app.listen(port, () => {
  console.log(`Lab server listening at http://localhost:${port}`)
})