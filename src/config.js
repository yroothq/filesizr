const readPkgUp = require('read-pkg-up')
const cli = require('commander')
const { error } = require('prettycli')
const debug = require('./debug');

const pkg = readPkgUp.sync().pkg
const pkgConfig = pkg.filesizr

cli
    .name(pkg.name)
    .description(pkg.description)
    .version(pkg.version)
    .option('-f, --files <files>', 'files to validate against (example: ./dist/*.js)')
    .option('-s, --max-size <maxSize>', 'maximum size threshold (example: 1KB)')
    .option('--uncompressed', 'validate against uncompressed file')
    .option('--debug', 'show debug messages')
    .parse(process.argv)

let cliConfig

if (cli.files) {
    cliConfig = [
        {
            path: cli.files,
            maxSize: cli.maxSize,
            compressed: !cli.uncompressed
        }
    ]    
}

if (!pkgConfig && !cliConfig) {
    error(`Config not found.`, { silent: true })
}

let config
if (cliConfig) {
    debug("Using cli config", cliConfig)
    config = cliConfig
}
else {
    debug("Using package.json config", pkgConfig)
    config = pkgConfig    
}
module.exports = config