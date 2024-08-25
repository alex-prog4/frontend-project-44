const getRandomNumber = (beginRange = 0, endRange = 100) => {
  const number = beginRange + Math.floor(Math.random() * (endRange - beginRange));
  if (number === 0) {
    return 1;
  }
  return number;
};
const getTaskEven = () => {
  const number = getRandomNumber();
  let answerProgram = 'no';
  if (number % 2 === 0) {
    answerProgram = 'yes';
  }
  return [`${number}`, answerProgram];
};
const getTaskCalc = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(1, operators.length) - 1;
  const operator = operators[operatorIndex];
  const getResult = (operator) => { 
    switch (operator) {
      case '+': return firstNumber + secondNumber;
      case '-': return firstNumber - secondNumber;
      case '*': return firstNumber * secondNumber;
    }
  }
  const answerProgram = getResult(operator);
  return [`${firstNumber} ${operator} ${secondNumber}`, `${answerProgram}`];
};
const getTaskGCD = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let answerProgram = 0;
  for (let i = Math.min(firstNumber, secondNumber); i > 0; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      answerProgram = i;
      return [`${firstNumber} ${secondNumber}`, `${answerProgram}`];
    }
  }
  return [`${firstNumber} ${secondNumber}`, `${1}`];
};
const getTaskProgression = () => {
  const quantityProgression = getRandomNumber(5, 10);
  const indexLostNumber = getRandomNumber(0, quantityProgression);
  const stepProgression = generateStepProgression(1, 10);
  let numberProgression = getRandomNumber();
  let progression = '';
  let answerProgram = 0; //lost number progression
  for (let i = 0; i < quantityProgression; i += 1) {
    if (i === indexLostNumber) {
      progression += '.. ';
      answerProgram = numberProgression;
      numberProgression += stepProgression;
    }
    progression += `${numberProgression} `;
    numberProgression += stepProgression;
  }
  return [progression, `${answerProgram}`];
};
const getTaskPrime = () => {
  const number = getRandomNumber();
  let primeControl = 0;
  let answerProgram = 'no';
  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      primeControl += 1;
    }
  }
  if (primeControl === 2) {
    answerProgram = 'yes';
  }
  return [`${number}`, answerProgram];
};
export { getTaskEven, getTaskCalc, getTaskGCD, getTaskProgression, getTaskPrime };