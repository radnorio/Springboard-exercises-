// file with processes that generate text 
const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

// Make Markov machine from text and generate text from it. 

function generateText(text) {
    let machine = new markov.MarkovMachine(text);
    console.log(machine.makeText());
}

// reads file and generates text from it. 

function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
      if (err) {
        console.error(`Cannot read file: ${path}: ${err}`);
        process.exit(1);
      } 
      else {
        generateText(data);
      }
    });
}

//reads url and generates text from it
async function makeURLText(url) {
    let resp;
  
    try {
      resp = await axios.get(url);
    } catch (err) {
      console.error(`Cannot read URL: ${url}: ${err}`);
      process.exit(1);
    }
    generateText(resp.data)
}




//command line interperator
let [method, path] = process.argv.slice(2);
if (method === "file") {
  makeText(path);
}
else if (method === "url") {
  makeURLText(path);
}
else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}