// TODO: Include packages needed for this application
const fs = require('fs')
var inquirer = require('inquirer');
const renderLicenseBadge = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
let licenseBadge = '';


// placing various objects and arrays here for reference in prompts later

const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'pname',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'pdescript',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Provide installation steps.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide examples for use.',
        name: 'examples',
    },
    {
        type: 'input',
        message: 'List your collaborators, any third-party assests, or any other features.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Select Licenses',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC License', 'GNU GPLv2',],
    },
    {
        type: 'input',
        message: 'List any notable features.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Any ways you would like other devs to contribute?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Paste any tests that the end user can utilize',
        name: 'tests',
    },
];

// let fileName = `${answers.pname}.md`

inquirer
    .prompt([
        ...questions
    ])
    .then((answers) => {
                  
        generateMarkdown(answers)
    });


