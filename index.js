let express = require('express');
let app = express();
let path = require("path");

const port = process.env.PORT || 3000;

// Serve index
app.use(express.static(path.join(__dirname, "app")));

// Test api route, return request parameter in JSON
app.use("/api/test/:testData", (req, res) => {
    res.json({
        data: req.params
    });
});

// Listen
app.listen(port, () => {
    console.log("Listening on port " + port);
});

/*
// yt stuff
let fs = require('fs');
let youtubedl = require('youtube-dl');

app.get('/', function (req, res) {
    //res.sendFile("./index.html");
    //res.sendFile("./StreamVideo.js");

    var video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
        // Optional arguments passed to youtube-dl.
        ['--format=18'],
        // Additional options can be given for calling `child_process.execFile()`.
        {cwd: __dirname});

// Will be called when the download starts.
    video.on('info', function (info) {
        console.log('Download started');
        console.log('filename: ' + info.filename);
        console.log('size: ' + info.size);
    });

    video.pipe(fs.createWriteStream('myvideo.mp4'));
})
*/
