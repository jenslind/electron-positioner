module.exports = function position (position, browserWindow, trayPosition) {

  // Get window size
  var windowSize = (typeof browserWindow.getSize === 'function') ? browserWindow.getSize() : browserWindow

  // Positions
  var positions = {
    trayLeft: {
      x: Math.floor(trayPosition.x),
      y: 0
    },
    trayRight: {
      x: Math.floor(trayPosition.x - (windowSize[0]) + trayPosition.width),
      y: 0
    },
    trayCenter: {
      x: Math.floor(trayPosition.x - ((windowSize[0] / 2)) + (trayPosition.width / 2)),
      y: 0
    }
  }

  return {
    x: positions[position].x,
    y: positions[position].y
  }
}
