'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Positioner = (function () {
  function Positioner(browserWindow) {
    _classCallCheck(this, Positioner);

    this.browserWindow = browserWindow;
    this.electronScreen = require('screen');
  }

  _createClass(Positioner, [{
    key: '_getCoords',
    value: function _getCoords(position, trayPosition) {
      var screenSize = this._getScreenSize();
      var windowSize = this._getWindowSize();

      if (trayPosition === undefined) trayPosition = {};

      // Positions
      var positions = {
        trayLeft: {
          x: Math.floor(trayPosition.x),
          y: screenSize.y
        },
        trayBottomLeft: {
          x: Math.floor(trayPosition.x),
          y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
        },
        trayRight: {
          x: Math.floor(trayPosition.x - windowSize[0] + trayPosition.width),
          y: screenSize.y
        },
        trayBottomRight: {
          x: Math.floor(trayPosition.x - windowSize[0] + trayPosition.width),
          y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
        },
        trayCenter: {
          x: Math.floor(trayPosition.x - windowSize[0] / 2 + trayPosition.width / 2),
          y: screenSize.y
        },
        trayBottomCenter: {
          x: Math.floor(trayPosition.x - windowSize[0] / 2 + trayPosition.width / 2),
          y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
        },
        topLeft: {
          x: screenSize.x,
          y: screenSize.y
        },
        topRight: {
          x: Math.floor(screenSize.x + (screenSize.width - windowSize[0])),
          y: screenSize.y
        },
        bottomLeft: {
          x: screenSize.x,
          y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
        },
        bottomRight: {
          x: Math.floor(screenSize.x + (screenSize.width - windowSize[0])),
          y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
        },
        topCenter: {
          x: Math.floor(screenSize.x + (screenSize.width / 2 - windowSize[0] / 2)),
          y: screenSize.y
        },
        bottomCenter: {
          x: Math.floor(screenSize.x + (screenSize.width / 2 - windowSize[0] / 2)),
          y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
        },
        center: {
          x: Math.floor(screenSize.x + (screenSize.width / 2 - windowSize[0] / 2)),
          y: Math.floor((screenSize.height + screenSize.y) / 2 - windowSize[1] / 2)
        }
      };

      // Default to right if the window is bigger than the space left.
      // Because on Windows the window might get out of bounds and dissappear.
      if (position.substr(0, 4) === 'tray') {
        if (positions[position].x + windowSize[0] > screenSize.width + screenSize.x) {
          return {
            x: positions['topRight'].x,
            y: positions[position].y
          };
        }
      }

      return positions[position];
    }
  }, {
    key: '_getWindowSize',
    value: function _getWindowSize() {
      return this.browserWindow.getSize();
    }
  }, {
    key: '_getScreenSize',
    value: function _getScreenSize() {
      return this.electronScreen.getDisplayNearestPoint(this.electronScreen.getCursorScreenPoint()).workArea;
    }
  }, {
    key: 'move',
    value: function move(position, trayPos) {
      // Get positions coords
      var coords = this._getCoords(position, trayPos);

      // Set the windows position
      this.browserWindow.setPosition(coords.x, coords.y);
    }
  }, {
    key: 'calculate',
    value: function calculate(position, trayPos) {
      // Get positions coords
      var coords = this._getCoords(position, trayPos);

      return {
        x: coords.x,
        y: coords.y
      };
    }
  }]);

  return Positioner;
})();

exports['default'] = Positioner;
module.exports = exports['default'];
