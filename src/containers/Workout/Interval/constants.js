export const SHORT_DURATION_RANGE = 'SHORT_DURATION_RANGE';
export const MODERATE_DURATION_RANGE = 'MODERATE_DURATION_RANGE';
export const LONG_DURATION_RANGE = 'LONG_DURATION_RANGE';

export const INTERVAL = {
  shortName: 'INTERVAL'
};

export const TABATA = {
  shortName: 'TABATA',
  longName: 'Tabata',
  divisibleBy: [4, 8, 16, 20],
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

export const EMOM = {
  shortName: 'EMOM',
  longName: 'Every Minute on the Minute',
  divisibleBy: [1, 2, 3, 4, 5],
  possibleDurations: [
    SHORT_DURATION_RANGE,
    MODERATE_DURATION_RANGE
  ],
  movementCounts: {
    SHORT_DURATION_RANGE: [1],
    MODERATE_DURATION_RANGE: [1, 2],
    LONG_DURATION_RANGE: [1, 2]
  },
  workPeriodInSecondsWithRest: 50
};

export const E2MOM = {
  shortName: 'E2MOM',
  longName: 'Every Two Minutes on the Minute',
  divisibleBy: [2],
  possibleDurations: [
    SHORT_DURATION_RANGE,
    MODERATE_DURATION_RANGE
  ],
  movementCounts: {
    SHORT_DURATION_RANGE: [1, 2],
    MODERATE_DURATION_RANGE: [1, 2],
    LONG_DURATION_RANGE: [1, 2]
  },
  workPeriodInSecondsWithRest: 100
};

export const E3MOM = {
  shortName: 'E3MOM',
  longName: 'Every Three Minutes on the Minute',
  divisibleBy: [3],
  possibleDurations: [
    SHORT_DURATION_RANGE,
    MODERATE_DURATION_RANGE,
    LONG_DURATION_RANGE
  ],
  movementCounts: {
    SHORT_DURATION_RANGE: [1, 2],
    MODERATE_DURATION_RANGE: [1, 2, 3],
    LONG_DURATION_RANGE: [1, 2, 3]
  },
  workPeriodInSecondsWithRest: 150
};

export const INTERVAL_TYPES = [
  TABATA,
  EMOM,
  E2MOM,
  E3MOM
];
