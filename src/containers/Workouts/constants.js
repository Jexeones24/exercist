export const AMRAP = {
  name: 'AMRAP',
  longName: 'As Many Rounds & Reps as Possible',
  repSchemes: [
    'ascending ladder',
    'descending ladder',
    'flat even numbers',
    'flat odd numbers',
    'classic',
    'random'
  ],
};

// 21 minus 3, recursive
// classics - '21-15-9', '3-6-9'
export const FOR_TIME = {
  name: 'FOR_TIME',
  longName: 'For Time',
  repSchemes: [
    'classic',
    'multiples of 2',
    'multiples of 3',
    'multiples of 10',
    'ascending multiples of',
    'descending multiples of'
  ],
};

export const ROUNDS_FOR_TIME = {
  name: 'ROUNDS_FOR_TIME',
  longName: 'Rounds For Time',
  repSchemes: [
    'random',
    'flat even numbers',
    'flat odd numbers',
    'classic',
  ],
};

export const CHIPPER = {
  name: 'CHIPPER',
  longName: 'Chipper - Complete For Time',
  repSchemes: [
    'multiples of 10',
    'ascending by 10',
    'descending by 10'
  ],
};

export const INTERVAL = {
  name: 'INTERVAL'
};

export const TABATA = {
  name: 'TABATA',
  repSchemes: [
    'normal'
  ],
};

export const EMOM = {
  name: 'EMOM',
  longName: 'Every Minute on the Minute',
  repSchemes: [],
};

export const E2MOM = {
  name: 'Every Two Minutes on the Minute',
  repSchemes: [],
};

export const E3MOM = {
  name: 'Every Three Minutes on the Minute',
  repSchemes: [],
};
