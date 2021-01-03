const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const date = document.getElementById("date");

const END_DATE = "1 January 2022";
var endDate = new Date(END_DATE);

date.innerText = END_DATE;

function update() {
  var startDate = new Date();
  var diff = endDate - startDate;

  const DAY_TIME = 1 * 24 * 60 * 60 * 1000;

  const DAYS = diff / DAY_TIME;
  const HOURS = diff % DAY_TIME;
  const MINUTES = HOURS % (DAY_TIME / 24);
  const SECONDS = MINUTES % (DAY_TIME / 24 / 60);

  const FDAYS = Math.floor(DAYS);
  const FHOURS = Math.floor(HOURS / (DAY_TIME / 24));
  const FMINUTES = Math.floor(MINUTES / (DAY_TIME / 24 / 60));
  const FSECONDS = Math.floor(SECONDS / (DAY_TIME / 24 / 60 / 60));

  days.innerText = FDAYS;
  hours.innerText = FHOURS;
  minutes.innerText = FMINUTES;
  seconds.innerText = FSECONDS;
}

update();
window.setInterval(update, 1000);

console.log("Days", FDAYS);
console.log("Hours", FHOURS);
console.log("Minutes", FMINUTES);
console.log("Seconds", FSECONDS);
