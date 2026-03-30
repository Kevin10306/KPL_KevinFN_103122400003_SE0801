const str = "Bar bar bar";

function hitung(str, hitung) {
  let jumlah = 0;
  for (const c of str) {
    if (hitung === "huruf" && c === ' ') continue;
    jumlah++;
  }
  return jumlah;
}

//main
console.log(
   hitung(str, "semua") // Harusnya 11
);

console.log(
  hitung(str, "huruf") // Harusnya 9
);

hitung(str, "huruf"); // Tidak terjadi apa-apa