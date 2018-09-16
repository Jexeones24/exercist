export const range = (lo, hi) => {
  hi = Number(hi);
  lo = Number(lo);

  if (isNaN(hi) || isNaN(lo)) {
    throw new Error ('Arguments must be numbers');
  }

  if ( lo === 0 && hi === 0) { return 0; }

  let list = [];

  for (let i = lo; i <= hi; i++) {
    list.push(i);
  }

  return list;
};
