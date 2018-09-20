import { getNRandom } from 'util/random';
import { MOVEMENTS } from '../../../movementData';

export const getMovements = (number) => getNRandom(number, MOVEMENTS);
export const calculateSecondsPerMovement = (allottedTime, count) => allottedTime / count;
