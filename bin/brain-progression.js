#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';

const gameDiscription = 'What number is missing in the progression?';
const generateNumber = (range = 100) => {
  const number = Math.floor(Math.random() * range);
  return number;
};
const generateStepProgression = () => {
  const step = generateNumber(10);
  return (step === 0) ? 1 : step;
};
const generateTaskProgression = () => {
  const quantityProgression = generateNumber(5) + 5;
  const indexLostNumber = generateNumber(quantityProgression);
  const stepProgression = generateStepProgression();
  let numberProgression = generateNumber(100);
  let progression = '';
  let lostNumber = 0;
  for (let i = 0; i < quantityProgression; i += 1) {
    if (i === indexLostNumber) {
      progression += '.. ';
      lostNumber = numberProgression;
      numberProgression += stepProgression;
    }
    progression += `${numberProgression} `;
    numberProgression += stepProgression;
  }
  return [progression, `${lostNumber}`];
};
interfaceBrainGames(gameDiscription, generateTaskProgression);

