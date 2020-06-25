const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `
# ${data.title.toUpperCase()}
![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/github/languages/top/kikaiaku/readmegen.io)
_Repo by ${data.name.toUpperCase()}_
__Installation:__
${data.inst}
__Description:__
${data.use}
__Table of contents:__
${data.toc}
__licence:__
${data.cb}
__Contributors:__
${data.con}
__Tests:__
${data.test}
__Questions:__
${data.qs}
`
}

module.exports = generateMarkdown