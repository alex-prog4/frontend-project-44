#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';
import { getTaskPrime } from '../src/generatingTaskBrainGames.js';

const gameDiscription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

interfaceBrainGames(gameDiscription, getTaskPrime);
