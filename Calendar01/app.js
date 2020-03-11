window.onload = function() {
  function calendar(new_year, new_month) {
    var captionYear = document.querySelector('.year'),
      captionMonth = document.querySelector('.month'),
      start_day = document.querySelectorAll('tr td');

    var d = new Date(new_year, new_month - 1, 1),
      year = d.getFullYear(),
      month = d.getMonth(),
      date = d.getDate(),
      day = d.getDay(),
      d_length = 32 - new Date(new_year, new_month - 1, 32).getDate();

    captionYear.innerHTML = year;
    captionMonth.innerHTML = month + 1;

    // 기본적인 for문
    // for (let i = 0; i < start_day.length; i++) {
    //   const element = start_day[i];
    //   element.innerHTML = '&nbsp;';
    // }

    // forEach 함수 사용
    // start_day.forEach(function(i) {
    //   this.innerHTML = '&nbsp;';
    // });

    // arrow 함수 사용
    start_day.forEach(i => (this.innerHTML = '&nbsp;'));

    //기본적인 for문
    for (let i = day; i < day + d_length; i++) {
      start_day[i].innerHTML = date;
      date++;
    }
  }

  (function() {
    var year = new Date().getFullYear(),
      month = new Date().getMonth() + 1,
      prev = document.getElementById('prev'),
      next = document.getElementById('next');

    calendar(year, month);
    console.log('현재 달 : ', month);
    // prev.addEventListener(
    //   'click',
    //   function() {
    //     calendar(year, --month);
    //     console.log('prev 눌렀을때 달 : ', month);
    //   },
    //   false
    // );
    // next.addEventListener(
    //   'click',
    //   function() {
    //     calendar(year, ++month);
    //     console.log('next 눌렀을 때 달 : ', month);
    //   },
    //   false
    // );

    prev.addEventListener('click', prevFun, false);
    next.addEventListener('click', nextFun, false);

    function prevFun() {
      calendar(year, --month);
      console.log('prev 눌렀을때 달 : ', month);
    }

    function nextFun() {
      calendar(year, ++month);
      console.log('next 눌렀을때 달 : ', month);
    }
  })();
};
