import { measureTime } from 'measure-time';

import self from './delay.js';

export default {
  works: async () => {
    const timer = measureTime();
    await self(1000);
    expect(timer().millisecondsTotal).toBeGreaterThanOrEqual(1000);
  },
};
