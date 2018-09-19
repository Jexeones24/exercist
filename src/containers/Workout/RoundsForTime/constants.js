import { range } from 'util/range';

export const ROUNDS_FOR_TIME =  {
  shortName: 'ROUNDS_FOR_TIME',
  longName: 'Rounds for Time',
  roundsByDuration: {
    SHORT_DURATION_RANGE: range(2, 5),
    MODERATE_DURATION_RANGE: range(2, 6),
    LONG_DURATION_RANGE: range(2, 10)
  }
};
