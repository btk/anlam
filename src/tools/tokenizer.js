export default function tokenizer(options, anlam) {
  let tokenized = options.string
    .replace(/[,.;:?!'"]/g, ``)
    .split(` `);

  let tokenizedString = tokenized.join(`, `);

  anlam.set(tokenizedString, tokenized);
  return anlam;
}
