const clockContainer = document.querySelectorAll('.js-clock');
const clockTitle1 = clockContainer[0];
const clockTitle2 = clockContainer[1];

const start = new Date();
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  this.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
                          ${minute < 10 ? `0${minute}` : minute}:
                          ${seconds < 10 ? `0${seconds}` : seconds}`;
}


function init() {
  getTime();
  setInterval(getTime.bind(clockTitle1), 1000);

  // setInterval(getTime.bind(clockTitle2), 1000);
}
init();
