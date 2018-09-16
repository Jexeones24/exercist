import { range } from 'util/range';

export const SHORT_DURATION = 'SHORT_DURATION';
export const MODERATE_DURATION = 'MODERATE_DURATION';
export const LONG_DURATION = 'LONG_DURATION';

const DURATIONS = [
  { name: SHORT_DURATION,
    range: range(5, 12)
  },
  {
    name: MODERATE_DURATION,
    range: range(13, 30)
  },
  {
    name: LONG_DURATION,
    range: range(31, 60)
  }
];

export const getDuration = (num) => DURATIONS.filter(d => d.range.includes(num))[0].name;
