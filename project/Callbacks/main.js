//==========================Ex1====================================
// const push = function() {
//     console.log("pushing it!")
// }

// const pull = function() {
//     console.log("pulling it!")
// }
// const pushPull = function(call) {
//     call()
// }
// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"
//=========================Ex2======================================
// const getTime = function(call) {
//     const time = new Date()
//     call(time)
// }
// const returnTime = function(time) {
//     alert('The current time is: ' + time)
// }

// getTime(returnTime)
//============================Ex3=====================================
// const logData = function(param) {
//     console.log(" " + param)
// }
// const displayData = function(alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
// };

// displayData(alert, logData, "I like to party")
//===============================Ex4======================================
// const getSum = (param1, param2, param3) => { return param1 + param2 + param3 }
// console.log(getSum(1, 2, 3))
//===========================Ex5==========================================
// const capitalize = (str) => { return (str.charAt(0).toUpperCase() + (str.slice(1).toLowerCase())) }
// console.log(capitalize("feliSHIA"))
//==========================Ex6===============================================
// const determineWeather = temp => {
//     if (temp > 25) {
//         return "hot"
//     }
//     return "cold"
// }
// const commentOnWeather = temp => { return "It's " + determineWeather(temp) }
// console.log(commentOnWeather(30))
// console.log(commentOnWeather(22))
//===========================================================================
// const run = (name) => { console.log("Run, " + name + ", run!") }
// const yell = function(action) {
//     let env = "Forest"
//     action(env)
// }
// run(yell)