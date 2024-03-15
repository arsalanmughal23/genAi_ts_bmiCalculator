#!/usr/bin/env node

import inquirer from 'inquirer';

type ANSWER_TYPE = {
    weightInKg: number,
    heightInM: number
}
type VARIABLE_NAMES_TYPES = 'weightInKg' | 'heightInM';

let answer:ANSWER_TYPE = {
    weightInKg: 0,
    heightInM: 0
};

async function askValue(variableName:VARIABLE_NAMES_TYPES, message:string){
    let result = await inquirer.prompt({
        name: variableName,
        type: 'number',
        message
    });
    answer[variableName] = result[variableName];
}

await askValue('weightInKg', 'Enter Your Weight in Kilogram (Kg): ');
await askValue('heightInM', 'Enter Your Height in Meter (M): ');

console.log(`Your Weight is: ${answer.weightInKg} Kg`);
console.log(`Your Height is: ${answer.heightInM} M`);

let bmi:number = answer.weightInKg / (answer.heightInM ** 2);

console.log(`Your BMI is: ${bmi}`);