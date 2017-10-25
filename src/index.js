import fs from 'fs'
import _ from 'lodash'

function asString(templateFile, replacements) {
  let template = fs.readFileSync(
    templateFile
  ).toString()

  let compiled = _.template(template)
  return compiled(replacements)
}

let asFunction = (templateFile, replacements) => {
  return eval(scriptAsString(templateFile, replacements))
}

export default {
    asFunction,
    asString
}
