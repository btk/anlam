// https://gist.github.com/barlas/760cbf77b31c6922d159

export function lowerCase(options, anlam) {
  let letters = { "İ": `i`, "I": `ı`, "Ş": `ş`, "Ğ": `ğ`, "Ü": `ü`, "Ö": `ö`, "Ç": `ç` };

  let string = options.string.replace(/(([İIŞĞÜÇÖ]))/g, letter => letters[letter]).toLowerCase();
  if(typeof anlam === "undefined"){
    return string;
  }

  anlam.set(string);
  return anlam;
}

export function upperCase(options, anlam) {
  let letters = { "i": `İ`, "ş": `Ş`, "ğ": `Ğ`, "ü": `Ü`, "ö": `Ö`, "ç": `Ç`, "ı": `I` };

  let string = options.string.replace(/(([iışğüçö]))/g, letter => letters[letter]).toUpperCase();
  if(typeof anlam === "undefined"){
    return string;
  }

  anlam.set(string);
  return anlam;
}

export function titleCase(options, anlam) {
  let string = options.string.replace(/\w\S*/g, txt => upperCase({string: txt.charAt(0)}) + lowerCase({string: txt.substr(1)}));
  if(typeof anlam === "undefined"){
    return string;
  }

  anlam.set(string);
  return anlam;
}
