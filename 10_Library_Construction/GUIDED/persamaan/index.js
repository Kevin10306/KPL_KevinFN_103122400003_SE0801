/**
 * persamaan linear satu variabel dan dua suku
 * @param {string} x
 * @param {number} a
 */

export function pslv_dua(x, a) {
    // 3x = 12
    const coeff = parseInt(x);
    const hasil = a / coeff;

    return {
        "x": x,
        "dengan": "=",
        hasil
    }
}

/** * persamaan linear satu variabel dan tiga suku
 * @param {string} x
 * @param {number} a
 * @param {number} b
 */

export function pslv_tiga(x, a, b) {
    // y - 8 = 10
    let hasil = 0;

    //jika hanya satu koefisien
    if (x.length === 1) {
        hasil = b - a;
        return {        
            "x": x,
            "dengan": "=",
            hasil
        }
    } else if (x.length === 2) {
        const coeff = parseInt(x);
        hasil = (b - a) / coeff;

        return {
            "x": x,
            "dengan": "=",
            hasil
        }
    }
}

export function ptlsv_dua(x, a, op, b) {
    let hasil = 0;

    const balikkan_op = {
        ">": "<",
        "<": ">",
        ">=": "<=",
        "<=": ">="
    }

    if (x.length === 1) {
        hasil = b - a;
        return {          // ← tambah return
            "x": "x",
            "dengan": op,
            hasil
        }
    } else if (x.length >= 2) {
        const coeff = parseInt(x);
        hasil = (b - a) / coeff;

        const op_baru = coeff <= -1 ?
            balikkan_op[op] : op;

        return {
            "x": "x",
            "dengan": op_baru,
            hasil
        }
    }
}