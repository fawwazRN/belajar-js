let x = 10;
console.log((x += 5)); // x = x + 5
console.log((x -= 3)); // x = x - 3
console.log((x *= 2)); // x = x * 2
console.log((x /= 4)); // x = x / 4
console.log((x %= 4)); // x = x % 3

// 2. aritmatika operator
let v = 4;
let c = 3;
console.log(v + c);

// increment
let z = 3;
console.log(z++); //belum berubah karena sedang proses
console.log(z); // baru berubah
let b = 10;
console.log(++b); // langsung berubah
console.log(b);

// decrement
let zMin = 3;
console.log(zMin--); //belum berubah karena sedang proses
console.log(zMin); // baru berubah
let bMin = 10;
console.log(--bMin); // langsung berubah
console.log(bMin);

// pangkat
let a = 20;
console.log(a ** 6); // 2 pangkat 3 = 8



// 3. perbandingan operator
let aa = 5;
let bb = "5";
console.log(aa == bb); // false ==> nilainya harus sama agar true tetapi tipe datanya boleh beda
console.log(aa != bb); // true ==> nilainya harus beda agar true
console.log(aa === bb); // false ==> nilainya harus sama dan tipe datanya harus sama agar true
console.log(aa !== bb); // true ==> nilainya harus beda dan tipe datanya harus beda agar true

let cc = 7;
let dd = "6";
console.log(cc > dd); // true ==> lebih dari (7 lebih dari 6 adalah true)
console.log(cc < dd); // false ==> kurang dari (7 kurang dari 6 adalah false)
console.log(cc >= dd); // true ==> lebih dari sama dengan (7 lebih dari 6 / sama dari 6 tetapi 7 lebih dari 6 adalah true)
console.log(cc <= dd); // false ==> kurang dari sama dengan (7 kurang dari 6 / sama dari 6 tetapi dua duanya adalah false)



// 4. logika operator => (&& (and), || (or), ! (not))

// && (and)
console.log((10 % 2 == 1) && (12 == 11)); // false karena kedua kondisi harus benar
let aAnd = 10 + 10 == 20;
let bAnd = 9 % 2 == 1;
console.log((aAnd) && (bAnd)) // true karena keduanya benar kondisinya

// || (or)
console.log((10 + 2 == 12) || (12 === "12")); // true karena salah satu kondisi harus benar
let aOr = 3 + 3 - 3 == 0;
let bOr = 3*3 == 6;
console.log((aOr) || (bOr)); // false karena kedua kondisi salah

// ! (not)
let aNot = 10 == 10;
console.log(!aNot); // false karena kondisinya benar
let bNot = 10 == 11;
console.log(!bNot); // true karena kondisinya salah




// ====================================================================================================




// materi tambahan ==> string operator
let name1 = "Muhammad ";
let name2 = "Sulaiman";
let fullName = name1 + name2;
console.log(fullName); // Muhammad Sulaiman

// latihan nama sendiri
let nama1 = "Fawwaz ";
let nama2 = "Romzi ";
let nama3 = "Nagib";
let namaPenuh = nama1 + nama2 + nama3;
console.log(namaPenuh); // Fawwaz Romzi Nagib


//latihan akhir
let abc = -1;
let bcd = 0;
console.log(abc > 0 || bcd === 0);