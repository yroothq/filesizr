const { loading } = require('prettycli')

let debugMode = false
if (process.argv.indexOf('--debug') !== -1){
    debugMode = true
}

const debug = (label, data) => {
    if (debugMode) {
        loading('DEBUG',`${label}\n\r${JSON.stringify(data, null, 2)}`)
    }
}

module.exports = debug