/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = new Map();
    for(let i=0;i < this.words.length;i +=1){
      let word = this.words[i];
      let next = this.words[i+1] || null;
      if (chain.has(word)){
        chain.get(word).push(next);
      }
      else {
        chains.set(word,[next])
      }
    }
    this.chain = chain
  }
  //chooses a random point in the array
  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // pick a random key
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    //append key to chain until termination
    while(out.length < numWords && key !== null){
      out.push(key);
      key=MarkovMachine.choice(this.chain.get(key));
    }
    return out.join(" ")
  }
}
