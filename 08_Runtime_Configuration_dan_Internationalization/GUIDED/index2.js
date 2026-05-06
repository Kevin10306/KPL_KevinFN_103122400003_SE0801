const angka = 10000000;
const angka2 = 9000000;

const formatter = new Intl.NumberFormat('id-ID', {
    notation: 'compact',
    compactDisplay: 'long'
});

console.log(formatter.format(angka + angka2));