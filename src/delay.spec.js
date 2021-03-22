import { measureTime } from 'measure-time'

import self from './delay'

export default {
  works: async () => {
    const timer = measureTime()
    await self(1000)
    expect(timer().millisecondsTotal).toBeGreaterThanOrEqual(1000)
  },
}
