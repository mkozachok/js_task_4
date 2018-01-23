// вивести для кожного міста час і дату
// формат 24.09.2017 - 15:40
var localTime = {
    'london': -2,
    'kiev':0,
    'warshawa': -1,
    'los angeles': -10,
    'new york': -7
  }
  function timeLoop(){
  document.querySelectorAll("li[data-location]").forEach(function(el){
    var time = new Date();
    time.setHours(time.getHours()+localTime[el.getAttribute('data-location')]);
    el.getElementsByClassName("time")[0].innerHTML=time.toLocaleDateString() + " - " + time.toLocaleTimeString();
  });
   var t = setTimeout(timeLoop, 500);
  }