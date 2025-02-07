function sayHello() {
    console.log("Hello, World!");
}

sayHello();

// //celcius to fahrenheit
// function salam() {
//     document.getElementsByClassName("judul")[0].innerHTML = ("salam dulu dong");
// }

function convertCelciusToFahrenheit(temprature) {
    const tempratureInFahrenheit = 9/5 * temprature + 32;

    console.log('hasil konversi: ' + tempratureInFahrenheit);
}
const temp = 90;
convertCelciusToFahrenheit(temp);
console.log (convertCelciusToFahrenheit); // yang terjadi adalah menulis isi function ke konsol


// //nilai ujian
// function nilaiUjian(nilai){
//     if (nilai >= 80) {
//         console.log("Selamat, kamu mendapatkan nilai A");
//     } else if (nilai >= 70) {
//         console.log("Selamat, kamu mendapatkan nilai B");
//     } else if (nilai >= 60) {
//         console.log("Selamat, kamu mendapatkan nilai C");
//     } else if (nilai >= 50) {
//         console.log("Selamat, kamu mendapatkan nilai D");
//     } else {
//         console.log("Selamat, kamu tidak lulus");
//     }
// }

// nilaiUjian(15);
// nilaiUjian(25);
// nilaiUjian(35);
// nilaiUjian(45);
// nilaiUjian(55);
// nilaiUjian(65);
// nilaiUjian(75);
// nilaiUjian(85);
// nilaiUjian(95);
// nilaiUjian(100);


// //luas & keliling persegi
// function Persegi(panjang = 1, lebar = 1){
//     const luas = panjang * lebar;
//     const keliling = 2 * (panjang + lebar);
//     console.log("========================");
//     console.log("Luas persegi: " + luas);
//     console.log("Keliling persegi: " + keliling);
//     console.log("========================");
// }

// const nilai = 7;
// Persegi();
// Persegi(nilai, 2);
// Persegi(7, 6);
// Persegi(5, 10);
// Persegi(19, 5);
// Persegi(12, 3);
// Persegi(15, 4);
// Persegi(4, 2);
// Persegi(7, 3);
// Persegi(23, 4);
// Persegi(25, 6);


// function sayHello() {
//     console.log("Hello, selamat ");
// }
// console.log(sayHello());


// function tambah (a,b) {
//     return a + b;
// }
// let hasil = tambah(1,2);
// console.log(hasil);
// console.log(tambah(3,4));
// console.log(tambah(3));



// function lingkaran (jarijari) {
//     if (jarijari % 7 === 0) {
//         let lingkaran = 22/7 * jarijari * jarijari;
//         return lingkaran;    
//     } else {
//         let lingkaran = 3.14 * jarijari * jarijari;
//         return lingkaran;    
//     }
// }

// console.log(lingkaran(10));
// console.log(lingkaran(5));
// console.log(lingkaran(7));


function umur (usia) {
    if (usia >= 18) {
        return "selamat anda bisa mendaftar";
    } else if (usia < 18) {
        return "maaf, anda belum cukup umur";
    } else {
        return "error";
    }
}

console.log(umur(17));
console.log(umur(18));
console.log(umur("aaa"));


function nilai (angka) {
    switch (true){
        case angka < 60:
            return "E";
        case angka < 70:
            return "D";
        case angka < 80:
            return "C";
        case angka < 90:
            return "B";
        case angka < 100:
            return "A";
        default:
            return "error";
    }
}

console.log(nilai(59));
console.log(nilai(60));
console.log(nilai(69));
console.log(nilai(70));
console.log(nilai(79));
console.log(nilai(80));
console.log(nilai(89));
console.log(nilai(90));
console.log(nilai(99));
console.log(nilai(100));
console.log(nilai(101));