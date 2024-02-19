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
        message: 'why is youre app useful?',
        name: 'use',
    },
    {
        type: 'input',
        message: 'how do you install youre app?',
        name: 'install',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers); // Assuming you have a function to generate the markdown content
            writeToFile('Readme.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// function call to initialize program
init();