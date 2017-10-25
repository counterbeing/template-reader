import fs from 'fs'
import _ from 'lodash'

function templateReader(templateFile, replacements) {
  let template = fs.readFileSync(
    templateFile
  ).toString()

  let compiled = _.template(template)
  let scriptAsString = compiled(replacements)
  return eval(scriptAsString)
}

export default templateReader

