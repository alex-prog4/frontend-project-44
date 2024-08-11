#!/usr/bin/env node
import {name, generateQuestion, interfaceBrainGames} from './../src/index.js';

const parity = (number) => {
	if (number % 2 === 0) {
		return 'yes';
	} else {
		return 'no';
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
	return question;
};

const taskBrainGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const nameUser = name(taskBrainGame);
let round = 0;
let nextRound = true;

while (round < 3 && nextRound) {
	let number = generateNumber();
	let task = `${number}`;
	nextRound = interfaceBrainGames(
		compareAnswer(
			generateQuestion(
				task),
			parity(
				number)),
		round,
		nameUser
	);
	round += 1;
};