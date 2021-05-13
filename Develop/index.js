const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js') 

// TODO: Create an array of questions for user input
const questions = [
{
type: 'input',
name: 'name',
message: 'Would is the title of your project?',


},
{
    type: '',
    name: '',
    message: '',

},
{
    type: '',
    name: '',
    message: '',
    
},
{
    type: '',
    name: '',
    message: '',
    
},
{
    type: '',
    name: '',
    message: '',
    
},
{
    type: '',
    name: '',
    message: '',
    
},














];


// with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Include packages needed for this application


// Function call to initialize app
init();


