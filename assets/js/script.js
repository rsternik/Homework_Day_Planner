
let container = $('.container')

let currentDay = $('#currentDay')

let now = moment()
time = now.format("dddd, MMMM Do YYYY, h:mm:ss a")
currentDay.append(time)




for (var i = 0; i <= 8; i++) {
    console.log('LOOPING')

    
 
    let plannerRow = $('<div>')
    plannerRow.attr('class', 'row')

    let hour = $('<div>')
    hour.attr('class', 'hour')
    hour.text('12PM')

    let description = $('<textArea>')
    description.attr('class', 'description')
    description.text('Placeholder')

    let saveBtn = $('<button>')
    saveBtn.attr('class', 'saveBtn')
    saveBtn.text('Save')

    container.append(plannerRow.append(hour).append(description).append(saveBtn))
}



