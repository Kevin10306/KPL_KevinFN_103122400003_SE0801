export function hitung_huruf(str) {

  if (!str) {
     return 0;
  }

  const huruf = str.match(/[a-zA-Z]/g);
  return huruf ? huruf.length : 0;
}

export function hitung_kata(str) {

  if (!str) {
     return 0;
  }

  const kata = str.match(/[a-zA-Z]+/g);
  return kata ? kata.length : 0;
}