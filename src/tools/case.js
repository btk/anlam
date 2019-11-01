// https://gist.github.com/barlas/760cbf77b31c6922d159

export function lowerCase(string) {
  let letters = { "İ": `i`, "I": `ı`, "Ş": `ş`, "Ğ": `ğ`, "Ü": `ü`, "Ö": `ö`, "Ç": `ç` };

  string = string.replace(/(([İIŞĞÜÇÖ]))/g, (letter) => {
    return letters[letter];
  });
  return string.toLowerCase();
}

export function upperCase(string) {
  let letters = { "i": `İ`, "ş": `Ş`, "ğ": `Ğ`, "ü": `Ü`, "ö": `Ö`, "ç": `Ç`, "ı": `I` };

  string = string.replace(/(([iışğüçö]))/g, (letter) => {
    return letters[letter];
  });
  return string.toUpperCase();
}
