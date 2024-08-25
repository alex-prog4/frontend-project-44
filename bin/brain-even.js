#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';
import { getTaskEven,  } from '../src/generatingTaskBrainGames.js';

const gameDiscription = 'Answer "yes" if the number is even, otherwise answer "no".';

interfaceBrainGames(gameDiscription, getTaskEven);
