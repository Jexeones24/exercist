import get from 'lodash/get';
import omit from 'lodash/omit';
import { getRandom } from 'util/random';
import { getReps } from './reps';
import { MONOSTRUCTURAL, WEIGHTLIFTING, WEIGHT_LOADS } from '../../../movementData';

const getWeightLoad = (movement) => {
  if (movement.type === WEIGHTLIFTING) {
    const intensity = getRandom(WEIGHT_LOADS);
    const loads = movement.weightLoads[intensity];

    return {
      loads,
      ...omit(movement, ['weightLoads'])
    };
  }

  return { ...omit(movement, ['intensity']) };
};

export const assignWeightLoadsToMovements = (movements) => movements
  .map(movement => getWeightLoad(movement));


const formatRepsAndMovements = (movement) => {
  const reps = movement[0];
  const movementObj = movement[1];
  const name = get(movementObj, 'name');
  const loads = get(movementObj, 'loads', '');
  const unit = get(movementObj, 'units', null);

  if (movementObj.type === MONOSTRUCTURAL && unit) {
    return `${reps} ${unit} ${name}`;
  }

  return loads ? `${reps} ${name} ${loads.F}/${loads.M}`: `${reps} ${name}`;
};

export const getFormattedWeightLoads = (movementsWithLoads, secondsPerMovement) => {
  const unformatted = movementsWithLoads
    .map(movement => getReps(movement, secondsPerMovement));

  return unformatted.map(u => formatRepsAndMovements(u));
};

