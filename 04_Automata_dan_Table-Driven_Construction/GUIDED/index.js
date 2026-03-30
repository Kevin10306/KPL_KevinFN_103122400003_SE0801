// Mengambil container tombol mode gelap/terang
const modeDivElement = document.getElementById("mode-div");

// Class untuk menyimpan dan mengubah tampilan state mode
class modeState {
    #state

    // Mode default saat halaman dibuka adalah terang
    constructor() {
        this.#state = "light";
    }

    // Mengubah class CSS pada body berdasarkan mode lama dan mode baru
    #toggleMode(oldState, newState) {
        const html = document.documentElement;
        const textarea = document.getElementById("editor-kecil");

        html.classList.remove(`${oldState}-mode`);
        textarea.classList.remove(`form-${oldState}-mode`);

        html.classList.add(`${newState}-mode`);
        textarea.classList.add(`form-${newState}-mode`);
    }

    get() {
        return this.#state;
    }

    // mode set baru lalu terapkan perubahan ke tampilan
    set(newState) {
        if (newState == this.#state) return;

        const oldState = this.#state;
        this.#state = newState;

        this.#toggleMode(oldState, newState);
    }
}

// Membuat objek state manager untuk mode tampilan
const mode = new modeState();

// Listen klik pada tombol mode, lalu ubah mode sesuai value tombol
modeDivElement.addEventListener("click", (event) => {
    const btnElement = event.target.closest("button");
    if (!btnElement) return;

    mode.set(btnElement.value);
});

const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const LowerCountElement = document.getElementById("hk");
const UpperCountElement = document.getElementById("hb");

const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");

const buttonLightElement = document.getElementById("mode-terang");
const buttonDarkElement = document.getElementById("mode-gelap");

function updateCount(text) {
    let lower = 0;
    let upper = 0;

    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            lower++;
        } else if (char >= 'A' && char <= 'Z') {
            upper++;
        }
    }

    charCountElement.textContent = text.length;
    LowerCountElement.textContent = lower;
    UpperCountElement.textContent = upper;
}

editorElement.addEventListener("input", (event) => {
    updateCount(event.target.value);
});

upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCount(editorElement.value);
});

lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCount(editorElement.value);
});

buttonLightElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("mode-terang");
});

buttonDarkElement.addEventListener("click", (event) => {
    document.documentElement.classList.add("mode-gelap");
});