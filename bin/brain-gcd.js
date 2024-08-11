#!/usr/bin/env node
import {name, generateQuestion, interfaceBrainGames} from './../src/index.js';

const gCD = (firstNumber, secondNumber) => {
	for (let i = Math.min(firstNumber, secondNumber); i > 0; i -= 1) {
		if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
			return `${i}`;
		};
	};
};

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
	if (question === 0) {
		return 1;
	}
	return question;
};

const taskBrainGame = 'Find the greatest common divisor of given numbers.';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;

while (round < 3 && nextRound) {
	const firstNumber = generateNumber();
	const secondNumber = generateNumber();
	const task = `${firstNumber} ${secondNumber}`;
	nextRound = interfaceBrainGames(
		compareAnswer(
			generateQuestion(
				task),
			gCD(firstNumber, secondNumber)),
		round,
		nameUser
	);
	round += 1;
};
