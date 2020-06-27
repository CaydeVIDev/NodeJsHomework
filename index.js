const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

const api = require('./utils/github-api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, error => error ? console.error(error) : console.log(`${fileName} generated!`))
}

const init = async _ => {
  let rmObject = {}
  do {
    const { rmUser, rmRepo } = await prompt([
      {
        type: 'input',
        name: 'rmUser',
        message: 'What is your GitHub user name?'
      },
      {
        type: 'input',
        name: 'rmRepo',
        message: 'What is your repository name?'
      }
    ])
    rmObject = await api.getUser(rmUser, rmRepo)
    try {
      console.log(`${rmObject.fullName} found!`)
    } catch (error) {
      console.error('Repo not found!')
      
    }
  
  } while (!rmObject)
  // const ghApi = await api.getUser(rmUser)
  Object.assign(rmObject, await prompt([
{
      type: 'input',
      name: 'inst',
      message: 'What are the installation instructions?'
    },
    {
      type: 'input',
      name: 'use',
      message: 'What is the usage description?'
    },
    {
      type: 'input',
      name: 'toc',
      message: 'What are the table of contents?'
    },
    {
      type: 'list',
      name: 'cb',
      choices: ['Apache', 'GNU', 'MIT'],
      message: 'Which licenses did you use?'
    },
 
    {
      type: 'input',
      name: 'con',
      message: 'Who are the contributors?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the tests?'
    },
    {
      type: 'input',
      name: 'qs',
      message: 'Any questions?'
    }
  ]))
  writeToFile("README.md", await generateMarkdown(rmObject))
}

init()