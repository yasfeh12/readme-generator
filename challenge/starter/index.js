const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const license = require("./license");

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is your GitHub name?',
        name: 'github',
    },
    {
        type: 'checkbox',
        choices: ["html", "css", "javascript", "python"],
        name: 'language',
        message: 'What languages do you know?',
    },
    {
        type: 'input',
        message: 'Do you have any tests for your application?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'comms',
        choices: ["email", "phone", "text", "shouting really loud"],
    },

    {
        type: 'input',
        message: 'What is does youre app do?',
        name: 'function',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'why is youre app useful?',
        name: 'use',
    },
    {
        type: 'input',
        message: 'how do you install youre app?',
        name: 'install',
    },

   
];

function generateMarkdown(userInput, tableOfContents, licenseBadge) {
    return `
# ${userInput.project}

## Description
${userInput.function}

## Table of Contents
${tableOfContents}

## Installation
${userInput.install}

## Usage
${userInput.use}

## License
${licenseBadge}

## Contributing
${userInput.name} is located in ${userInput.location}. You can reach out to them via ${userInput.comms} or find more about them on their [GitHub profile](https://github.com/${userInput.github}).

## Tests
${userInput.tests}

## Questions
If you have any additional questions, feel free to contact ${userInput.name} via email at ${userInput.email}.
`;
}

function generateTableOfContents() {

    return `
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
`;
}

function generateLicenseBadge(licenseType) {

    return `![License Badge](URL_TO_LICENSE_BADGE)`;
}

module.exports = generateMarkdown;


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}


function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
          
            const licenseBadge = generateLicenseBadge(answers.license);
            
         
            const readmeContent = generateMarkdown(answers, generateTableOfContents(), licenseBadge);
            
            writeToFile('Readme.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

init();