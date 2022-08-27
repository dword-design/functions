import remove from './remove'

export default {
  valid: () => {
    const array = ['foo', 'bar', 'baz']
    expect(array |> remove(item => item === 'bar')).toEqual(['foo', 'baz'])
    expect(array).toEqual(['foo', 'bar', 'baz'])
  },
}
