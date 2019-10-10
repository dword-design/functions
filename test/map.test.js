const map = require('../dist/map')

test('map', () => expect(map(x => x * 2)([1, 2])).toEqual([2, 4]))
