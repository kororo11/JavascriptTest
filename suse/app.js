const spanArr = this.document.querySelectorAll('.product-colors span');
// console.log('spanArr', spanArr);

const productPic = document.querySelector('.product-pic');
//productPic.style.backgroundImage = "url('/2.png')";
//console.log('productPic ->', productPic.style.backgroundImage);

// for (let i = 0; i < spanArr.length; i++) {
//   const element = spanArr[i];
//   element.addEventListener('click', function(event) {
//     productPic.style.backgroundImage = event.target.getAttribute('data-pic');
//   });
// }

// spanArr.forEach(function(element) {
//   console.log('element', element);
//   element.addEventListener('click', function() {
//     //console.log('event.target', event.target);
//     //console.log('event', event.target.getAttribute('data-pic'));
//     productPic.style.backgroundImage = element.getAttribute('data-pic');
//   });
// });

// spanArr.forEach(element => {
//     element.addEventListener('click', () =>
//     productPic.style.backgroundImage = element.getAttribute('data-pic')
//   );
// });

// for (let i = 0; i < spanArr.length; i++) {
//   console.log(`${i}`, spanArr[i]);
// }

// for (let index in spanArr) {
//   console.log(`${index}`, spanArr[index]);
// }

// for (let i = 0; i < spanArr.length; i++) {
//   const element = spanArr[i];
//   element.addEventListener('click', function (event) {
//     productPic.style.backgroundImage = event.target.getAttribute('data-pic');
//   });
// }

// for (const element of spanArr) {
//   console.log(element);
//   element.addEventListener('click', event => {
//     productPic.style.backgroundImage = event.target.getAttribute('data-pic');
//   });
// }



// function funName() {

// };


// const funName = function () {

// };


spanArr.forEach(element => {
  // console.log('this', this);
  element.addEventListener('click', event =>
    productPic.style.backgroundImage = event.target.getAttribute('data-pic')
  );
  // displayImage(element);

  // displayImage.call(spanArr, element);
  //console.log('element', typeof element);
  // element.addEventListener('click', 
});

function displayImage(event) {
  console.log('event.. ->', event);
  productPic.style.backgroundImage = event.target.getAttribute('data-pic');
}
