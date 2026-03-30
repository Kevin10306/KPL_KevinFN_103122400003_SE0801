const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const LowerCountElement = document.getElementById("hk");

const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");

const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");

editorElement.addEventListener("input", (event) => {
    updateCount(event.target.value);
});

function updateCount(text) {
    let lower = 0;

    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            lower++;
        }
    }

    charCountElement.textContent = text.length;
    LowerCountElement.textContent = lower
}

buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
});

buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.add("mode-gelap");
});

upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCount(editorElement.value);
});

lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCount(editorElement.value);
});