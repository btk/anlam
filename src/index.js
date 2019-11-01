import tokenizer from './tools/tokenizer.js';
import normalizer from './tools/normalizer.js';

export default class Anlam {
  constructor(argument) {
    this.status = true;
    this.anlam = {
      string: ``,
      data: ``,
      history: []
    };

    if (typeof argument === `string`) {
      this.anlam.string = argument;
      this.anlam.data = argument;
    } else if (typeof argument === `object`) {
      if (argument.string) {
        argument.data = argument.string;
        if(typeof argument.history === `undefined`){
          argument.history = [];
        }
        this.anlam = argument;
      } else {
        argument.string = ``;
        argument.data = ``;
        argument.history = [];
        this.anlam = argument;
      }
    } else if (typeof argument === `undefined`) {
      // Already set to default
    } else {
      throw new Error(`Given argument is not valid`);
    }

    // Create history array
    this.history(`create`, this.out(), this.data());
  }

  history(action, string, data) {
    let historyObject = {
      order: this.anlam.history.length,
      action: action ? action : `none`,
      string: string ? string : ``,
      data: data ? data : ``
    };

    this.anlam.history.push(historyObject);
  }

  // Normalize the text into a lexically formal format
  normalize(options) {
    let argument = options;

    if (typeof argument === `object`) {
      argument.string = this.anlam.string;
    } else if (typeof this.anlam.normalize === `object`) {
      argument = this.anlam.tokenize;
      argument.string = this.anlam.string;
    } else {
      argument = {string: this.anlam.string};
    }

    let output = normalizer(argument, this);

    this.history(`normalize`, output);
    return output;
  }

  // Create tokens of words from string
  tokenize(options) {
    let argument = options;

    if (typeof argument === `object`) {
      argument.string = this.anlam.string;
    } else if (typeof this.anlam.tokenize === `object`) {
      argument = this.anlam.tokenize;
      argument.string = this.anlam.string;
    } else {
      argument = {string: this.anlam.string};
    }

    let output = tokenizer(argument, this);

    this.history(`tokenize`, output);
    return output;
  }

  // Set manipulated string and data.
  set(newString, newData) {
    if (newString) {
      this.anlam.string = newString;
      if (newData) {
        this.anlam.data = newData;
      } else {
        this.anlam.data = newString;
      }
    }
  }

  // Get manipulated output data.
  data() {
    return this.anlam.data;
  }

  // Get current manipulated string.
  out() {
    return this.anlam.string;
  }
}
