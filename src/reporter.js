const bytes = require('bytes')
const { error, info } = require('prettycli')
const debug = require('./debug')

const reporter = (files = {}) => {
    let failed = false
  
    files.map(file => {

        let message = `${file.path}: ${bytes(file.size)} `
        const prettySize = bytes(file.maxSize)
        
        let gzip = ""
        if(file.compressed) gzip = " gzip"

        if (file.size > file.maxSize) {
            failed = true
            if (prettySize) message += `> maxSize ${prettySize}${gzip}`

            error(message, { fail: false, label: 'FAIL' })
        } else {
            if (prettySize) message += `< maxSize ${prettySize}${gzip}`
            
            info('PASS', message)
        }

        debug('message', message)
    })
    if (failed) error('One or more file have a heigher file size than specified!', {fail: true, label: 'FAIL'})    
}

module.exports = reporter