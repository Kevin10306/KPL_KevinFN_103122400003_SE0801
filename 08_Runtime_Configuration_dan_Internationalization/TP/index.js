const waktu = new Date();

const formatwaktu = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

    console.log(formatwaktu.format(waktu));