// TODO: Include packages needed for this application
const fs = require('fs')
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


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
    // {
    //     type: 'list',
    //     message: 'Please select table of contents.',
    //     name: 'tableOC',
    //     choices: ['Installation'('#installation'), 'Usage'('#usage'), 'Credits'('#credits'), 'License'('#license')],
    // },
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
        type: 'checkbox',
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
      console.log(answers.pname)
    
            
    fs.writeFile(`${answers.pname}.json`, JSON.stringify(answers),(err) =>
     err ? console.error(err) : console.log('Success!'))


     generateMarkdown(answers)
  });
  
  

// TODO: Create a function to initialize app
// function init() {

// };

// // Function call to initialize app
// init();
