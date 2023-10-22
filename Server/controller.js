let userDatabase = []


module.exports={
  customerQuote: (req, res) => {
    userDatabase.push(req.body)
    console.log(userDatabase)
    res.status(200).send(userDatabase)

  }
}