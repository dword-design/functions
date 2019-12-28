import resolveTaggedTemplate from 'resolve-tagged-template'
import split from './split'
import min from './min'
import join from './join'
import map from './map'
import filter from './filter'
import trim from './trim'
import drop from './drop'
import dropRight from './drop-right'
import first from './first'
import last from './last'

export default (...args) => {
  const string = resolveTaggedTemplate(...args)
  const lines = string |> split('\n')
  const linesWithContent = lines |> filter(line => (line |> trim) !== '')
  const indent = linesWithContent |> map(line => line.match(/^(\s*)[^\s].*$/)[1].length) |> min
  let trimmedLines = lines
  if ((lines |> first |> trim) === '') {
    trimmedLines = trimmedLines |> drop()
  }
  if ((lines |> last |> trim) === '') {
    trimmedLines = trimmedLines |> dropRight()
  }
  return trimmedLines
    |> map(line => line.substr(indent))
    |> join('\n')
}
