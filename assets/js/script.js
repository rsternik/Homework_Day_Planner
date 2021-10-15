
let container = $('.container')
let plannerRow = $('<div>')
let saveBtn = $('<button>')
let hour = $('<div>')
let description = $('<textArea>')
let timeBlock = $('<div>')
let currentDay = $('#currentDay')

let now = moment()
saveBtn.attr('class', 'saveBtn')
saveBtn.text('Save')
hour.attr('class', 'hour')
hour.text('12PM')
description.attr('class', 'description')
description.text('Placeholder')
plannerRow.attr('class', 'row')
timeBlock.attr('class', 'time-block')

container.append(timeBlock)
timeBlock.append(plannerRow)
plannerRow.append(hour).append(description).append(saveBtn)

time = now.format("dddd, MMMM Do YYYY, h:mm:ss a")
currentDay.append(time)

console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"))
