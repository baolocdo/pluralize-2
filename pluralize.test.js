// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { pluralize } = require('./pluralize');

test('should return "1 tomato"', () => {
  expect(pluralize('tomato', 1)).toEqual('1 tomato');
});

test('should return "2 apples"', () => {
  expect(pluralize('apple', 2)).toEqual('2 apples');
});

test('should return "10 baloons"', () => {
  expect(pluralize('baloon', 10)).toEqual('10 baloons');
});

test('should return "0 degrees"', () => {
  expect(pluralize('degree', 0)).toEqual('0 degrees');
});

test('should return "-40 degrees"', () => {
  expect(pluralize('degree', -40)).toEqual('-40 degrees');
});

test('should return "2 potatoes"', () => {
  expect(pluralize('potato', 2)).toEqual('2 potatoes');
});

test('should return "10 tomatoes"', () => {
  expect(pluralize('tomato', 10)).toEqual('10 tomatoes');
});

test('should return "3 knife"', () => {
  expect(pluralize('knife', 3)).toEqual('3 knives');
});

test('should return "1 thief"', () => {
  expect(pluralize('thief', 1)).toEqual('1 thief');
});

test('should return "0 thieves"', () => {
  expect(pluralize('thief', 0)).toEqual('0 thieves');
});

test('should return "1 family"', () => {
  expect(pluralize('family', 1)).toEqual('1 family');
});

test('should return "2 families"', () => {
  expect(pluralize('family', 2)).toEqual('2 families');
});

test('should return "1 party"', () => {
  expect(pluralize('party', 1)).toEqual('1 party');
});

test('should return "0 parties"', () => {
  expect(pluralize('party', 0)).toEqual('0 parties');
});