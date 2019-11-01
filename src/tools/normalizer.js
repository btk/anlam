import { lowerCase } from './case';

export default function normalizer(options, anlam) {
  // remove extra white spaces
  let normalized = options.string
    .replace(/\s+/g, ` `)
    .replace(/[,.;:?!'"] /g, `$&`)
    .replace(/[,.;:?!'"]/g, `$& `)
    .replace(/\s+/g, ` `);

  // remove the last whitespace if exists
  if (normalized.substr(-1) === ` `) {
    normalized = normalized.substr(0, normalized.length - 1);
  }

  // lowercase all for easier processing
  normalized = lowerCase(normalized);

  anlam.set(normalized);
  return anlam;
}
