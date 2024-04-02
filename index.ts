#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

interface addType {
    Todo: string,
    category: string,                       
}
   let todos : addType[] = [];

async function addTodo(){
    let loop = true;

    while(loop){
let answers = await inquirer.prompt(
    [
    {
        name: "todo",
        type: "input",
        message: "What do you want to add in your todo?",
        validate: function(input){
            return input.trim() !== " "? true : "Please enter a valid items in to-do list."
        }
    },
    {
        name: "category",
        type: "list",
        message: "Select a category",
        choices: ["personal","work","school","task"]
    },
    {
        name: "addmore",
        type: "confirm",
        message: "Do you want to add more todo?",
        default: false
    }
    ]
);
let newTodo : addType = {
    Todo: answers.todo,
    category: answers.category
}
todos.push(newTodo);
console.log(`Todo item ${answers.todo} added to ${answers.category} Succesfully.`);
loop = answers.loop;
    }
 displaytodos()
}
function displaytodos(){
if(todos.length > 0){
    console.log("Your todo list:")
    todos.forEach((todo , index) =>{
        console.log(`${index + 1}.${chalk.italic(colorCategory(todo.category)),
            (todo.Todo)} (${todo.category})`)
    });
}else{
    console.log("No todos found!")
}
}

function colorCategory(category:string): Function {
    switch (category) {
        case "personal":
            return chalk.cyan
       case "work":
            return chalk.yellow
        case "school":
            return chalk.green
        case "task": 
            return chalk.blue        
        default:
            return chalk.white
    }
}

async function main() {
    console.log(chalk.bold.bgMagentaBright`"Welcome to the TO-DO list application!"`)
  await addTodo();
}
main();
 
 
