// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === 'none') {
  return ''
 } else {
  return `![License Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
 }

};

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'none') {
 return ''
} else {
 return  `[${license} License](https://choosealicense.com/licenses/${license}/)`
}

};

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'none') {
  return ''
} else {
 return `## License`
}
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installtion)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}
  
  ## Contributing
  
  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Please contact me with any questions related to this project.

  Github Username: ${data.github}

  GitHub Email: [${data.email}](mailto:${data.email})

  GitHub Profile: ${data.questions}

  
  ${renderLicenseSection(data.license)}

  For more information on this license please visit: ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
