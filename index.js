document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("asciiForm");
  const outputDiv = document.getElementById("asciiOutput");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden

    const word = document.getElementById("wordInput").value;
    const asciiArray = convertWordToAscii(word);
    const binaryArray = asciiArray.map(dezimalZuBinaer);

    outputDiv.innerHTML = "<h2>Binärcode:</h2>";
    binaryArray.forEach((binaryCode, index) => {
      outputDiv.innerHTML += `<p>Buchstabe: ${word[index]} - Binär: ${binaryCode}</p>`;
    });
  });

  function convertWordToAscii(word) {
    let asciiArray = [];
    for (let i = 0; i < word.length; i++) {
      let asciiCode = word.charCodeAt(i);
      asciiArray.push(asciiCode);
    }
    return asciiArray;
  }

  function dezimalZuBinaer(zahl) {
    let binaer = [];
    while (zahl > 0) {
      binaer.push(zahl % 2);
      zahl = Math.floor(zahl / 2);
    }
    return binaer.reverse().join("").padStart(8, "0");
  }
});
