//Exercise 1
console.log("|Praktik 1|\n");
console.log("Minuman Kesukaan: ");
const MINUMAN_KESUKAAN = ["Air Es", "Es Kopi", "Es Teh", "Es Jeruk"];
console.log(MINUMAN_KESUKAAN);

console.log("\nSetelah ganti 2 elemen pertama.");
MINUMAN_KESUKAAN[0] = "Coca Cola";
MINUMAN_KESUKAAN[1] = "Sprite";
console.log(MINUMAN_KESUKAAN);

console.log("\nSetelah tambah minuman di depan array.");
MINUMAN_KESUKAAN.unshift("Fanta");
console.log(MINUMAN_KESUKAAN);

//Exercise 2 
console.log("\n|Praktik 2|\n");
function penjumlahan(n){
    let hasil = 0;

    for(let i = 1; i <= n; i++){
        hasil += i;
    }

    return hasil;
}

let hasil1 = penjumlahan(1);
let hasil2 = penjumlahan(2);
let hasil3 = penjumlahan(5);
let hasil4 = penjumlahan(50);
console.log("Inputan 1 : ", hasil1);
console.log("Inputan 2 : ", hasil2);
console.log("Inputan 5 : ", hasil3);
console.log("Inputan 50: ", hasil4);