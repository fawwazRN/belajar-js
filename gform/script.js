// // // latihan 1

// // let username = null;
// // let nickname = null;
// // let lanjut = (username || nickname) ?? "Anonimous";

// // console.log(lanjut);


// // // latihan 2
// // let price = null;
// // let harga = price ?? 100;

// // console.log(harga);


// // // latihan 3
// // let isLoggedIn = undefined;
// // if (isLoggedIn === (null || undefined)) {
// //     isLoggedIn = "guest";
// // } 
// // else {
// //     isLoggedIn = "user";
// // }

// // console.log(isLoggedIn);


// // // ============================

// // //if else

// // // latihan 1
// // let usiaSiswa = 16;

// // if (usiaSiswa < 12){
// //     console.log("siswa tidak bisa mendaftar");
// // } else if (usiaSiswa > 15){
// //     console.log("siswa bisa mendaftar tanpa syarat");
// // } else {
// //     console.log("siswa bisa mendaftar dengan izin orang tua");
// // }


// // // latihan 2
// // let nilaiTertulis = 50;
// // let nilaiProyek = 90;
// // let kelulusan = nilaiTertulis >= 70 && nilaiProyek >= 60 ? "lulus" : "tidak lulus";

// // console.log(kelulusan);


// // // switch

// // // latihan 1

// let lampu = "kuning";

// switch (lampu) {
//     case "merah":
//         console.log("berhenti");
//         break;
//     case "kuning":
//         console.log("siap-siap");
//         break;
//     case "hijau":
//         console.log("jalan");
//         break;
//     default:
//         console.log("warna tidak dikenal");
// }



// // latihan 2

// let harga = 400000;

// switch (true) {
//     case (harga < 100000):
//         console.log("tidak ada diskon");
//         break;
//     case ((harga >= 100000) && (harga <= 299999)):
//         console.log(0.10 * harga);
//         break;
//     default:
//         console.log(0.20 * harga);
//         break;
// }


// // latihan 3

// let pelajaran = prompt("Masukkan kode pelajaran: ");

// switch (pelajaran) {
//     case "1" :
//         alert("Matematika");
//         break;
//     case "2" :
//         alert("fisika");
//         break;
//     case "3" :
//         alert("biologi");
//         break;
//     case "4" :
//         alert("kimia");
//         break;
//     default:
//         alert("mata pelajaran tidak tersedia");
//         break;
// }



// // latihan 4

// let menu = prompt("Masukkan nomor menu: ");

// switch (menu) {
//     case "1" :
//         alert("ayam goreng");
//         break;
//     case "2" :
//         alert("burger");
//         break;
//     case "3" :
//         alert("kentang goreng");
//         break;
//     case "4" :
//         alert("minuman");
//         break;
//     default:
//         alert("Menu tidak tersedia");
//         break;
// }


// // latihan 5

// let hariKerja = prompt("masukkan hari kerja:")

// switch (hariKerja) {
//     case "senin":
//     case "selasa":
//     case "rabu":
//     case "kamis":
//     case "jumat":
//         alert("09.00 - 17.00");
//         break;
//     case "sabtu":
//         alert("09.00 - 13.00");
//         break;
//     case "minggu":
//         alert("Libur");
//         break;
//     default:
//         alert("Hari ini tidak ada di kalender");
//         break;
// }


// for (let i = 1; i <= 3; i++) { for (let j = 1; j <= 2; j++) { console.log(i, j); }}
// // // latihan 6

// for (let angka = 1; angka <= 12; angka++) {
//     if (angka === 8){
//         continue;
//     } else {
//         console.log(angka);
//     }
// }

ember = 1;

while (ember <= 10) {
    console.log("ember ke " + ember + " telah terisi");
    ember++;
}



// for (let jumlahAngka = 1; jumlahAngka <= 100; jumlahAngka++) {
//     console.log(jumlahAngka);
// }
