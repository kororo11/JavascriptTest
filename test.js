// var i = 0;
// while (i < 10) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     alert(i);
// }

var a = 1;
let b = 2;

function myFunction() {
  var a = 3; // 전혀 다른 변수
  let b = 4; // 전혀 다른 변수

  if (true) {
    var a = 5; // 덮어쓴다.
    let b = 6; // 전혀 다른 변수

    console.log(a);
    console.log(b);
  }

  console.log(a);
  console.log(b);
}

myFunction();

console.log(a);
console.log(b);
