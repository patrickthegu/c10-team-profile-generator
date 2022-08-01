const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Array to store information for the whole team
const team = [];

// Arrays to store questions for each type of employee
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is team manager\'s name?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid name"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is team manager\'s employee id?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid manager employee id"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is team manager\'s email address?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid email address"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is team manager\'s office number?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid office number"
            }else{
                return true;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your engineer\'s name?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid engineer name"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your engineer\'s employee id?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid engineer employee id"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your engineer\'s email address?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid engineer email address"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your engineer\'s github username?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid github username"
            }else{
                return true;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your intern\'s name?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid intern name"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your intern\'s employee id?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid intern employee id"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your intern\'s email address?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid intern email address"
            }else{
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your intern\'s school?',
        validate: answer => {
            if (answer === ''){
                return "Enter a valid school"
            }else{
                return true;
            }
        }
    }
];

const employeeQuestions = [
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Do you want to add an employee?'        
    },
    {
        
        type: 'list',
        name: 'typeEmployee',
        message: 'What type of employee do you want to add?',
        choices: [
            'Engineer',
            'Intern'
        ]
    }
];

// functions to add employee data to team array
async function addManager(){
    let managerResponse = await inquirer.prompt(managerQuestions);

    let managerProfile = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber);

    team.push(managerProfile);

    console.log(`${managerProfile.name} has been added to the team`);
};

async function addEngineer(){
    let engineerResponse = await inquirer.prompt(engineerQuestions);

    let engineerProfile = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github);
    
    team.push(engineerProfile);

    console.log(`${engineerProfile.name} has been added to the team`);
};

async function addIntern(){
    let internResponse = await inquirer.prompt(internQuestions);

    let internProfile = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);

    team.push(internProfile);

    console.log(`${managerProfile.name} has been added to the team`);
};

async function addEmployee(){
    let confirmAdd = {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Do you want to add an employee?'        
        };
    
    let type = {
        type: 'list',
        name: 'typeEmployee',
        message: 'What type of employee do you want to add?',
        choices: [
            'Engineer',
            'Intern'
        ]
    };

    let employeeResponse = await inquirer.prompt(confirmAdd);

    if (employeeResponse.addEmployee === true){
        let employeeType = await inquirer.prompt(type);
        switch (employeeType.typeEmployee){
            case 'Engineer':
                await addEngineer();
                await addEmployee();
                break;
            case 'Intern':
                await addIntern();
                await addEmployee();
                break;
        }
    }else {
        return;
    }
}

// Function to initialize app
async function init() {
    await addManager();
    await addEmployee();
    // fs.writeFile('dist/index.html', generateHTML(team));
}

// Function call to initialize app
init();