// Variables
let container = $('.container')
let currentDay = $('#currentDay')
// Moment Setup
let now = moment()
let hours = [];
let time = now.format("dddd, MMMM Do YYYY, h:mm:ss a")

//Function
//Day Scheduler
function dayScheduler() {
    // Loop
    // 
    for (let hour = 9; hour < 18; hour++) {
        hours.push(moment({ hour }).format('hh:mm A'));
    }
    // Loop 
    // Element creation and display
    for (var i = 0; i <= 8; i++) {
        // Elements & Attributes
        let plannerRow = $('<div>')
        plannerRow.attr('class', 'row')
        // Hour
        let hourEl = $('<div>')
        hourEl.attr('class', 'hour')
        hourEl.text(hours[i])
        // Text box
        let description = $('<textArea>')
        description.attr('class', 'description')
        description.text('Placeholder')
        // Save Button
        let saveBtn = $('<button>')
        saveBtn.attr('class', 'saveBtn')
        saveBtn.text('Save')
        // Element Output
        container.append(plannerRow.append(hourEl).append(description).append(saveBtn))
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