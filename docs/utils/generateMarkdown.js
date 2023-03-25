
function renderLicenseSection(data, header, body) {
  if (data.license != "none") {
    return CreateSection(renderLicenseBadge(data.license), "License", header, body);
  } else {
    return CreateSection("This Project is not licensed", "License", header, body);
  }
}

function renderLicenseBadge(license) {
  return `![GitHub license](${renderLicenseLink(license)})`
}

function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${license}-blue.svg`
}

function generateMarkdown(data) {
  //needed to convert multi-lines of text from the description into markdown exepcted line endings.
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
({ header, body } = renderLicenseSection(data, header, body));
({ header, body } = CreateSection(data.contributing, "Contributing", header, body));
({ header, body } = CreateSection(data.tests, "Tests", header, body));
({ header, body } = CreateSection(`Please reach out to ${data.userName} on Github or email: ${data.email}`, "Questions", header, body));

return header + "\n" + body;

}

function CreateSection(text, section, header, body) {
  if (ResponseHasContent(text)) {
    header += `- [${section}](#${section})
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
