import saveCanvas from "save-canvas-to-image";

// JPEG 画像
document.getElementById("btn_jpeg").addEventListener("click", function () {
    saveCanvas.saveImage("canvas", "demo", "jpg");
});

// PNG 画像
document.getElementById("btn_png").addEventListener("click", function () {
    saveCanvas.savePNG("canvas", "demo");
});

// PNG 画像
document.getElementById("btn_webp").addEventListener("click", function () {
    saveCanvas.saveWEBP("canvas", "demo");
});