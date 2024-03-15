#!/usr/bin/env node
import inquirer from 'inquirer';
let answer = {
    weightInKg: 0,
    heightInM: 0
};
async function askValue(variableName, message) {
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
let bmi = answer.weightInKg / (answer.heightInM ** 2);
console.log(`Your BMI is: ${bmi}`);
