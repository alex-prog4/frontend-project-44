#!/usr/bin/env node
import readlineSync from 'readline-sync';

const name = () => {
	console.log('Welcome to the Brain Games!');
	const nameUser = readlineSync.question('May I have your name?');
	console.log(`Hello, ${nameUser}!`);
	return nameUser;
};

const parity = (number) => {
	if (number % 2 === 0) {
		return 'yes';
	} else {
		return 'no';
	};
};

const generateNumber = () => {
	const question = Math.floor(Math.random() * 100);
        const answer = readlineSync.question(`Question: ${question}
You answear:`);
	if (answer !== 'yes' && answer !== 'no') {
		return false;
	};
	return (parity(question) === answer) ? true: false;
};

const nameUser = name();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
let controlAnswer = true;
while (controlAnswer) {
	controlAnswer = generateNumber();
	if (controlAnswer) {
		console.log('Correct!');
	};
	if (i === 2) {
		controlAnswer = false;
	};
	i += 1;
};
if (i < 3) {
	console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${nameUser}`);
} else {
	console.log(`Congratulations, ${nameUser}`);
};