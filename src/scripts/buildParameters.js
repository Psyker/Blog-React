const fs = require('fs');
const colors = require('colors');
const path = require('path');
const readline = require('readline');
const dist = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'config', 'parameters.json.dist'), 'utf8'));

console.log('------------------------'.green);
console.log('Building parameters.json'.green.bold);
console.log('------------------------'.green);

let parameters = {};
const parametersPath = path.resolve(__dirname, '..', 'config', 'parameters.json');

//Check existence of parameters.json.
if (fs.existsSync(parametersPath)) {
  parameters = require(parametersPath);
}

//Build diff between json and dist. If diff is empty, we can move to the next script.
const diff = getDiff(dist, parameters);
if (diff.length === 0) {
  console.log('Parameters.json is already up to date'.yellow);
  process.exit(0);
}

const input = readline.createInterface(process.stdin, process.stdout);
let counter = 0;

askQuestion(diff[counter], dist[diff[counter]]);

//Handle user input on each question.
input.on('line', (answer) => {
  if (answer === '') {
    answer = dist[diff[counter]];
  }
  parameters[diff[counter]] = answer;
  counter++;

  if (counter < diff.length) {
    askQuestion(diff[counter], dist[diff[counter]]);
  } else {
    writeJson(parameters);
  }
});

/**
 * Build diff between parameters.json and parameters.json.dist
 *
 * @param dist
 * @param parameters
 * @returns {Array}
 */
function getDiff(dist, parameters) {
  let diff = [];

  Object.keys(dist).forEach(key => {
    if (!parameters[key]) {
      diff.push(key);
    }
  });

  return diff;
}

/**
 * Prompt the question with the defaultAnswer from parameters.json.dist
 *
 * @param question
 * @param defaultAnswer
 */
function askQuestion(question, defaultAnswer) {
  input.setPrompt(question.green.bold + ` (${defaultAnswer})`.green + ' : ');
  input.prompt();
}

/**
 * Output a new parameters.json.
 * Cancel the next script if an error occurred.
 *
 * @param parameters
 */
function writeJson(parameters) {
  fs.writeFile(parametersPath, JSON.stringify(parameters, null, 4), 'utf8', (err) => {
    if (err) {
      console.error(err.message.error);
      process.exit(-1);
    }

    console.log('parameters.json successfully updated'.green);
    process.exit(0);
  });
}
