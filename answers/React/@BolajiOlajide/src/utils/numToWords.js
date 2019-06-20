class IntToEnglish {
  // based on https://stackoverflow.com/questions/3299619/algorithm-that-converts-numeric-amount-into-english-words/3299672#3299672
  to_19 = ["zero",  "one",   "two",  "three", "four",   "five",   "six",
    "seven", "eight", "nine", "ten",   "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  denom = ["",
    "thousand",     "million",         "billion",       "trillion",       "quadrillion",
    "quintillion",  "sextillion",      "septillion",    "octillion",      "nonillion",
    "decillion",    "undecillion",     "duodecillion",  "tredecillion",   "quattuordecillion",
    "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "vigintillion"];



    num_to_words = (amount) => {
      const intAmount = parseInt(amount, 10);
      return this.english_number(intAmount)
    }

  convert_nn = (value) => {
    if (value < 20) {
      return this.to_19[value]
    }
    for (let index = 0; index < this.tens.length; index++) {
      const dcap = this.tens[index];
      const dval = 20 + 10 * index;
      if (dval + 10 > value) {
          if ((value % 10) !== 0) {
            const remainder = this.to_19[value % 10]
            return `${dcap}-${remainder}`;
          }
          return dcap;
      }
    }
    throw Error("Should never get here, less than 100 failure")
  }

  convert_nnn = (value) => {
    let word = '';
    const rem = parseInt((value / 100), 10);
    const mod = value % 100;
    if (rem > 0) {
      const b = this.to_19[rem];
      word = `${b} hundred`;
      if (mod > 0) {
        word = `${word} and `;
      }
    }
    if (mod > 0) {
      word = `${word}${this.convert_nn(mod)}`;
      // word = word + convert_nn(mod);
    }
    return word;
  }

  english_number = (value) => {
    if (value < 100) {
      return this.convert_nn(value);
    }

    if (value < 1000) {
      return this.convert_nnn(value);
    }

    for (let index = 0; index < this.denom.length; index++) {
      const didx = index - 1;
      const dval = Math.pow(1000, index);
      if (dval > value) {
        const mod = Math.pow(1000, didx);
        const l = parseInt((value / mod), 10);
        const r = value - (l * mod);
        // let ret = convert_nnn(l) + " " + denom[didx];
        let ret = `${this.convert_nnn(l)} ${this.denom[didx]}`;
        console.log(r, '<== r')
        if (r > 0) {
          // ret = ret + ", " + english_number(r);
          const separator = (r < 1000) ? ' and' : ','
          ret = `${ret}${separator} ${this.english_number(r)}`;
        }
        return ret;
      }
  }
  }
}

export default IntToEnglish;
