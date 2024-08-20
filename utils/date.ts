function getCurrentDate(separator=' '){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }

function getCurrentDayName(){
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  let newDate = new Date()
  let dayName = days[newDate.getDay()]
  return dayName
}


function getCurrentMonthName(){
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  let newDate = new Date()
  let monthName = months[newDate.getMonth()]
  return monthName
}


export {getCurrentDate, getCurrentDayName, getCurrentMonthName}