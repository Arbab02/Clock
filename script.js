let time = document.getElementById('time');

update();
setInterval(update, 1000);
function update(){
let date = new Date();
time.innerHTML = formateTime(date);


function formateTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am";
  
  hours = (hours % 12) || 12;

  hours = formateZeroes(hours);
  minutes = formateZeroes(minutes);
  seconds = formateZeroes(seconds);
  return `${hours}:${minutes}:${seconds} ${amOrPm}`
}

  function formateZeroes(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
// date = date.toLocaleString();