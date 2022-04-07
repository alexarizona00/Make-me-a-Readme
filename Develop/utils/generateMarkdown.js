const fs = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README



function generateMarkdown(answers) {

let finalData = `#${answers.pname}

## Description
${answers.pdescript}

## Installation
${answers.install}

## Usage
${answers.examples}

## Credits 
${answers.credits}


## License
${answers.license}

## Features
${answers.features}

## How to Contribute
${answers.contribute}

## Tests
${answers.tests}
`

console.log(finalData)

  fs.writeFile(`${answers.pname} readme.md`, finalData,(err) =>
  err ? console.error(err) : console.log('Success!'));


}

module.exports = generateMarkdown;
