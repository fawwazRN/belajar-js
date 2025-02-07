// TIPE VARIABEL
// const pi = 3.14; //const value(nilai)nya tetap, tidak bisa diubah
// let name = "Albar"
// name = "Shalahuddin" // Sedangkan let valuenya fleksibel, bisa diubah
// console.log(pi)
// console.log(name)

// PENAMAAN VARIABEL
// let name_1 = "Shahih"; //Begini betul
// let 1name = "Khattha'"; //Begini error, tidak boleh diawali nomor
// let firstPerson = "Mumtaz, jika 2 kata, kata kedua huruf depannya besar";
// let first_person = "Jayyid jiddan, diberi underscore diantara 2 kata";

// SCOPE Variable
// 1. Global Scope: bisa digunakan di seluruh tempat, dideklarasi diluar function dan condition
// 2. Local Scope: hanya bisa digunakan di tempat dia dideklarasi, seperti pada sebuah function atau condition

// REASSIGNMENT (Deklarasi Ulang)
// const Name = "Albar";
// const name = "Musa"; // Error, tidak bisa dideklarasi ulang
// let nama = "Albar";
// let nama = "Akbar"; // Error Juga, sama alasannya
// Jadi, variabel tidak bisa dideklarasi ulang, hanya bisa nilainya yang diubah

// nama = "Akbar"; //Baru bisa kalau begini
// Name = "Arubaa"; // ingat, const gak bisa diubah loh!

// JENIS LAIN DARI VARIABEL
// 'var', jenis variabel yang bisa semuanya. Nilainya bisa diubah dan bisa juga
// dideklarasi ulang. Tipe ini jarang dipakai lagi, karena susah untuk mengetahui
// ERRORS
// var address = "Tangerang";

// _____________________________

// DATA TYPES
// -----Tipe Primitif-----
// 1. String: sekumpulan karakter yang diapit oleh tanda kutip.
let pembukaan = "Ahlan wa Sahlan, hadza yaumul jumu'ah";
pembukaan = 'Saya berkata "Assalaamualaikum"';

// --VAR TYPE CHECKER--
console.log(typeof(pembukaan)) // Cek hasil di konsol
// --------------------

// 2. Number: representasi numerik, baik bilangan bulat maupun desimal.
let angka1 = 20;
let angka2 = 10;
// Tipe Number bisa digunakan dalam operasi hitung
document.writeln(angka1 + angka2) // Cek hasil di dokumen

// 3. Boolean: hanya memiliki dua nilai; true atau false.
let NAMA = true;
// tipe ini akan tampil dalam sebuah persamaan
let name1 = "Albar"
let name2 = "Baitun";
console.log(name1 == name2)

// 4. Null: nilai yang secara eksplisit menunjukkan "tidak ada nilai"
let cardNumber = null;
console.log(cardNumber)
// dia punya nilai, tapi belum ada isinya

// 5. Undefined: nilai yang diberikan secara otomatis ke variabel yang belum diinisialisasi.
let belumDiDeclare;
console.log(belumDiDeclare)
// belum di declare dan gak punya nilai

// 6. BigInt: representasi bilangan bulat yang sangat besar.
let kebanyakanAngka = 1200000;
console.log(typeof(kebanyakanAngka)) //--VAR TYPE CHECKER--






// -----Tipe Kompleks-----
// 1. Array: Kumpulan nilai yang diurutkan.
// Array adalah tipe data yang berisi kumpulan nilai yang terurut berdasarkan indeks.
// Setiap elemen di dalam array memiliki indeks yang dimulai dari angka 0.
//                (0)      (1)       (2) dst.
const santri = ["Albar", "Alvar", "Arubaa", 6, true, null]; // Di dalam kurung siku, tiap nilai dipisahkan koma
console.log(santri[0]) // Cara memilih salah satu nilainya.
console.log(santri[3])

// 2. Object: Kumpulan pasangan kunci-nilai
// Rumusnya:
// variable = {key: value}
const abtMe = {
    namae: "アルバーマリク",
    sai: 15,
    shumi: ["Reciting Qur'an", "デザイニング", "寝る"]
};
console.log(abtMe.namae, "loves", abtMe.shumi[1])
