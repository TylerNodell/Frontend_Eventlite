document.addEventListener('DOMContentLoaded', function() {
  const eventList = document.getElementById("events_list")
  const eventButton = document.getElementById("event-creation-button")
  


  fetchData(BASE_URL, eventList)

  eventButton.addEventListener('click',createEvent)

  
})

const BASE_URL = "http://localhost:3000/events"

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
  // Get full page div
  let fullPage = document.getElementById('full-page')
  let body = document.querySelector('body')
  //create form div
  let formDiv = document.createElement('div')
  formDiv.id = "form-div"

  formDiv.innerHTML = `<form id="event-creation-form">
                      <label id="formName">Event Name:</label><br>
                      <input type="text" id="formNameInput"><br>
                      <label id="formImage">Event Image Link:</label><br>
                      <input type="text" id="formImageInput"><br>
                      <label id="formDate">Event Date:</label><br>
                      <input type="text" id="formDateInput"><br>
                      <label id="formDescription">Event Description</label><br>
                      <input type="text" id="formDescriptionInput"><br>
                      <input type="submit">
                      </form>`
  // append div
  body.append(formDiv)
  fullPage.className = "blurred"
  // // Add values to Event
  // let newEvent = new Event(name, image, date, description)
  
}

// eventlist{
//   mainpage = document.getElementById('main-page')
//   mainpage.style.visibility = 'hidden'
//   eventpage.style.visibility = 'visible'
// }