# save-canvas-to-image

Convert canvas to image and the browser start downloading to image

## Installation

```javascript
npm install --save save-canvas-to-image

or

yarn add save-canvas-to-image
```
## Demo

[View the demo page](https://bytefunc.github.io/save-canvas-to-image/docs/demo/)

## Usage

```javascript
import saveCanvas from "save-canvas-to-image";

saveCanvas.saveImage("canvas_id", "file_name", "format");
saveCanvas.saveJPEG("canvas_id", "file_name"); 
saveCanvas.savePNG("canvas_id", "file_name");
saveCanvas.saveWEBP("canvas_id", "file_name"); // chrome and firefox only?
```


## License

MIT
