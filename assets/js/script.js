// Moment Setup
let now = moment()
let time = now.format("dddd, MMMM Do YYYY, h:mm:ss a")

// Variables
let container = $('.container')
let currentDay = $('#currentDay')
let rowState

//Arrays
let hours = []
let hoursState = []

//Day Scheduler
function dayScheduler() {

    // Schedule time(hours) & data-state(hoursState) array compilation 
    for (let hour = 09; hour < 24; hour++) {
        hours.push(moment({ hour }).format('hh:mm A'))
        hoursState.push(moment({ hour }).format('HH A'))
    }

    // Row creation and display
    for (var i = 0; i <= 8; i++) {
        // Rows
        plannerRow = $('<div>')
        plannerRow.attr('class', 'row')
        plannerRow.attr('data-number', hoursState[i])
        let rowState = plannerRow.attr('data-number')

        // Hour pane
        let hourEl = $('<div>')
        hourEl.attr('class', 'hour')
        hourEl.text(hours[i])

        // Textbox pane
        description = $('<textArea>')
        description.attr('class', 'description')
        description.attr('id', [i])
        description.attr('name', hoursState[i])

        // Save Button
        let saveBtn = $('<button>')
        saveBtn.attr('class', 'saveBtn')
        saveBtn.attr('id', 'save')
        saveBtn.attr('name', [i])
        saveBtn.text('Save')

        //Appends rows and child elements to page
        container.append(plannerRow.append(hourEl).append(description).append(saveBtn))

        //Style textboxs 
        if (rowState > now.format('HH A')) {
            description.attr('class', 'future')
        }
        else if (rowState < now.format('HH A')) {
            description.attr('class', 'past')
        }
        else {
            description.attr('class', 'present')
        }
    }
    // Pull from localstorage
    for (let key in localStorage) {
        if (typeof localStorage[key] === 'string') {
            $('#' + key).val(localStorage[key])
        }
    }
    // Click Event
    $('.saveBtn').on('click', function () {
        console.log($(this).attr('name'))
        localStorage.setItem($(this).attr('name'), $('#' + $(this).attr('name')).val())
    })
}

// Initialize
function init() {
    currentDay.append(time)
    dayScheduler()
}

init()