import get from 'lodash/get';
import { getMovements } from '../../util/movement';
import { assignWeightLoadsToMovements } from '../../util/weightLoad';

import { MONOSTRUCTURAL } from '../../../../movementData';
export const SHORT_DURATION_RANGE = 'SHORT_DURATION_RANGE';
export const MODERATE_DURATION_RANGE = 'MODERATE_DURATION_RANGE';
export const LONG_DURATION_RANGE = 'LONG_DURATION_RANGE';

export const TABATA = {
  shortName: 'TABATA',
  longName: 'Tabata',
  divisibleBy: [4, 8, 12, 16],
  possibleDurations: [
    SHORT_DURATION_RANGE
  ],
  movementCounts: {
    SHORT_DURATION_RANGE: [1],
    MODERATE_DURATION_RANGE: [1],
    LONG_DURATION_RANGE: [1]
  },
  workPeriodInSecondsWithRest: 20
};

const formatRepsAndMovements = (movement) => {
  const name = get(movement, 'name');
  const loads = get(movement, 'loads', '');
  const unit = get(movement, 'units', null);

  if (movement.type === MONOSTRUCTURAL && unit) {
    return `${unit} ${name}`;
  }

  return loads ? `${name} ${loads.F}/${loads.M}`: `${name}`;
};

export const getFormattedWeightLoads = (movementswithloads) => {
  return movementswithloads
    .map(movement => formatRepsAndMovements(movement));
};

export const buildTabata = ({ duration, time, name }) => {
  const movementCount = time / 4;
  const movements = getMovements(movementCount);
  const weightLoads = assignWeightLoadsToMovements(movements);
  const formattedRepsAndMovements = getFormattedWeightLoads(weightLoads);
  const title = 'Tabata (0:20 work/0:10 rest)';

  return {
    name,
    title,
    formattedRepsAndMovements
  };
};
