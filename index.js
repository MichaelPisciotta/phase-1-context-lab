/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


//OG
// let allWagesFor = function(employee){
//     let eligibleDates = employee.timeInEvents.map(function(e){
//     return e.date
//     })
    
//     let payable = eligibleDates.reduce(function(memo, d){
//     return memo + wagesEarnedOnDate(employee, d) //memo = accumulator, agesEarnedOnDate(employee, d) is throwing each date of employee into agesEarnedOnDate function
//     }, 0)
    
//     return payable //accumulating variable 
//     }

//current
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



//OG and current
function createEmployeeRecord(array){
    let record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return record
}


//OG and current
function createEmployeeRecords(twoRows){
    return twoRows.map(record => {
       return createEmployeeRecord(record)
    })
}



//OG
// function createTimeInEvent(obj, dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//      obj.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date: date
//     })
//     return obj;
// }


//current
function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

     this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this;
}



//OG
// function createTimeOutEvent(obj, dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//      obj.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date: date
//     })
//     return obj;
// }

//current
function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

     this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this;
}








//OG
//given a date, find number of hours between timeInEvent and timeOutEvent
// function hoursWorkedOnDate(obj, dateStamp){ 
//     let [date, hour] = dateStamp.split(' ')
//     let timeIn = obj.timeInEvents.find((obj) => obj.date === dateStamp)
//     let timeOut = obj.timeOutEvents.find((obj) => obj.date === dateStamp)
//     let hours = (timeOut.hour - timeIn.hour) /100
//     return hours
    
// }


//Current
//given a date, find number of hours between timeInEvent and timeOutEvent
function hoursWorkedOnDate(dateStamp){ 
    let timeIn = this.timeInEvents.find((timeInEvent) => timeInEvent.date === dateStamp)
    let timeOut = this.timeOutEvents.find((timeOutEvent) => timeOutEvent.date === dateStamp)
    let hours = (timeOut.hour - timeIn.hour) /100
    return hours
    
}





//OG
// function wagesEarnedOnDate(obj, dateStamp){
//     let rate = 27
//     let hours = hoursWorkedOnDate(obj, dateStamp)
//     return hours * rate
// }


//Current
function wagesEarnedOnDate(dateStamp){
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
}


let findEmployeeByFirstName = function(srcArray, firstName ) {
     return srcArray.find(function(rec){
         return rec.firstName === firstName
     })
}




//OG
// function calculatePayroll(){

//     return this.reduce((m, e) => { 
//         debugger;
//         m + wagesEarnedOnDate(e)
//     }, 0)

//     }


//current
function calculatePayroll(employees){
  
    return employees.reduce((total, wages) => 
        total += allWagesFor.call(wages)
    , 0)

    }



