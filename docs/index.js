// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like the Title of the readme to be?",
        validate: gm.ResponseHasContent
    },
    {
        type: "editor",
        name: "description",
        message: "Please provide a description for the readme:",
        validate: gm.ResponseHasContent
    },
    {
        type: "input",
        name: "install",
        message: "Please provide a installation instructions for this project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide a instructions on how to use this project:",
        validate: gm.ResponseHasContent
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "No License"
        ],
        validate: gm.ResponseHasContent
    },
    {
        type: "input",
        name: "contributing",
        message: "How should folks contribute to this project?",
        validate: gm.ResponseHasContent
    },
    {
        type: "input",
        name: "tests",
        message: "Are there testing instructions for this project?"
    },
    {
        type: "input",
        name: "userName",
        message: "Please provide your github user name:",
        validate: gm.ResponseHasContent
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email or email address for project contact:",
        validate: gm.ResponseHasContent
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if(!fs.existsSync("./output"))
    {
        fs.mkdirSync("./output");
    }

    fs.writeFile("output/"+fileName, gm.generateMarkdown(data), (error) => {
        if(error){
            console.log(`There was an error: ${error}`);
        } else {
            console.log("Please checkout the output folder for your file.")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
        questions
        )
        .then((answers) => {
            writeToFile("README.md", answers);
        })
}

// Function call to initialize app
init();

