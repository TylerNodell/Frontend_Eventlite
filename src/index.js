document.addEventListener('DOMContentLoaded', function() {
  const eventButton = document.getElementById("event-creation-button")



  fetchData(BASE_URL)

  eventButton.addEventListener('click',createEventForm)



})

const BASE_URL = "http://localhost:3000/api/v1/events"

function fetchData(url) {
  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    generateEvents(data)
  })
}

function generateEvents(data) {
  // Getting outer div
  let fullPage = document.getElementById('full-page')
  // Creating container divs
  let mainPage = document.createElement('div')
  mainPage.id = "main-page"
  let eventList = document.createElement('div')
  eventList.id = "event-list"

  // Iterating through each event
  data.forEach( element => {
    console.log(element)
    // Creating the card div
    let eventContainer = document.createElement('div')
    eventContainer.className = "event-card"
    // Creating the image
    let eventImage = document.createElement('img')
    eventImage.src = element.image_url;
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
    eventList.appendChild(eventContainer)
  })
  mainPage.appendChild(eventList)
  fullPage.appendChild(mainPage)
}

// User generated event
function createEventForm() {
  // Get full page div
  let fullPage = document.getElementById('full-page')
  let body = document.querySelector('body')
  //create form div
  let formDiv = document.createElement('div')
  formDiv.id = "form-div"

  formDiv.innerHTML = `<h2 id="form-header">Create your event</h2>
                      <form id="event-creation-form">
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

  let form = document.getElementById('event-creation-form');
  let eventList = document.getElementById('event-list')

  form.addEventListener('submit', (e) => {
    debugger
    let formName = document.getElementById('formNameInput').value;
    let formImage = document.getElementById('formImageInput').value;
    let formDate = document.getElementById('formDateInput').value;
    let formDescription = document.getElementById('formDescriptionInput').value;
    fetch(BASE_URL,
      {
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:"POST",
        body: JSON.stringify({name: formName, image_url: formImage, date: formDate, description: formDescription})
      })
      .then(() =>{
        fullPage.className = ""
        body.removeChild(formDiv)
        eventList.innerHTML = ""
        fetchData(BASE_URL)
      })

  })

}

// eventlist{
//   mainpage = document.getElementById('main-page')
//   mainpage.style.visibility = 'hidden'
//   eventpage.style.visibility = 'visible'
// }
