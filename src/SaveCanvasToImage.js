export function saveImage(canvas_id, fileName, format) {
    let MIME_TYPE, FILE_EXTENTION;
    if (format.toLowerCase() == "png") {
        MIME_TYPE = "image/png";
        FILE_EXTENTION = "png"
    } else if (format.toLowerCase() == "webp") {
        MIME_TYPE = "image/webp";
        FILE_EXTENTION = "webp"
    } else if (format.toLowerCase() == "gif") {
        MIME_TYPE = "image/gif";
        FILE_EXTENTION = "gif"
    } else {
        MIME_TYPE = "image/jpeg";
        FILE_EXTENTION = "jpg"
    }

    // IE11, Edge browser 
    if (navigator.msSaveOrOpenBlob) {
        const blob = document.getElementById(canvas_id).msToBlob(MIME_TYPE, 1);
        window.navigator.msSaveBlob(blob, fileName + "." + FILE_EXTENTION)
    }
    // Other browser 
    else {
        const imgURL = document.getElementById(canvas_id).toDataURL(MIME_TYPE, 1);
        const a = document.createElement('a');
        a.download = fileName + "." + FILE_EXTENTION;
        a.href = imgURL;
        a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

export function saveJPEG(id, fileName) {
    saveImage(id, fileName, "jpeg");
}

export function savePNG(id, fileName) {
    saveImage(id, fileName, "png");
}

export function saveGIF(id, fileName) {
    saveImage(id, fileName, "gif");
}

export function saveWEBP(id, fileName) {
    saveImage(id, fileName, "webp");
}