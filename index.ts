#!/usr/bin/env node

import inquirer from 'inquirer';

const validateNumber:Function = function validateNumber(input:any):boolean|string{
    return isNaN(parseFloat(input)) ? 'You need to enter the number' : true;
}

type TYPE_PROMPT = {
    name: 'weightInKg' | 'heightInM',
    type: 'input',
    message: string,
    default: Function,
    validate: Function
}

let promptAllQuestions:TYPE_PROMPT[] = [
    { name: 'weightInKg', type: 'input', message: 'Enter Your Weight in Kilogram (Kg): ', default(){ return 0; }, validate:validateNumber },
    { name: 'heightInM', type: 'input', message: 'Enter Your Height in Meter (M): ', default(){ return 0; }, validate:validateNumber }
];
let result = await inquirer.prompt(promptAllQuestions);

let {weightInKg, heightInM} = result;
weightInKg = parseFloat(weightInKg);
heightInM = parseFloat(heightInM);

console.log(`Your Weight is: ${weightInKg} Kg`);
console.log(`Your Height is: ${heightInM} M`);

let bmi:number = weightInKg / (heightInM ** 2);

console.log(`Your BMI is: ${bmi}`);