//Set up package dependency installation 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js') 

// Created an array of questions for user input
const questions = [
{   
    // input for title of project
    type: 'input',
    name: 'name',
    message: 'What is the title of your project?',
},
{   
    // inputs for readme section
    type: 'input',
    name: 'description ',
    message: 'Write a detailed description of your project.',

},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the primary usage of this project?',
    
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose the appropriate license for your project.',
    Choice: ('MIT', 'APACHE', 'GNU','ISC', 'Mozilla')
    
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please add instructions for contributing to this project.',
    
},
{
    type: 'input',
    name: 'tests',
    message: 'What test have you to your project.',
    
},
{
    type: 'input',
    name: 'questions',
    message: 'What is the link to your GitHub profile?',
    
},
{
    type: 'input',
    name: 'contents',
    message: 'Would you like add a table of contents for this project?',


},
{
    type: 'input',
    name: 'github',
    message: 'What is your username on GitHub?',
    
},
{
    type: 'input',
    name: 'email',
    message: 'What is your registered email address?',
    
},

];


//Created a function to write README file
function writeToFile(fileName, data) {}

// TODO: Include packages needed for this application


// Function call to initialize app
init();



//README.md criteria title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// add github username and licence

