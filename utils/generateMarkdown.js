const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `
# ${data.title.toUpperCase()}
[![GitHub license](https://img.shields.io/badge/License-${data.cb}-blue.svg)]
_Repo by ${data.name.toUpperCase()}_
## Installation:
${data.inst}
## Description:
${data.use}
## Table of contents:
${data.toc}
## licence:
${data.cb}
## Contributors:
${data.con}
## Tests:
${data.test}
## Questions:
${data.qs}
`
}

module.exports = generateMarkdown