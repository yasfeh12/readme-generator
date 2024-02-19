const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {type: 'input',
    message: 'What is your name?',
    name: 'name',},

    {type: 'input',
    message: 'What is your project name?',
    name: 'project',},

    {type: 'input',
    message: 'where are you located?',
    name: 'location',},
    
    {type: 'input',
    message: 'What is your github name?',
    name: 'github',},

    {type: 'checkbox',
    choices: ["html","css","javascript", "python"],
    name: 'langudage',
    message: 'What languages do you know?',
},

    {type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'comms',
    choices: ["email","phone","text", "shouting really loud"],},


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(readme.md, process.argv[2], (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
