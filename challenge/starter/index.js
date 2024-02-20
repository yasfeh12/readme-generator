const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        message: 'Enter a project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your application:',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

function generateMarkdown(userInput ) {
    return `
    # ${userInput.project}
    
    ## Description
    ${userInput.description}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    ${userInput.installation}
    
    ## Usage
    ${userInput.usage}
    
    ## License
    ${generateLicenseBadge(userInput.license)}
    ${getLicenseNotice(userInput.license)}
    
    ## Contributing
    ${userInput.contributing}
    
    ## Tests
    ${userInput.tests}
    
    ## Questions
    If you have any additional questions, feel free to contact ${userInput.name} via [GitHub](https://github.com/${userInput.github}) or email at ${userInput.email}.
    `;
}
function generateLicenseBadge(licenseType) {
    return `![License Badge](https://img.shields.io/badge/license-${licenseType}-brightgreen)`;
}

function getLicenseNotice(licenseType) {
    return `This application is covered under the ${licenseType} license.`;
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