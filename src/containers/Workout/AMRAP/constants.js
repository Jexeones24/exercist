export const AMRAP = {
  shortName: 'AMRAP',
  longName: 'As Many Rounds and Reps as Possible',
  movementCounts: {
    SHORT_DURATION_RANGE: [2, 3],
    MODERATE_DURATION_RANGE: [2, 3, 4],
    LONG_DURATION_RANGE: [3, 5]
  },
  repSchemes: [
    {
      name: 'LADDER',
      types: [
        {
          name: 'ASCENDING',
          offset: [1, 2, 3, 4]
        }
      ]
    },
    { name: 'RANDOM' }
  ]
};

