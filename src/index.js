import readlineSync from 'readline-sync';

const greeting = (gameDiscription) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${gameDiscription}`);
  return nameUser;
};
const generateQuestion = (taskGame) => {
  const answer = readlineSync.question(`Question: ${taskGame}
You answear:`);
  return answer;
};
const compareAnswer = (answerUser, answerProgram) => {
  if (answerUser === answerProgram) {
    return true;
  }
  return false;
};
const interfaceBrainGames = (gameDiscription, generateTaskFunction) => {
  const nameUser = greeting(gameDiscription);
  let numberOfRounds = 3;
  let chekingAnswer = true;
  while (numberOfRounds > 0 && chekingAnswer) {
    const [taskGame, answerProgram] = generateTaskFunction();
    const answerUser = generateQuestion(taskGame);
    chekingAnswer = compareAnswer(answerUser, answerProgram);
    if (chekingAnswer) {
      console.log('Correct!');
      if (numberOfRounds === 1) {
        console.log(`Congratulations, ${nameUser}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerProgram}'.
Let's try again, ${nameUser}!`);
    }
    numberOfRounds -= 1;
  }
};
export default interfaceBrainGames;

