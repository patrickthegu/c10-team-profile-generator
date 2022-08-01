const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function generateHTML(data){
    console.log(data);
    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile</title>
    </head>
    
    <body>

    `

    
    function profileHtml(data){
        let employeeHtml = `
        <div class="profileContainer">
            <h2 class="name">${data.name}</h5>
            <h3 class=>${data.role}</h6>
            <p class=>ID: ${data.id}</p>
            <p class=>Email: <a href="mailto: ${data.email}" > ${data.email}</a></p>
    `;

        return employeeHtml;
    }

    for (i=0; i<data.length; i++){
       let employee = profileHtml(data[i]);
       switch (data[i].role){
            case 'Engineer':
                let engineer = new Engineer(data[i].name, data[i].id, data[i].email, data[i].github);
                htmlString += employee + `<p class=''>Github: <a href="https://github.com/${engineer.getGithub()} " class= ''target="_blank">${engineer.getGithub()}</a></p>
                                    </div>`
                break;
            case 'Intern':
                let intern = new Intern(data[i].name, data[i].id, data[i].email, data[i].school)
                htmlString += employee + `<p class=''>School: ${intern.getSchool()}</p>
                                    </div>`
                break
            case 'Manager':
                let manager = new Manager(data[i].name, data[i].id, data[i].email, data[i].officeNumber)
                htmlString += employee + `<p class=''>Office Number: ${manager.getOfficeNumber()}</p>
                                    </div>`
                break;
        }
    }

    htmlString += `
    </body>
    </html>`

    return htmlString;
}

module.exports = generateHTML;