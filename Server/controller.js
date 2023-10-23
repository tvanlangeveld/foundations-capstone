let userDatabase = []
let discountCodes = ['10% off!!', 'Sorry no discounts at this time.', 'Maybe next time!!', '100% off!', 'FOR FREE!!', '25% OFF!']


module.exports={
  customerQuote: (req, res) => {
    userDatabase.unshift(req.body)
    res.status(200).send(userDatabase[0])
    console.log(userDatabase[0])

  },
  findDiscount: (req, res) => {
    res.status(200).send(discountCodes)
  }
}