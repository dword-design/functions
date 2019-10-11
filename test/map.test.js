const map = require('@dword-design/functions/map')
const expect = require('expect')

it('map', () => expect(map(x => x * 2)([1, 2])).toEqual([2, 4]))
