#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';
import { getTaskCalc } from '../src/generatingTaskBrainGames.js';

const gameDiscription = 'What is the result of the expression?';

interfaceBrainGames(gameDiscription, getTaskCalc);
