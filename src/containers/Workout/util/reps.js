import { MONOSTRUCTURAL, METERS } from '../../../movementData';

export const getReps = (movement, seconds) => {
  let repsPerRound;

  if (movement.type === MONOSTRUCTURAL && movement.units === METERS) {
    repsPerRound = Math.floor(seconds / movement.secondsPerRep) * 100;
    return [ repsPerRound, movement ]
  }

  repsPerRound = Math.floor(seconds / movement.secondsPerRep)
  return [ repsPerRound, movement ]
};
