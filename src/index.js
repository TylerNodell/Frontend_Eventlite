document.addEventListener('DOMContentLoaded', function() {
  const eventlist = document.getElementById("events_list")
  const topbar = document.getElementById('top_bar')

  fetchData(BASE_URL, eventlist)
})


const BASE_URL = "http://localhost:3000/events"
// const eventData = fetchData(BASE_URL)


function fetchData(url, eventlist) {
  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    generateEvents(data, eventlist)
  })
}


function generateEvents(data, eventlist) {
  // Iterating through each event
  data.forEach( element => {
    // Creating the card div
    let eventContainer = document.createElement('div')
    eventContainer.className = "event-card"
    // Creating the image
    let eventImage = document.createElement('img')
    eventImage.src = element.img;
    eventImage.className = "event-image"
    // Creating the name
    let eventName = document.createElement('h3')
    eventName.innerText = element.name;
    eventName.className = "event-name"
    // Creating the date
    let eventDate = document.createElement('h4')
    eventDate.innerText = element.date
    eventDate.className = "event-date"
    // Appending attributes to the card div
    eventContainer.appendChild(eventImage)
    eventContainer.appendChild(eventName)
    eventContainer.appendChild(eventDate)
    // Append the card div to the event list
    eventlist.appendChild(eventContainer)
  })
}
// User generated event
function createEvent() {
  // Build form div
  let formDiv = document.createElement('div')
  formDiv.id = "formdiv"
  // Build form
  let form = document.createElement('form')
  form.id = "event-creation-form"
  // Create Labels
  let formName = document.createElement('label')
  forNname.className = "form-label"
  let formImage = document.createElement('label')
  formImage.className = "form-label"
  let formDate = document.createElement('label')
  formDate.className = "form-label"
  let formDescription = document.createElement('label')
  formDescription.className = "form-label"
  // Create inputs
  let formNameInput = document.createElement('input')
  formNameInput.type = "text"
  formNameInput.className = "form-input"
  let formImageInput = document.createElement('input')
  formImageInput.type = "text"
  formImageInput.className = "form-input"
  let formDateInput = document.createElement('input')
  formDateInput.type = "text"
  formDateInput.className = "form-input"
  let formDescriptionInput = document.createElement('input')
  formDescriptionInput.type = "text"
  formDescriptionInput.className = "form-input"
  // Create submit button
  let formsubmission = document.createElement('input')
  formsubmission.type = "submit"
  // Bring form together
  form.appendChild(formName)
  form.appendChild(formNameInput)
  form.appendChild(formImage)
  form.appendChild(formImageInput)
  form.appendChild(formDate)
  form.appendChild(formDateInput)
  form.appendChild(formDescription)
  form.appendChild(formDescriptionInput)
  // Append form to formDiv
  formDiv.appendChild(form)
  // Append formDiv to document
  document.appendChild(formDiv)

  // Add values to Event
  let newEvent = new Event(name, image, date, description)
  
}

// eventlist{
//   mainpage = document.getElementById('main-page')
//   mainpage.style.visibility = 'hidden'
//   eventpage.style.visibility = 'visible'
// }