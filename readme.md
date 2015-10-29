# Electron-positioner [![Build Status](https://travis-ci.org/jenslind/electron-positioner.svg?branch=master)](https://travis-ci.org/jenslind/electron-positioner) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
> Helps positioning your electron windows.

## Install
```
npm install --save electron-positioner
```

## Usage
```Javascript
var Positioner = require('electron-positioner')
var positioner = new Positioner(browserWindow)

// Moves the window top right on the screen.
positioner.move('topRight')

// Returns `{x,y}`
positioner.calculate('trayCenter', trayBounds)

// Note, `trayBounds` is only required with the positions that starts with `tray`.
```

## Docs

#### new Positioner (browserWindow)
Constructor

##### browserWindow
The [browser-window](https://github.com/atom/electron/blob/master/docs/api/browser-window.md) instance.

#### calculate (position, trayBounds)
Returns coordinates `{x,y}`.

#### move (position, trayBounds)
Moves the window with `browserWindow.setPosition()`

##### position
A string telling where to place the window.
Allowed values:
- `trayLeft`
- `trayBottomLeft`
- `trayRight`
- `trayBottomRight`
- `trayCenter`
- `trayBottomCenter`
- `topLeft`
- `topRight`
- `bottomLeft`
- `bottomRight`
- `topCenter`
- `bottomCenter`
- `center`

##### trayBounds
Tray bounds, only needed for the following positions:
- `trayLeft`
- `trayBottomLeft`
- `trayRight`
- `trayBottomRight`
- `trayCenter`
- `trayBottomCenter`

## Tests
```
npm test
```

## License
MIT
