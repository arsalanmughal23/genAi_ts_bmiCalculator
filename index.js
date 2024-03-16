#!/usr/bin/env node
import inquirer from 'inquirer';
const validateNumber = function validateNumber(input) {
    return isNaN(parseFloat(input)) ? 'You need to enter the number' : true;
};
let promptAllQuestions = [
    { name: 'weightInKg', type: 'input', message: 'Enter Your Weight in Kilogram (Kg): ', default() { return 0; }, validate: validateNumber },
    { name: 'heightInM', type: 'input', message: 'Enter Your Height in Meter (M): ', default() { return 0; }, validate: validateNumber }
];
let result = await inquirer.prompt(promptAllQuestions);
let { weightInKg, heightInM } = result;
weightInKg = parseFloat(weightInKg);
heightInM = parseFloat(heightInM);
console.log(`Your Weight is: ${weightInKg} Kg`);
console.log(`Your Height is: ${heightInM} M`);
let bmi = weightInKg / (heightInM ** 2);
console.log(`Your BMI is: ${bmi}`);
