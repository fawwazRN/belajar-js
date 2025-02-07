var angka = parseInt(prompt("Masukkan angka: "));
// if (angka == 1) {
//   alert("Angka adalah 1");
// } else if (angka == 2) {
//   alert("Angka adalah 2");
// } else if (angka == 3) {
//   alert("Angka adalah 3");
// } else {
//   alert("Angka bukan 1, 2, atau 3");
// }
// console.log(angka);

// switch angka
// switch (angka) {
//   case 1:
//     alert("Angka adalah 1");
//     break;
//   case 2:
//     alert("Angka adalah 2");
//     break;
//   case 3:
//     alert("Angka adalah 3");
//     break;
//   default:
//     alert("Angka bukan 1, 2, atau 3");
//     break;
// }

// // switch nama buah
// var buah = prompt("Masukkan nama buah: ");

// switch (buah) {
//   case "apel":
//   case "jeruk":
//     alert("ini 2 buah yaa azzam sidiq muntahhar");
//     break;
//   case "mangga":
//     alert("Mangga memiliki warna kuning");
//     break;
//   default:
//     alert("Buah yang anda masukkan belum terdaftar");
//     break;
// }

// // switch hari
// const day = new Date().getDay();
// // if (day === 0) {
// //     alert("Hari ini adalah Minggu");
// // } else if (day === 1) {
// //     alert("Hari ini adalah Senin");
// // } else if (day === 2) {
// //     alert("Hari ini adalah Selasa");
// // } else if (day === 3) {
// //     alert("Hari ini adalah Rabu");
// // } else if (day === 4) {
// //     alert("Hari ini adalah Kamis");
// // } else if (day === 5) {
// //     alert("Hari ini adalah Jumat");
// // } else if (day === 6) {
// //     alert("Hari ini adalah Sabtu");
// // } cara ribet

// switch (day) {
//   case 0:
//     alert("Hari ini adalah Minggu");
//     break;
//   case 1:
//     alert("Hari ini adalah Senin");
//     break;
//   case 2:
//     alert("Hari ini adalah Selasa");
//     break;
//   case 3:
//     alert("Hari ini adalah Rabu");
//     break;
//   case 4:
//     alert("Hari ini adalah Kamis");
//     break;
//   case 5:
//     alert("Hari ini adalah Jumat");
//     break;
//   case 6:
//     alert("Hari ini adalah Sabtu");
//     break;
// } // cara lebih rapi

//latihan
// const makanan = prompt("Masukkan nama makanan / minuman /n cth: nasi, daging, susu, soda, burger, bimoli (minyak) atau jus (air)");

// switch (makanan) {
//     case "nasi":
//     case "daging":
//     case "susu":
//     case "jus":
//     case "air":
//         alert("Makanan / minuman ini sehat dan bergizi");
//         break;
//     case "bimoli":
//     case "minyak":
//         alert("Makanan / minuman ini tidak enak dan tidak sehat dan merusak tubuh kalau tidak dimasak dan ditambah apa apa");
//         break;
//     case "burger":
//     case "soda":
//         alert("Makanan / minuman ini tidak mengapa, asal jangan keseringan");
//         break;
//     default:
//         alert("Makanan / minuman yang anda masukkan belum terdaftar");
//         break;
// }

// latihan 2
const kategoriLomba = prompt(
  "Masukkan kategori lomba: poster / hafalan / website / robot / tenis meja / karate / boxing / futsal / basket / volly / renang / tarik tambang 300 kg / perang dunia ke 200"
);

switch (kategoriLomba) {
  case "poster":
  case "hafalan":
  case "website":
  case "robot":
  case "tenis meja":
    alert(
      "Kategori lomba ini bermain di dalam ruangan, diikuti oleh siswa diatas 9 tahun"
    );
    break;
  case "karate":
  case "boxing":
  case "futsal":
  case "basket":
  case "volly":
    alert(
      "Kategori lomba ini bermain di luar ruangan, diikuti oleh siswa di atas 15 tahun"
    );
    break;
  case "renang":
  case "tarik tambang 300 kg":
  case "perang dunia ke 200":
    alert(
      "Kategori lomba ini berbahaya, melelahkan, dan dapat menderita penyakit berat hingga kematian, diikuti oleh siswa 70 tahun ke atas"
    );
    break;
  default:
    alert("Kategori lomba yang anda masukkan belum terdaftar");
    break;
}
