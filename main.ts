import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name: string
    constructor(n:string){
        this.name=n
    }
}

class Person {
    students: Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

const programStart = async(persons: Person) => {
    do{
    console.log("=".repeat(80))
    console.log(chalk.greenBright("Welcome to OOP=Object Oriented Program!"));
    console.log("=".repeat(80))
    const  ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: chalk.blue("Whom would you like to interact with?"),
        choices: ["staff","student","exit"]
    })
    if (ans.select == "staff"){
        console.log(chalk.green("You approached the staff room. Please feel,free to ask any question."));
    }
    else if (ans.select == "student"){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: chalk.blue("Enter the students's anme you wish to engage with:")
        })
        const student = persons.students.find(val => val.name == ans.student)
        
        if(!student){
        const name = new Student (ans.student)
        persons.addStudent(name)
        console.log(`Hello I am ${name.name}. Nice to meet you!`);
        console.log ( "New student list:");
        console.log("Current student list:");
        console.log(persons.students);
        } else {
        console.log (` Hello I am ${Student.name}. Glad to hear you again!`);
        console.log("Existing student list:");
        console.log(persons.students);
        }
    }
    else if(ans.select == "exit"){
        console.log(chalk.red("Exiting the Program"))
    } 
    }while (true)     
}

programStart(persons);