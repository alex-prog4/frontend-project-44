import readlineSync from 'readline-sync';

const interfaceBrainGames = (gameDiscription, generateTaskFunction) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${gameDiscription}`);
  let numberOfRounds = 3;
  for (let i = numberOfRounds; i > 0; i -= 1) {
    const [taskGame, answerProgram] = generateTaskFunction();
    const answerUser = readlineSync.question(`Question: ${taskGame}
You answear:`);
    if (answerUser === answerProgram) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerProgram}'.
Let's try again, ${nameUser}!`);
      return false;
    }
    if (i === 1) {
      console.log(`Congratulations, ${nameUser}!`);
    }
  }
};
export default interfaceBrainGames;
