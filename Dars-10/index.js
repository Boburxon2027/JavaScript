// for (let i = 0; true; i++){
//     let n =prompt("son kiriting");
//     console.log(n);
//     break

// }

// for (;1; ) {
//     let n = prompt("son kiriting");
//     if (n > 100 || n === null) {
//         console.log(n);
//         break;

//     }
// }

// while ( 1 ) {
//     let n = prompt("son kiriting");
//     if (n > 100 || n === null) {
//         console.log(n);

//         break;

//     }
// }

// do {
//     let n = prompt("son kiriting");
//     if (n > 100 || n === null) {
//         console.log(n);

//         break;

//     }

// }  while (true)

// for ( let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);

        
//     }
//     console.log("======================================");
    
// }


// tashqi:for ( let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//        console.log(`${i} x ${j} = ${i * j}`);
//        if (i === 5 )  break tashqi;

        
//    }
//    console.log("======================================");
 
// var num = 100;
// for (let i=2; i<=num; i++) {
//     for (let j=2; j<=i-1; j++) {
//         if ( i % j == 0 ){
//             console.log( );
//             break;
//         }
//     }
    
// }
    
    
n = 100

for (let n = 2; n <= 100; n++) {
  let tub = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      tub = false;
      break;
    }
  }
  if (tub) {
    console.log(n);
  }
}





