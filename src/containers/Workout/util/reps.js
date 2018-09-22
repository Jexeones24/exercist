import get from 'lodash/get';
import { HEAVY, MODERATE, MONOSTRUCTURAL, METERS } from '../../../movementData';
import { getRandom } from 'util/random';

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

export const amrapReps = (movement, seconds) => {
  if (movement.intensity) {
    return adjustRepsForIntensity(movement, seconds);
  }

  if (movement.type === MONOSTRUCTURAL && movement.units === METERS) {
    return Math.floor(seconds / movement.secondsPerRep) * 100;
  }

  return Math.floor(seconds / movement.secondsPerRep)
};

const buildAsc = (start, offset) => {
  let res = [];
  for (let i = 0; i < 4; i++) {
    res.push(start);
    start += offset;
  }

  return res;
}

const ladderReps = (ladder) => {
  const type = getRandom(ladder.types);
  const start = getRandom([1, 2, 3]);
  const offset = getRandom(type.offset);

  return buildAsc(start, offset);
};

const randomReps = (movements, seconds) => movements
  .map(movement => amrapReps(movement, seconds));

export const getAmrapReps = (args) => {
  const {
    weightLoadedMovements: movements,
    repScheme,
    secondsPerMovement: seconds
  } = args;

  const reps = (repScheme.name === 'RANDOM') ? randomReps(movements, seconds) : ladderReps(repScheme);
  return mapRepsToMovements({ reps, movements, repScheme });
};

const mapRepsToMovements = (args) => {
  const { reps, movements, repScheme: { name } } = args;
  if (name === 'RANDOM') {
    const unformattedValues = reps.map((rep, i) => [ rep, movements[i] ]);
    return unformattedValues.map(v => formatRandom(v));
  }

  const result = [formatLadder({ reps, movements })];
  return result;
};

const formatRandom = (values) => {
  const reps = values[0];
  const movement = values[1];
  const name = get(movement, 'name');
  const loads = get(movement, 'loads', '');
  const unit = get(movement, 'units', null);

  if (movement.type === MONOSTRUCTURAL && unit) {
    return `${reps} ${unit} ${name}`;
  }

  return loads ? `${reps} ${name} ${loads.F}/${loads.M}`: `${reps} ${name}`;
};

const formatLadder = (values) => {
  const { reps, movements } = values;

  const str = movements.map(m => {
    const name = get(m, 'name');
    const loads = get(m, 'loads', '');
    const unit = get(m, 'units', null);
    const type = get(m, 'type', null);

    if (type === MONOSTRUCTURAL && unit) {
      return `${name}`;
    }

    return loads ? `${name} ${loads.F}/${loads.M}`: `${name}`;
  }).join(', ');

  return `${reps.join(', ')}... each of ${str}`;
};
