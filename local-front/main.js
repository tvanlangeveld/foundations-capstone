const submitBtn = document.getElementById('submit-btn')
const promoBtn = document.getElementById('promo-btn')
const promoDiv = document.getElementById('promo-div')
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const address = document.getElementById('address')
const email = document.getElementById('email')
const service = document.getElementById('service')
const promo = document.getElementById('promo')
const form = document.querySelector('form')
let globalID = 0;



const baseURL = `http://localhost:4000/`;

const customerQuote = (event) => {
  event.preventDefault()
  let customerInfo = {
    id: globalID,
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    email: email.value,
    service: service.value,
    promo:  promo.value
  }
  globalID++
  axios.post(`${baseURL}api/info`, customerInfo)
  .then(res => {
    console.log(res.data)
    form.reset()
    let userTag = document.createElement('h3')
    userTag.textContent = `Thank you ${res.data.firstName} ${res.data.lastName}, someone will be reaching out soon!`
    document.body.appendChild(userTag)
    
  })
}

const findDiscount = (event) => {

  
  axios.get(`${baseURL}api/discount`)
  .then(res => {

    let randomDiscount = Math.floor(Math.random() * res.data.length);
    promoDiv.textContent = res.data[randomDiscount]

  })
}


promoBtn.addEventListener('click', findDiscount)
submitBtn.addEventListener('click', customerQuote)