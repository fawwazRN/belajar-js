// // function expression
// function greetWorld(name = 'FULAN') {
//     console.log("Hello " + name);
// }
// greetWorld();

// const sayHello = function(addres = 'jl. boongan'){
//     console.log("Hello " + addres);
// }

// sayHello("fawwaz");

// // function rumus(p, l, t, phi, r){
// //     let kelilingPersegi = p*4;
// //     let luasPersegi = p*p;
// //     let phi = if (r/7 === 0) {
// //         let kelilingLingkaran = 2*22/7*r;
// //         let luasLingkaran = 22/7*r*r;
// //     } else {
// //         let kelilingLingkaran = 2*3.14*r;
// //         let luasLingkaran = 3.14*r*r;
// //     }
// //     let kelilingPersegiPanjang = 2*(p+l);
// //     let luasPersegiPanjang = p*l;
// // }

// // function kataPertama (teks){
// //     return teks
// // }
// // function nama (kalimat, name) {
// //     return kalimat + " " + name;
// // }

// // console.log (nama(kataPertama("Hello"), "Fawwaz"))

// function multiplier(x){
//     return function(y){
//         return x * y
//     }
// }

// const double = multiplier(2);
// console.log(double(3));

// function salam (nama, callback){
//     console.log("Halo " + nama);
//     callback();
// }

// function selamat(){
//     console.log("Selamat Pagi");
// }

// salam("Fawwaz", selamat);

// setTimeout(function(){
//     console.log("Halo Fawwaz");
// }, 2000);

//tugas

function nilai(nilai, callback) {
  console.log("nilainya " + nilai);
  callback();
}
function kelulusan(hasil) {
  if (nilai >= 60) {
    console.log("Selamat Anda Lulus");
  } else {
    console.log("Maaf Anda Tidak Lulus");
  }
}

nilai(50, kelulusan);

const penjumlahan = function (a, b) {
  return a + b;
};
const pengurangan = function (a, b) {
  return a - b;
};
const perkalian = function (a, b) {
  return a * b;
};
const pembagian = function (a, b) {
  return a / b;
};

console.log(penjumlahan(10, 2));
console.log(pengurangan(10, 2));
console.log(perkalian(10, 2));
console.log(pembagian(10, 2));

const cekGanjilGenap = function (angka) {
  if (angka % 2 === 0) {
    return "angka " + angka + " adalah bilangan genap";
  } else {
    return "angka " + angka + " adalah bilangan ganjil";
  }
};

// console.log(cekGanjilGenap(9));

// const nilaiKesulitanPelajaran = function  (nilai, callback){
//     console.log('tingkat kesulitannya adalah ' + nilai);
//     callback();
// }
// const total = function (){
//     if (nilai > 5) {
//         console.log('Pelajaran ini sulit untukmu');
//     } else if (nilai > 10) {
//         console.log('angka ini tidak terdaftar, mohon tulis ulang');
//     } else {
//         console.log('Maaf Anda Tidak Lulus');
//     }
// }

// nilai (50, total);

function pesan (nama, callback) {
  console.log ("nama saya adalah " + nama);
  callback();
};

function panggil (hasilAkhir) {
  console.log ("hallo" + nama);
}

pesan("Fawwaz", panggil);
