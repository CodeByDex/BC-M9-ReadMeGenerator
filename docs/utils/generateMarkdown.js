// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const lineEndRegEx = /\r\n/g;
  let header = "";
  let body = "";

  header += `# ${data.title}

${data.description.replace(lineEndRegEx, "  \n")};

---
## Contents
`;

({ header, body } = CreateSection(data.install, "Installation", header, body));
({ header, body } = CreateSection(data.usage, "Usage", header, body));
({ header, body } = CreateSection(data.license, "License", header, body));
({ header, body } = CreateSection(data.contributing, "Contributing", header, body));
({ header, body } = CreateSection(data.tests, "Tests", header, body));
({ header, body } = CreateSection(`Please reach out to ${data.userName} on Github or email: ${data.email}`, "Questions", header, body));

return header + "\n" + body;

}

function CreateSection(text, section, header, body) {
  if (ResponseHasContent(text)) {
    header += `- ${section}
`;

    body += `### ${section}
${text}

`;
  }
  return { header, body };
}

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
          console.log("\n",`Response of type ${typeof input} is not supported.`);
          return false;
          break;
  }
}

module.exports = {
  generateMarkdown: generateMarkdown,
  ResponseHasContent: ResponseHasContent
};
