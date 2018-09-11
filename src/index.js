document.addEventListener('DOMContentLoaded', function() {
  const eventlist = document.getElementById("events_list")
  // debugger
  // fetchData(BASE_URL)
  fetch(BASE_URL)
  .then((resp) => resp.json())
  .then((data) => {
    // debugger
    console.log(typeof data)
    generateEvents(data, eventlist)
  })
  
  
  
})


const BASE_URL = "http://localhost:3000/events"
// const eventData = fetchData(BASE_URL)


function fetchData(url) {
  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    generateEvents(data)
  })
  // debugger
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
    // debugger
    eventlist.appendChild(eventContainer)
  })
}