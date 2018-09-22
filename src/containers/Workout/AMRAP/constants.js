export const AMRAP = {
  shortName: 'AMRAP',
  longName: 'As Many Rounds and Reps as Possible',
  movementCounts: {
    SHORT_DURATION_RANGE: [2, 3],
    MODERATE_DURATION_RANGE: [2, 3, 4],
    LONG_DURATION_RANGE: [3, 5]
  },
  repSchemes: [
    { name: 'ASCENDING_LADDER' },
    { name: 'DESCENDING_LADDER' },
    { name: 'CLASSIC' },
    { name: 'TENS' },
    { name: 'RANDOM' }
  ]
};

