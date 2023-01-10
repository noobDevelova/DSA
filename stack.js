// Stack
// Data Structure & Algorithm
// LIFO (Last In First Out)
// Yang terkahir masuk adalah yang pertama diambil

// Algoritma

// 1. Buat wadah piring
let tumpukanPiring = [];

// 2. Memasukan Piring Ke Wadah, Maksimal piring yang ditumpuk adalah 10 piring
const tambahPiring = (piring, wadah) => {
  if (wadah.length >= 10) {
    console.log("Wadah sudah Penuh!");
    return false;
  } else {
    wadah.push(piring);
    return wadah;
  }
};

// 3. Mengambil piring dari wadah, apabila wadah sudah kosong maka tampilkan "Wadah sudah kosong"
const ambilPiring = (wadah) => {
  if (wadah.length < 1) {
    console.log("Wadah Kosong, tidak ada piring yang bisa diambil.");
  } else {
    wadah.pop(wadah);
  }
};

tambahPiring("Piring1", tumpukanPiring);
tambahPiring("Piring2", tumpukanPiring);
tambahPiring("Piring3", tumpukanPiring);
tambahPiring("Piring4", tumpukanPiring);
tambahPiring("Piring5", tumpukanPiring);
tambahPiring("Piring6", tumpukanPiring);
tambahPiring("Piring7", tumpukanPiring);
tambahPiring("Piring8", tumpukanPiring);
tambahPiring("Piring9", tumpukanPiring);
tambahPiring("Piring10", tumpukanPiring);
console.log(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
ambilPiring(tumpukanPiring);
console.log(tumpukanPiring);
