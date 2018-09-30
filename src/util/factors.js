export const factors = number => [...Array(number + 1).keys()].filter(i => number % i === 0)

// [...Array(number + 1).keys()] creates empty array with N places
// filters populated array with elements that satisfy the condition
