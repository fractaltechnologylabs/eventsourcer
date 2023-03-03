import { eventSourcer } from './';

test('returns hello world!', () => {
  expect(eventSourcer()).toBe('hello world!');
});
