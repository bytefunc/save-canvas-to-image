"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveImage = saveImage;
exports.saveJPEG = saveJPEG;
exports.savePNG = savePNG;
exports.saveGIF = saveGIF;
exports.saveWEBP = saveWEBP;

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