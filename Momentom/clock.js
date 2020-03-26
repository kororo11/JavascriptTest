const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${hours}:${minute}:${seconds}`;
}

function init() {
  getTime();
}
init();
