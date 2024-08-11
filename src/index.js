import readlineSync from 'readline-sync';

const name = (taskBrainGame) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${taskBrainGame}`);
  return nameUser;
};
const generateQuestion = (question) => {
  const answer = readlineSync.question(`Question: ${question}
You answear:`);
  return answer;
};
const interfaceBrainGames = ([controlAnswer, wrongAnswer, correctAnswer], round, nameUser) => {
  if (controlAnswer) {
    console.log('Correct!');
    if (round === 2) {
      console.log(`Congratulations, ${nameUser}!`);
    }
    return true;
  }
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${nameUser}!`);
  return false;
}
export { name, generateQuestion, interfaceBrainGames };
