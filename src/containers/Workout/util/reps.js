import { HEAVY, MODERATE, MONOSTRUCTURAL, METERS } from '../../../movementData';

const adjustRepsForIntensity = (movement, seconds) => {
  if (movement.intensity === HEAVY) {
    return Math.floor(seconds / (movement.secondsPerRep + 7));
  }

  if (movement.intensity === MODERATE) {
    return Math.floor(seconds / (movement.secondsPerRep + 3));
  }

    return Math.floor(seconds / (movement.secondsPerRep + 1))
};

export const getReps = (movement, seconds) => {
  let repsPerRound;

  if (movement.intensity) {
    repsPerRound = adjustRepsForIntensity(movement, seconds);

    return [ repsPerRound, movement ];
  }

  if (movement.type === MONOSTRUCTURAL && movement.units === METERS) {
    repsPerRound = Math.floor(seconds / movement.secondsPerRep) * 100;
    return [ repsPerRound, movement ];
  }

  repsPerRound = Math.floor(seconds / movement.secondsPerRep)
  return [ repsPerRound, movement ];
};
