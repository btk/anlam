export default function tokenizer(options, anlam){
  let tokenized = options.string
    .replace(/[,.;:?!'"]/g, ``)
    .split(` `);

  let tokenizedString = tokenized.join(`, `);
  if(typeof anlam === "undefined"){
    return tokenized;
  }

  anlam.set(tokenizedString, tokenized);
  return anlam;
}
