const baseURL = `http://localhost:4000/`



const getLeads = () => {


  axios.get(`${baseURL}api/database`)
  .then(res => {
    updateleads(res.data)
  })
}

const deleteLead = (event)=>{

  let id = event.target.id
  axios.delete(`${baseURL}api/delete/${id}`)
  .then(res => {
    updateleads(res.data)
    
  })


}





const updateleads = (leadList) => {
  const leadDiv = document.getElementById('lead-container')
  leadDiv.innerHTML = ""
  for(let i = 0; i < leadList.length; i++){
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
  
    firstName.textContent = `First Name: ${leadList[i].firstName}`
    lastName.textContent = `Last Name: ${leadList[i].lastName}`
    address.textContent = `Address: ${leadList[i].address}`
    email.textContent = `Email: ${leadList[i].email}`
    service.textContent = `Service: ${leadList[i].service}`
    promo.textContent = `Promo: ${leadList[i].promo}`
    deleteButton.textContent = 'Delete'
    deleteButton.setAttribute('id',`${leadList[i].id}`)
    
    leadDiv.appendChild(newDiv)
    newDiv.appendChild(firstName)
    newDiv.appendChild(lastName)
    newDiv.appendChild(address)
    newDiv.appendChild(email)
    newDiv.appendChild(service)
    newDiv.appendChild(promo)
    newDiv.appendChild(deleteButton)
    deleteButton.addEventListener('click',deleteLead)
  }
}


addEventListener('load', getLeads)
