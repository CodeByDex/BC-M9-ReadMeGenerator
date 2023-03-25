// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like the Title of the readme to be?",
        validate: ResponseHasContent
    },
    {
        type: "editor",
        name: "description",
        message: "Please provide a description for the readme:",
        validate: ResponseHasContent
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
        validate: ResponseHasContent
    },
    {
        //TODO: Swithc to choice
        type: "list",
        name: "license",
        message: "Please select a license for this project:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "No License"
        ],
        validate: ResponseHasContent
    },
    {
        type: "input",
        name: "contributing",
        message: "How should folks contribute to this project?",
        validate: ResponseHasContent
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
        validate: ResponseHasContent
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email or email address for project contact:",
        validate: ResponseHasContent
    },
    {
        type: "input",
        name: "questions",
        message: "Please include any info for how folks should reach out if they have questions on this project:",
        validate: ResponseHasContent
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
        questions
        )
        .then((answers) => {
            console.log(answers)
        })
}

// Function call to initialize app
init();

function ResponseHasContent(input) {
    switch (typeof input) {
        case "string":
            if(input.trim().length < 1){
                console.log("\n Please provide a response.");
                return false;
            } 

            return true;
            break;
        default:
            console.log(`Response of type ${typeof input} is not supported.`);
            return false;
            break;
    }
}
