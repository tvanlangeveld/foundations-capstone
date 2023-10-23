const baseURL = `http://localhost:4000/`


const getLeads = (event) => {
  event.preventDefault()

  axios.get(`${baseURL}api/database`)
  .then(res => {
    console.log(res.data)
    for(let i = 0; i < res.data.length; i++){
    const newDiv = document.createElement('div')
    const firstName = document.createElement('p')
    const lastName = document.createElement('p')
    const address = document.createElement('p')
    const email = document.createElement('p')
    const service = document.createElement('p')
    const promo = document.createElement('p')
    const deleteButton = document.createElement('button')

    newDiv.classList.add('lead-list')
    deleteButton.classList.add('delete-button')
  
    firstName.textContent = `First Name: ${res.data[i].firstName}`
    lastName.textContent = `Last Name: ${res.data[i].lastName}`
    address.textContent = `Address: ${res.data[i].address}`
    email.textContent = `Email: ${res.data[i].email}`
    service.textContent = `Service: ${res.data[i].service}`
    promo.textContent = `Promo: ${res.data[i].promo}`
    deleteButton.textContent = 'Delete'
    
    document.body.appendChild(newDiv)
    newDiv.appendChild(firstName)
    newDiv.appendChild(lastName)
    newDiv.appendChild(address)
    newDiv.appendChild(email)
    newDiv.appendChild(service)
    newDiv.appendChild(promo)
    newDiv.appendChild(deleteButton)

    }
  })
}



addEventListener('load', getLeads)