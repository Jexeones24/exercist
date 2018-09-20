import { range } from 'util/range';

export const DURATIONS = {
  SHORT_DURATION_RANGE: range(5, 13),
  MODERATE_DURATION_RANGE: range(14, 25),
  LONG_DURATION_RANGE: range(26, 45)
};

export const getDuration = (time) => {
  let duration;

  for (var range in DURATIONS) {
    if (DURATIONS.hasOwnProperty(range) && DURATIONS[range].includes(time)) {
      duration = range;
    }
  };

  return duration;
};
