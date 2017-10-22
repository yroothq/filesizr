const fs = require('fs')
const bytes = require('bytes')
const glob = require('glob')
const gzip = require('gzip-size')
const { error } = require('prettycli')
const config = require('./config')
const debug = require('./debug')

const files = []
config.map(file => {
    const paths = glob.sync(file.path)

    if(file.compressed === undefined){
        file.compressed = true
    }

    if (!paths.length) {
        error(`There is no matching file for ${file.path} in ${process.cwd()}`, {
            silent: true
        })
    } else {
        let size = 0;
        const maxSize = bytes(file.maxSize) || Infinity

        paths.map((path) => {
            if(file.compressed){
                size += gzip.sync(fs.readFileSync(path, 'utf8'))
            }
            else {
                const stats = fs.statSync(path)
                size += stats.size
            }
            
        })
        files.push({ maxSize: maxSize, path: file.path, size:size, compressed: file.compressed })        
    }
})

debug('files', files)

module.exports = files