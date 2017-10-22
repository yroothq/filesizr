# Filesizr
Filesizr is a file size validator

## Installation
By using yarn (the recommended way):
```bash 
yarn add -D filesizr
```
Or by using npm:
```bash 
npm install --save-dev filesizr
```

## Configuration
Add your configuration to your `package.json` file.
Example:
```json
  "filesizr": [
    {
      "path": "index.js",
      "maxSize": "100 B",
      "compressed": false
    },
    {
      "path": "src/*.js",
      "maxSize": "3 kB"
    },
    {
      "path": "index.js",
      "maxSize": "100 B",
      "compressed": true
    }
  ]
```

## Usage
Add `filesizr` in your `scripts`
```json
"scripts": {
  "test": "filesizr"
}
```

## CLI
```bash
$ filesizr -f ./dist/inde*.js -s 100b
```

## Informations

### Similar projects
- [bundlesize](https://www.npmjs.com/package/bundlesize)

### License
MIT