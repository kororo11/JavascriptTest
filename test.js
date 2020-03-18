// var i = 0;
// while (i < 10) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     alert(i);
// }

// var a = 1;
// let b = 2;

// function myFunction() {
//   var a = 3; // 전혀 다른 변수
//   let b = 4; // 전혀 다른 변수

//   if (true) {
//     var a = 5; // 덮어쓴다.
//     let b = 6; // 전혀 다른 변수

//     console.log(a);
//     console.log(b);
//   }

//   console.log(a);
//   console.log(b);
// }

// myFunction();

// console.log(a);
// console.log(b);

const a = 12;
function myFunction() {
  console.log(a); //12

  const b = 13;

  if (true) {
    const c = 14;
    console.log(b); // 13
  }
  console.log(c); // 13
}

myFunction();

// const 는 블록 변수라서 if문 밖에서 c 를 출력할 수 없다.
