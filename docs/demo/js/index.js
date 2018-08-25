/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _saveCanvasToImage = __webpack_require__(1);

var _saveCanvasToImage2 = _interopRequireDefault(_saveCanvasToImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// JPEG 画像
document.getElementById("btn_jpeg").addEventListener("click", function () {
    _saveCanvasToImage2.default.saveImage("canvas", "demo", "jpg");
});

// PNG 画像
document.getElementById("btn_png").addEventListener("click", function () {
    _saveCanvasToImage2.default.savePNG("canvas", "demo");
});

// PNG 画像
document.getElementById("btn_webp").addEventListener("click", function () {
    _saveCanvasToImage2.default.saveWEBP("canvas", "demo");
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function saveImage(canvas_id, fileName, format) {
  var MIME_TYPE, FILE_EXTENTION;

  if (format.toLowerCase() == "png") {
    MIME_TYPE = "image/png";
    FILE_EXTENTION = "png";
  } else if (format.toLowerCase() == "webp") {
    MIME_TYPE = "image/webp";
    FILE_EXTENTION = "webp";
  } else if (format.toLowerCase() == "gif") {
    MIME_TYPE = "image/gif";
    FILE_EXTENTION = "gif";
  } else {
    MIME_TYPE = "image/jpeg";
    FILE_EXTENTION = "jpg";
  } // IE11, Edge browser 


  if (navigator.msSaveOrOpenBlob) {
    var blob = document.getElementById(canvas_id).msToBlob(MIME_TYPE, 1);
    window.navigator.msSaveBlob(blob, fileName + "." + FILE_EXTENTION);
  } // Other browser 
  else {
      var imgURL = document.getElementById(canvas_id).toDataURL(MIME_TYPE, 1);
      var a = document.createElement('a');
      a.download = fileName + "." + FILE_EXTENTION;
      a.href = imgURL;
      a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
}

function saveJPEG(id, fileName) {
  saveImage(id, fileName, "jpeg");
}

function savePNG(id, fileName) {
  saveImage(id, fileName, "png");
}

function saveGIF(id, fileName) {
  saveImage(id, fileName, "gif");
}

function saveWEBP(id, fileName) {
  saveImage(id, fileName, "webp");
}

module.exports = {
  saveImage: saveImage,
  saveJPEG: saveJPEG,
  savePNG: savePNG,
  saveGIF: saveGIF,
  saveWEBP: saveWEBP
};

/***/ })
/******/ ]);