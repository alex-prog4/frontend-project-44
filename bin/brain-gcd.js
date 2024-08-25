#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';
import { getTaskGCD } from '../src/generatingTaskBrainGames.js';

const gameDiscription = 'Find the greatest common divisor of given numbers.';

interfaceBrainGames(gameDiscription, getTaskGCD);
