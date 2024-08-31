export const add = (a: number, b: number) => a + b;

export function sum(numbers: number[], currentValue = 0): number {
  return numbers.reduce(add, currentValue);
}
