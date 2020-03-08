window.onload = function() {
  const talbeList = document.querySelector('#twiceTable');
  const trLists = talbeList.querySelectorAll('tr');

  trLists.forEach(element => {
    if (!element.querySelector('th')) {
      console.log(element);
    }
  });
};
