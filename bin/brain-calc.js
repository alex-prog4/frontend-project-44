#!/usr/bin/env node
import {name, generateQuestion, interfaceBrainGames} from './../src/index.js';

const compareAnswer = (answerUser, answerProgram) => {
	const resultCompare = (answerProgram === answerUser) ? true: false;
	const wrongAnswer = (!resultCompare) ? answerUser: 0;
	const correctAnswer = (!resultCompare) ? answerProgram: 0;
	return [resultCompare,
			wrongAnswer,
			correctAnswer
	];
};

const generateNumber = () => {
	const question = Math.floor(Math.random() * 100);
	return question;
};

const generateOperationWithNumber = (firstNumber, secondNumber) => {
	const question = Math.floor(Math.random() * 4);
	switch (question) {
		case 0: return ['+', firstNumber + secondNumber];
		case 1: return ['-', firstNumber - secondNumber];
		case 2: return ['*', firstNumber * secondNumber];
		default: return ['*', firstNumber * secondNumber];
	}
};

const taskBrainGame = 'What is the result of the expression?';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;

while (round < 3 && nextRound) {
	let firstNumber = generateNumber();
	let secondNumber = generateNumber();
	let operationWithNumber = generateOperationWithNumber(firstNumber, secondNumber);
	let task = `${firstNumber} ${operationWithNumber[0]} ${secondNumber}`;
	nextRound = interfaceBrainGames(
		compareAnswer(
			generateQuestion(
				task),
			`${operationWithNumber[1]}`),
		round,
		nameUser
	);
	round += 1;
};