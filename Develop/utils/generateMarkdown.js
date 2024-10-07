// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    const licenseBadgeMap = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

      Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',

      GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0))',

      BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',

      Boost: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      // Add more licenses here as needed
    };

    // write code to check if the license is in the map and return the badge; use an if statement
    if(licenseBadgeMap[license]) {
      return licenseBadgeMap[license];
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if(license) {
    const licenseLinkMap = {
      MIT: 'https://opensource.org/licenses/MIT',

      Apache: 'https://opensource.org/licenses/Apache-2.0',

      GPL: 'https://www.gnu.org/licenses/gpl-3.0',

      BSD: 'https://opensource.org/licenses/BSD-3-Clause',

      Boost: 'https://www.boost.org/LICENSE_1_0.txt',
      // Add more licenses here as needed
    };

    // write code to check if the license is in the map and return the badge; use an if statement
    // the if statement should check if the license is in the map and return the link
    if(licenseLinkMap[license]) {
      return licenseLinkMap[license];
    }
  }
  // return an empty string if the license is not in the map
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license) {
    return `This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
// added the license badge, license link, and license section to the markdown
function generateMarkdown(questions) {
  return `# ${questions.projectTitle}
 ${renderLicenseBadge(questions.license)}

  ## Description
  ${questions.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${questions.installation}

  ## Usage
  ${questions.usage}

  ## Credits
  ${questions.credits}

  ## License
  ${renderLicenseSection(questions.license)}

  ${renderLicenseLink(questions.license)}

  ## Contributing
  ${questions.contributing}

  ## Tests
  For a walthrough test demostrating how the application works, you can watch the video [here](https://app.screencastify.com/v3/watch/WxBo4hbrEZZKtYWYT5QS)


  ## Questions
  If you have any questions, you can reach me through the following channels:
  - GitHub: [${questions.github}](https://github.com/${questions.github})
  - Email: ${questions.email}
  `;
}
// expeort the generateMarkdown function to the index.js file

export default generateMarkdown;
