// Ziel: Wort zu binär nach ASCII Formel
// Alternativ mit Zahlen von 1-24

// Wort zu ASCII:
// L = ASCII 76
// O = ASCII 79
// V = ASCII 86
// E = ASCII 69

// ASCII zu BINAER

// LOOP:
// DECIMAL durch 2, Rest speichern
// DECIMAL ERGEBNIS durch 2, Rest speichern

// Bsp:
// 69 / 2 = 34, Rest 1
// 34 / 2 = 17, Rest 0
// 17 / 2 =  8, Rest 1
//  8 / 2 =  4, Rest 0
//  4 / 2 =  2, Rest 0
//  2 / 2 =  1, Rest 0
//  1 / 2 =  0, Rest 1

// 69 =              1000101

////////////// < ---- > //////////////
////////////// < ---- > //////////////
////////////// < ---- > //////////////

// zunächst brauche ich ein JSON mit Nr und ASCII Zeichen
// server per node.js (siehe server.js) auf localhost
// per fs auslesen:
const fs = require("fs");

fs.readFile("asciiMapping.json", "utf8", (err, data) => {
  if (err) {
    console.error("Fehler beim Laden der Datei:", err);
    return;
  }
  const jsonData = JSON.parse(data);
  // console.log(jsonData["69"]);

  // dann kommt Buchstabe für Buchstabe des Wortes in ein Array
  // hardcoded fpr testing:
  const Eingabe = "LOVE";

  const BuchstabenArray = Eingabe.split("");
  console.log(BuchstabenArray);

  // nun kann ich das BuchstabenArray mit dem JSON vergleichen (Buchstabe in JSON suchen)

  let ZahlenArray = [];

  BuchstabenArray.forEach(function (char) {
    console.log(char);

    const asciiCode = char.charCodeAt(0);

    if (jsonData[asciiCode]) {
      console.log(`ASCII-Value: ${asciiCode}`);
      // Zahl speichern in einem neuen Array (ZahlenArray)
      ZahlenArray.push(asciiCode);
      console.log(ZahlenArray);
    }
  });

  // für jeden Buchstaben nun die Binär-Rechnung durchführen

  function dezimalZuBinaer(zahl) {
    let binaer = [];
    while (zahl > 0) {
      binaer.push(zahl % 2);
      zahl = Math.floor(zahl / 2);
    }
    return binaer.reverse().join("").padStart(8, "0");
  }

  let binaerCodeArray = [];

  ZahlenArray.forEach(function (zahl) {
    const binaerCode = dezimalZuBinaer(zahl);
    console.log(`Ascii-Wert: ${zahl}, Binaer: ${binaerCode}`);
    binaerCodeArray.push(binaerCode);
  });

  console.log("Binaer-Code-Array: ", binaerCodeArray);
  binaerCodeArray.forEach((code) => {
    console.log(code);
  });
});
