console.log("Hello, World! 1x");
console.log("Hello, World! 2x");
console.log("Hello, World! 3x");
console.log("Hello, World! 4x");
//looping => ingin menampilkan lebih dari 1

// 1- while loop

// while (kondisi){
//ekspresi
// increment
//}
//invinity loop

// let ulang = 1;

// while (ulang <= 10){
//     console.log("Hello, World! " + ulang + "x");
//     ulang++;
// }

/*let santri = 1;

while (santri <= 10){
    console.log("Santri ke-" + santri);
    santri++;
}


do {
    console.log("hello, world " + ulang + "x");
    ulang++;
} while (ulang >= 10);


asrama = 1;

while (asrama <= 5){
    console.log("Asrama ke-" + asrama + " adalah asrama terbaik");
    asrama++;
} do {
    console.log("Asrama ke-" + asrama + " adalah asrama terburuk");
    asrama++;
} while ((asrama >= 6) && (asrama <= 10)); */

// 2- for loop

// let ulang = 1;

// for (ulang; ulang <= 10; ulang++) {
//   console.log("Hello, World! " + ulang + "x");
// }

// let asrama = 1;

// for (asrama = 1; asrama <= 5; asrama++) {
//   if (asrama === 1) {
//     console.log("Asrama ke-" + asrama + " adalah asrama terbaik dan terbagus");
//   } else if (asrama === 4) {
//     console.log("Asrama ke-" + asrama + " adalah asrama terbaik dan terbagus");
//   } else {
//     console.log("Asrama ke-" + asrama + " adalah asrama terbaik");
//   }
// }

// // punya angkot = 15 angkot 7 rusak angkot 9 sedang diperbaiki

// let angkot = 1;
// for (angkot; angkot <= 15; angkot++) {
//   switch (true) {
//     case (angkot === 7):
//       console.log("Angkot no." + angkot + " sedang rusak");
//       break;
//     case (angkot === 9):
//       console.log("Angkot no." + angkot + " sedang diperbaiki");
//       break;
//     default:
//       console.log("Angkot no." + angkot + " beroprasi dengan baik");
//   }
// }


// 2B- for in loop (untuk objek)

const person = { name: "John Doe", age: 30, city: "New York" };

for (let property in person) {
  console.log(property + ": " + person[property]);
}




//tugas

const student = {namanya: "fawwaz", umurnya: 15, sekolahnya: "abudzar", alamatnya: "bekasi"};

console.log("yang sederhana adalah: " + student.namanya)
for (let students in student) {
  console.log(students + " adalah " + student[students]);
}




// 3- for of loop (untuk array)

const menu = ["pizza", "burger", "sushi", "pasta", "kebab", "ramen", "tempura", "spaghetti"];

console.log("yang sederhana adalah: " + menu[2])
for (let menus of menu) {
  console.log("Saya suka makan " + menus);
}


// break dan continue

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; //hilang angka 5
  }
  console.log("Hello, World! " + i + "x");
}

for (let a = 1; a <= 10; a++) {
  if (a === 5) {
    break; //berhenti ketika 5
  }
  console.log("Hello, World! " + a + "x");
}


// latihan 

for (let angka = 0; angka <= 10; angka++) {
  if(angka === 7) {
    break;
  } else if (angka % 2 === 1) {
    console.log(angka + " adalah angka ganjil");
  } else {
    continue;
  }
};



