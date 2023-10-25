let userDatabase = []
let discountCodes = ['10% off!!', 'Sorry no discounts at this time.', '15% off!!', '25% off!',  'Buy one get one free']


module.exports={
  customerQuote: (req, res) => {
    console.log(req.body)
    userDatabase.unshift(req.body)
    res.status(200).send(userDatabase[0])
    console.log(userDatabase[0])

  },
  findDiscount: (req, res) => {
    res.status(200).send(discountCodes)
  },
  getLeads: (req, res) => {
    res.status(200).send(userDatabase)
  },
  deleteLead: (req,res) => {
    let id = +req.params.id
    console.log(id)
    for(let i = 0; i < userDatabase.length; i++){
      if(id === userDatabase[i].id){
        userDatabase.splice(i,1)
        res.send(userDatabase)
        return
      }
    }
    res.sendStatus(400)
  }
}