import { add, sum } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('sum', () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});
