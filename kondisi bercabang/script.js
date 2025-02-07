// /* if (condition) {
//     code akan berjalan jika condition bernilai true'
// } */
// // else... = selain itu...
// // else if... = selain itu jika...
// let usia = 18;
// if (usia >= 18) {
//     console.log('Anda sudah dewasa');
// }

// let target = 10;
// if (target >= 80) {
//     console.log('Selamat, Anda lulus!');
// } else {
//     console.log('Maaf, Anda tidak lulus');
// };

// // const number = prompt('Masukkan angka: ');
// // if (number % 2 === 0) {
// //     alert(number + ' adalah bilangan genap');
// // } else {
// //     alert(number + ' adalah bilangan ganjil');
// // }


// // ================================================================================

// let input = prompt('Masukkan angka: '); 
// let angka = parseInt(input); //input string, maka harus diubah ke integer
//     if (angka % 2 === 0) {
//         alert(angka + ' adalah bilangan genap');
//     } else {
//         alert(angka + ' adalah bilangan ganjil');
//     }


// // ==================================================================================
// let userinput = null;
// // let isLoggedIn = false;

// let displayname = isLoggedIn && (userinput ?? "Guest");

// ===============================================================================
let isLoggedIn = null;
let status = (isLoggedIn && "active") || "no active";
console.log(status); // "active"