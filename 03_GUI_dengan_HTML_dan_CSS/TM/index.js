const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const LowerCountElement = document.getElementById("hk");

const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");

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

upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCount(editorElement.value);
});

lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCount(editorElement.value);
});