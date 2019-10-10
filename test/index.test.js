const api = require('this')

test('exports map', () => expect(api.map(x => x * 2)([1, 2])).toEqual([2, 4]))
