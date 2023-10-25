const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const {customerQuote, findDiscount, getLeads,deleteLead, createUser} = require('./controller')

app.use(cors());
app.use(express.json());

app.post('/api/create',createUser)
app.get('/api/database', getLeads)
app.get('/api/discount', findDiscount)
app.post('/api/info',customerQuote)
app.delete('/api/delete/:id',deleteLead)
app.listen(port, () => {
  console.log(`Lab server listening at http://localhost:${port}`)
})