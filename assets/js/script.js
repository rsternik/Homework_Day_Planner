// Variables
let container = $('.container')
let currentDay = $('#currentDay')
plannerRow = $('<div>')
// Moment Setup
let now = moment()
let timeFormat = now.format('h A')
let hours = []
let hourState = []
let dayState = []
let time = now.format("dddd, MMMM Do YYYY, h:mm:ss a")

//Function
//Day Scheduler
function dayScheduler() {
    // Loop
    // 
    for (let hour = 00; hour < 24; hour++) {
        hours.push(moment({ hour }).format('hh:mm A'))
        hourState.push(moment({ hour }).format('H A'))   
    }
    // Loop 
    // Element creation and display
    for (var i = 0; i <= 8; i++) {
        // Elements & Attributes
        // Rows
        plannerRow = $('<div>')
        plannerRow.attr('class', 'row')
        plannerRow.attr('data-state', hourState[i])
        let rowState = plannerRow.attr('data-state')
        
        // Hour
        let hourEl = $('<div>')
        hourEl.attr('class', 'hour')
        hourEl.text(hours[i])
        // Text box
        let description = $('<textArea>')
        description.attr('class', 'description')
        // Save Button
        let saveBtn = $('<button>')
        saveBtn.attr('class', 'saveBtn')
        saveBtn.text('Save')
        // Element Output
        container.append(plannerRow.append(hourEl).append(description).append(saveBtn))
        //Styling rows with past, present, & future classes
        if (rowState > now.format('H A')){
            description.attr('class', 'future')
            console.log('future')
        }
        else if (rowState < now.format('H A')){
            description.attr('class', 'past')
               console.log('past')
        }
        else {
            description.attr('class', 'present')
               console.log('present')
        }

    }
    // Click Event
    document.addEventListener('click', function () {
        console.log('hello')
    })
}
// Function
// Initialize
function init() {
    currentDay.append(time)
    dayScheduler()
}
init()