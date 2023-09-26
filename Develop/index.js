const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of this project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who can contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run tests for this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'Other'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// this function takes in parameters and uses them to make a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      // checks for error if no error then the file is created
      if (err) {
        console.error(err);
      } else {
        console.log(`${fileName} has been created successfully.`);
      }
    });
  }
  
  // Function to initialize app
  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        // Generate README content directly
        const readmeContent = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.license} License.

  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  
  ## Questions
  GitHub: [${answers.github}](https://github.com/${answers.github})
  Email: ${answers.email}
        `;
  
        const fileName = 'README.md';
        writeToFile(fileName, readmeContent);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // calling the function
  init();