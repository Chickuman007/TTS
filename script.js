const textInput = document.getElementById("textInput");
const speakButton = document.getElementById("speakButton");

let speech = new SpeechSynthesisUtterance();

speakButton.addEventListener("click", () => {

    const text = textInput.value;

    if (text.trim() !== "") {
        speech.text = text;
        speech.lang = "en-US";
        window.speechSynthesis.speak(speech);
        speakButton.textContent = "Speaking...";
    }
});

speech.addEventListener("end", () => {
    speakButton.textContent = "SPEAK";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        window.speechSynthesis.cancel();
        speakButton.textContent = "SPEAK";
    }
});