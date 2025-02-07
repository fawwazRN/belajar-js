// DATA TYPES CONVERSION
// -----Eksplisit-----
// 1. Konversi ke String: 
// Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara, 
// yaitu menggunakan fungsi String(variabelnya) dan metode variabelnya.toString(). 
// Berikut adalah contoh dari penggunaan kedua cara tersebut:

// a. Variabel awal
const nomor = 123;
const bolehan = false;

// b. Pengkonversian
const strNomor = String(nomor)
const strBolehan = bolehan.toString()

// c. Cek Hasil
console.log(strNomor)
console.log(strBolehan)

// ~{Alternatif}~
console.log(String(nomor))
console.log(bolehan.toString())

// ~~Latihan
const age = 100000;
const hidup = false;

const ageStr = String(age);
const hidupStr = String(hidup)
const ageStr2 = age.toString();
const hidupStr2 = hidup.toString();

console.log(typeof(ageStr, hidupStr, ageStr2, hidupStr2))


// 2. Konversi ke Number
// Secara umum, untuk mengubah bentuk numerik, seperti “10”, “3.14” 
// dapat dilakukan dengan menggunakan fungsi Number(variabelnya). Selain dengan fungsi Number(), ada juga cara yang lebih spesifik, seperti fungsi parseInt(variabelnya) dan parseFloat(variabelnya).
// Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer). Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu. Ketika menemukan 
// karakter yang tidak bisa diubah menjadi angka, proses konversi terhenti di sana. Dengan kemampuan ini, parseInt() dapat digunakan untuk mengubah nilai string, seperti 
// "20CM", "64px", atau angka dengan satuan lainnya. Berikut contoh penggunaannya:

const strNumber = '123';
const strFloat = '1.50';
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString, floatFromString, numFromBoolean)
console.log(numFromString * floatFromString - numFromBoolean)

const cm = '20cm';
const px = '2000px';
const floatFromString2 = parseFloat(strFloat);
const numFromCm = parseInt(cm);
const numFromPx= parseInt(px)

console.log("Parse Float dari String:", typeof(floatFromString2), floatFromString2)
console.log("Dari cm (string) ke Number:", typeof(numFromCm), numFromCm)
console.log("Dari px (string) ke Number:", typeof(numFromPx), numFromPx)

// 3. Konversi ke Boolean
// Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean()variabelnya. Sama seperti fungsi sebelumnya, 
// kita cukup memberikan nilai yang akan diubah di antara tanda kurung. Berikut adalah contoh penggunaan fungsi Boolean():
var adaIsiStr = 'Home sweet Home';
var adaIsiNum = 2806;
var gakAdaIsi = NaN;

var strToBoolean = Boolean(adaIsiStr);
var numToBoolean = Boolean(adaIsiNum);
var emptyToBoolean = Boolean(gakAdaIsi);

console.log(strToBoolean + ";" + numToBoolean + ";" + emptyToBoolean)
