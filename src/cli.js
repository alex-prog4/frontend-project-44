import readlineSync from 'readline-sync';

const name = () => {
	const nameUser = readlineSync.question('May I have your name?');
	console.log(`Hello, ${nameUser}!`);
};

export default name;
