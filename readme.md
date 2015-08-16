# [WIP] Electron-positioner [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
> Helps positioning your electron windows.

## Install
```
WIP
```

## Usage
```Javascript
var positioner = require('electron-positioner')

// Position the window top right on the screen.
positioner('topRight', browserWindow)

// You can also pass an array `[width, height]` instead of the `browser-window`.
// Returns: `{x,y}`
positioner('trayCenter', [200, 200], trayBounds)

// Note, only these positions requires `trayBounds`:
// `trayLeft`
// `trayRight`
// `trayCenter`
```

## Docs

#### positioner(position, browserWindow, trayBounds)

##### position
A string telling where to place the window.
Allowed values:
- `trayLeft`
- `trayRight`
- `trayCenter`
- `topLeft`
- `topRight`
- `bottomLeft`
- `bottomRight`
- `topCenter`
- `bottomCenter`
- `center`

##### browserWindow
The [browser-window](https://github.com/atom/electron/blob/master/docs/api/browser-window.md) instance.
Could also be an array containing your windows width and height `[width, height]`.

If `browser-window` instance is used then `positioner` will set the position of the window with `browserWindow.setPosition()`.
If you just passing an array, `{x,y}` will be returned.

##### trayBounds
Tray bounds, only needed for the following positions:
- `trayLeft`
- `trayRight`
- `trayCenter`

## Tests
```
npm test
```

## License
MIT
