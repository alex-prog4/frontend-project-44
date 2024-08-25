#!/usr/bin/env node
import interfaceBrainGames from '../src/index.js';
import { getTaskProgression } from '../src/generatingTaskBrainGames.js';

const gameDiscription = 'What number is missing in the progression?';

interfaceBrainGames(gameDiscription, getTaskProgression);
