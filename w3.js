let today = new Date()
let day = today.getDay()

let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is: "+daylist[day])

let hours = today.getHours()
let minutes  =today.getMinutes()
let seconds = today.getSeconds()

console.log(hours); console.log(minutes)