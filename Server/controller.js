let userDatabase = []


module.exports={
  customerQuote: (req, res) => {
    userDatabase.unshift(req.body)
    res.status(200).send(userDatabase[0])
    console.log(userDatabase[0])

  }
}