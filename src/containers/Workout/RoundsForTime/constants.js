import { range } from 'util/range';

export const ROUNDS_FOR_TIME =  {
  shortName: 'ROUNDS_FOR_TIME',
  longName: 'Rounds for Time',
  SHORT_DURATION_RANGE: {
    roundCountRange: range(2, 3),
    movements: range(2, 3)
  },
  MODERATE_DURATION_RANGE: {
    roundCountRange: range(2, 10),
    movements: range(2, 3)
  },
  LONG_DURATION_RANGE: {
    roundCountRange: range(5, 30),
    movements: range(3, 5)
  }
};
