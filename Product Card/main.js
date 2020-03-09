window.onload = function() {
  var productSpan = this.document.querySelectorAll('span');
  for (let i = 0; i < productSpan.length; i++) {
    const element = productSpan[i];
    console.log(element);
  }

  function test() {
    console.log('a');
  }
};
