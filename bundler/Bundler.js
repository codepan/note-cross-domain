const path = require('path')
const shell = require('shelljs')

class Bundler {
  constructor (config) {
    this.config = config
  }
  run () {
    const entry = path.resolve(process.cwd(), this.config.entry)
    const output = path.resolve(process.cwd(), this.config.output)

    const command = `gitbook build ${entry} ${output} && gulp`
    shell.exec(command)
  }
}

module.exports = Bundler