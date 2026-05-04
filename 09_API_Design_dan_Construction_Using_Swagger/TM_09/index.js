const express = require("express");
const app = express();
app.use(express.json());

// Fungsi hash sederhana dari nama → angka 1-100
// Tanpa library apapun, murni mengandalkan nama
function generateAngka(nama) {
  let hash = 0;
  for (let i = 0; i < nama.length; i++) {
    // Gunakan char code dan posisi untuk hash
    hash = hash * 31 + nama.charCodeAt(i);
    hash = hash & hash; // Konversi ke 32-bit integer
  }
  // Ambil nilai absolut, lalu modulo 100, range 1-100
  return (Math.abs(hash) % 100) + 1;
}

app.post("/", (req, res) => {
  const { nama, tebakan } = req.body;

  // Validasi input
  if (!nama || tebakan === undefined) {
    return res.status(400).json({ jawaban: "Field 'nama' dan 'tebakan' wajib diisi." });
  }

  if (typeof tebakan !== "number" || tebakan < 1 || tebakan > 100) {
    return res.status(400).json({ jawaban: "Tebakan harus berupa angka antara 1 dan 100." });
  }

  // Generate angka acak berdasarkan nama (case-sensitive, tetap per nama)
  const angkaRahasia = generateAngka(nama);

  if (tebakan === angkaRahasia) {
    return res.json({ jawaban: `Benar sekali! Tebakannya adalah ${tebakan}.` });
  } else if (tebakan > angkaRahasia) {
    return res.json({ jawaban: "Tebakanmu terlalu tinggi!" });
  } else {
    return res.json({ jawaban: "Tebakanmu terlalu rendah!" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});