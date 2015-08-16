# Electron-positioner [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
> Helps positioning your electron windows.

## Install
```
npm install --save electron-positioner
```

## Usage
```Javascript
var positioner = require('electron-positioner')

// Position the window top right on the screen.
positioner('topRight', browserWindow)

// You can also pass an array `[width, height]` instead of the `browser-window`.
// Returns: `{x,y}`
positioner('trayCenter', [200, 200], trayBounds)

// Only these positions requires `trayBounds`:
// `trayLeft`
// `trayRight`
// `trayCenter`
positioner('topRight', browserWindow)
```

## Docs

## Tests
```
npm test
```

## License
MIT
