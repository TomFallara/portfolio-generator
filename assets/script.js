

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'userName',
    },
    {
        type: 'input',
        message: 'Tell us a little about yourself',
        name: 'bio',
      },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedInUrl',
    },
    {
        type: 'input',
        message: 'What is your Git Hub URL?',
        name: 'githubUrl',
      },
  ])
//   .then(() =>
    
//   );
