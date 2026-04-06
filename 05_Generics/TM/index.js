// Tambah JSDoc di sini
/** 
 * @param {number} value 
 * @returns {string|number}
 * @throws {Error} 
*/
function zzzzOrNum(value) {
    if (typeof value != "number") {
      throw new Error("Input harus berupa angka!");
    }

    if (value % 5 == 0 && value % 3 == 0) {
      return "FizzBuzz";
    } else if (value % 5 == 0) {
      return "Buzz";
    } else if (value % 3 == 0) {
      return "Fizz";
    }

    return value;
}

// Tambah JSDOC di sini
/**
 * @param {number[]} sequence 
 * @returns {(string|number)[]}
 * @throws {Error} 
*/
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
      throw new Error("Input harus berupa array!");
    }

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};