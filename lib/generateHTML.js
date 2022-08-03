const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function generateHTML(data){
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

    <header class='heading'>
      <h1>My Team</h1>
    </header>
    `
  
    function profileHtml(data){
        let employeeHtml = `
        <div class="profileContainer">
        <div class = "profileHeading">
            <h2 class="name"> ${data.name}</h5>
            <h3 class="role"> ${data.role}</h6>
        </div>
        <div class = "profileContents">
            <p class="id"> ID: ${data.id}</p>
            <p class="email"> Email: <a href="mailto: ${data.email}" > ${data.email}</a></p>
    `;

        return employeeHtml;
    }

    for (i=0; i<data.length; i++){
        let employee = profileHtml(data[i]);
        switch (data[i].role){
             case 'Engineer':
                 htmlString += employee + `<p class="github"> Github: <a href="https://github.com/${data[i].github} " class= ''target="_blank">${data[i].github}</a></p>
                 </div> </div>`
                 break;
             case 'Intern':                 
                 htmlString += employee + `<p class="school"> School: ${data[i].school}</p>
                 </div> </div>`
                 break
             case 'Manager':                 
                 htmlString += employee + `<p class="office"> Office Num: ${data[i].officeNumber}</p>
                 </div> </div>`
                 break;
         }
     }


    htmlString += `
    </body>
    </html>`
    
    console.log('HTML for team profile has been generated')
    return htmlString;
}

module.exports = generateHTML;