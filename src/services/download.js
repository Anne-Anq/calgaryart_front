// const fs = require('fs');
// const download = require('download');
import fs from "fs"
import download from "download"
// function onStartedDownload(id) {
//     console.log(`Started downloading: ${id}`);
// }

// function onFailed(error) {
//     console.log(`Download failed: ${error}`);
// }

// var downloadUrl = "https://example.org/image.png";

// const downloading = (url) => download({
//     url: url,
//     filename: 'my-image-again.png',
//     conflictAction: 'uniquify'
// });

// download('https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80').then(console.log('dl')


export default () => download('http://unicorn.com/foo.jpg').then(data => {
    fs.writeFileSync('dist/foo.jpg', data);
});
