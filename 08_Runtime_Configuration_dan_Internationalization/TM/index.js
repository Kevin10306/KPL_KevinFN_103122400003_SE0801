require('dotenv').config();require('dotenv').config({ quiet: true });

async function ambilData() {
    try {
        const respon = await fetch(process.env.BASE_API);

        if (!respon.ok) {
            throw new Error('Gagal fetch data');
        }

        const data = await respon.json();

        const rateCNH = data.idr.cnh;
        const rateEUR = data.idr.eur;

        const formatTanggal = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        const formatRupiah = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        });

        const tanggal = formatTanggal.format(new Date());

        function tampilkan(nominalIDR) {
            const hasilCNH = (nominalIDR * rateCNH).toFixed(2);
            const hasilEUR = (nominalIDR * rateEUR).toFixed(2);

            console.log(
                `Kurs ${formatRupiah.format(nominalIDR)} pada ${tanggal} adalah CNH ${hasilCNH} dan ${hasilEUR} €`
            );
        }

        tampilkan(25000);
        tampilkan(50000);
        tampilkan(100000);

    } catch (error) {
        console.log(error);
    }
}

ambilData();