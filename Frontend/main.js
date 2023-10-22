const submitBtn = document.getElementById('submit-btn')
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const address = document.getElementById('address')
const email = document.getElementById('email')
const service = document.getElementById('service')




const baseURL = `http://localhost:4000/api/info`;

const customerQuote = (event) => {
  event.preventDefault()
  let customerInfo = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    email: email.value,
    service: service.value
  }
  
  axios.post(baseURL, customerInfo)
  .then(res => {
    console.log(res.data)
  })

}


submitBtn.addEventListener('click', customerQuote)