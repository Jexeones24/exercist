export const WEIGHTLIFTING = 'WEIGHTLIFTING';
export const GYMNASTIC = 'GYMNASTIC';
export const MONOSTRUCTURAL = 'MONOSTRUCTURAL';

export const LIGHT = 'LIGHT';
export const MODERATE = 'MODERATE';
export const HEAVY = 'HEAVY';

export const METERS = 'meter';
export const CALORIES = 'Calorie';

export const WEIGHT_LOADS = [
  LIGHT,
  MODERATE,
  HEAVY
];

const SQUAT = {
  name: 'Squat',
  type: WEIGHTLIFTING,
  secondsPerRep: 3,
  weightLoads: {
    LIGHT: { M: 135, F: 95 },
    MODERATE: { M: 225, F: 135 },
    HEAVY: { M: 315, F: 225 }
  }
};

const PRESS = {
  name: 'Press',
  type: WEIGHTLIFTING,
  secondsPerRep: 2,
  weightLoads: {
    LIGHT: { M: 95, F: 65 },
    MODERATE: { M: 135, F: 95 },
    HEAVY: { M: 155, F: 105 }
  }
};

const DEADLIFT = {
  name: 'Deadlift',
  type: WEIGHTLIFTING,
  secondsPerRep: 3,
  weightLoads: {
    LIGHT: { M: 135, F: 95 },
    MODERATE: { M: 225, F: 135 },
    HEAVY: { M: 315, F: 225 }
  }
};

const SNATCH = {
  name: 'Snatch',
  type: WEIGHTLIFTING,
  secondsPerRep: 5,
  weightLoads: {
    LIGHT: { M: 95, F: 65 },
    MODERATE: { M: 135, F: 95 },
    HEAVY: { M: 205, F: 135 }
  }
};

const CLEAN_AND_JERK = {
  name: 'Clean & Jerk',
  type: WEIGHTLIFTING,
  secondsPerRep: 5,
  weightLoads: {
    LIGHT: { M: 95, F: 65 },
    MODERATE: { M: 135, F: 95 },
    HEAVY: { M: 205, F: 135 }
  }
};

const BENCH_PRESS = {
  name: 'Bench Press',
  type: WEIGHTLIFTING,
  secondsPerRep: 3,
  weightLoads: {
    LIGHT: { M: 95, F: 65 },
    MODERATE: { M: 135, F: 95 },
    HEAVY: { M: 205, F: 135 }
  }
};

const THRUSTER = {
  name: 'Thruster',
  type: WEIGHTLIFTING,
  secondsPerRep: 4,
  weightLoads: {
    LIGHT: { M: 95, F: 65 },
    MODERATE: { M: 135, F: 95 },
    HEAVY: { M: 205, F: 135 }
  }
};

const PULLUP = {
  name: 'Pullup',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const PUSHUP = {
  name: 'Pushup',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const DIP = {
  name: 'Dip',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const MUSCLE_UP = {
  name: 'Muscle Up',
  secondsPerRep: 8,
  type: GYMNASTIC
};

const HANDSTAND_PUSHUP = {
  name: 'Handstand Pushup',
  secondsPerRep: 5,
  type: GYMNASTIC
};

const HANDSTAND_WALK = {
  name: 'Handstand Walk',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const BOX_JUMP = {
  name: 'Box Jump',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const WALLBALL = {
  name: 'Wallball',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const BALL_SLAM = {
  name: 'Ball Slam',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const BURPEE = {
  name: 'Burpee',
  secondsPerRep: 4,
  type: GYMNASTIC
};

const PISTOL = {
  name: 'Pistol',
  secondsPerRep: 3,
  type: GYMNASTIC
};

const DOUBLE_UNDER = {
  name: 'Double Under',
  secondsPerRep: .8,
  type: MONOSTRUCTURAL
};

const RUN = {
  name: 'Run',
  secondsPerRep: 10,
  type: MONOSTRUCTURAL,
  units: METERS
};

const ROW = {
  name: 'Row',
  secondsPerRep: 4,
  type: MONOSTRUCTURAL,
  units: CALORIES
};

const BIKE = {
  name: 'Bike',
  secondsPerRep: 4,
  type: MONOSTRUCTURAL,
  units: CALORIES
};

export const MOVEMENTS = [
  SQUAT,
  PRESS,
  DEADLIFT,
  SNATCH,
  CLEAN_AND_JERK,
  BENCH_PRESS,
  THRUSTER,
  PULLUP,
  PUSHUP,
  DIP,
  MUSCLE_UP,
  HANDSTAND_PUSHUP,
  HANDSTAND_WALK,
  BOX_JUMP,
  WALLBALL,
  BALL_SLAM,
  BURPEE,
  PISTOL,
  DOUBLE_UNDER,
  RUN,
  ROW,
  BIKE
];

export const WEIGHTLIFTING_MOVEMENTS = MOVEMENTS.filter(movement => movement.type === WEIGHTLIFTING);
export const GYMNASTIC_MOVEMENTS = MOVEMENTS.filter(movement => movement.type === GYMNASTIC);
export const MONOSTRUCTURAL_MOVEMENTS = MOVEMENTS.filter(movement => movement.type === MONOSTRUCTURAL);
