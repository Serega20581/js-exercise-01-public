#!/usr/bin/env node
import { multiplication } from '../src/calculator.js';
import { calculateAverage } from '../src/calculator.js';
import { isDivisibleBy5AndEven } from '../src/divisibleAndEvenValue.js';
import { determineTimeOfDay } from '../src/timeOfDayChecker.js';
import { isHappyTicket } from '../src/happyTicket.js';

console.log('start');
const x = 2;
const y = 3;
const result = multiplication(x, y);
const output = multiplication(x, y) === x * y ? 'ok' : 'bad';
console.log(`multiplication(${x}, ${y}) = ${result}, ${output}`);
console.log('end');

console.log(calculateAverage(1, 2, 3, 4, 5));
console.log(calculateAverage(31, 34, 35, 42, 14));

console.log(isDivisibleBy5AndEven(1));  // true 
console.log(isDivisibleBy5AndEven(3));  // false
console.log(isDivisibleBy5AndEven(5)); // true

console.log(determineTimeOfDay(10)); // утро
console.log(determineTimeOfDay(14)); // день
console.log(determineTimeOfDay(-1)); // ошибка данных

console.log(isHappyTicket('431440')); // true
console.log(isHappyTicket('457028')); // false
console.log(isHappyTicket('3133'));   // false
console.log(isHappyTicket('252702')); // true
