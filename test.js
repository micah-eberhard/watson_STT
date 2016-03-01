'use strict';

require('dotenv').load();
var watson = require('watson-developer-cloud');
var fs = require('fs');


var personality_insights = watson.personality_insights({
username: details.username,
password: details.password,
url: "https://gateway.watsonplatform.net/personality-insights/api",
version: 'v2'
});

var my_profile = "This is a string about my dog. My dog is the greatest cat ever! I like cats. Am I crazy? I think that is likely, but what do other people think? What do you think Watson? Am I crazy? First, we need to create an application on Twitter developers. Create a new app with Read only permission. It will be enough for our application. Now, generate your access token. You should have 4 tokens: Application API Key, Application API Secret, Access Token and Access Token Secret. First, we need to create an application on Twitter developers. Create a new app with Read only permission. It will be enough for our application. Now, generate your access token. You should have 4 tokens: Application API Key, Application API Secret, Access Token and Access Token Secret. First, we need to create an application on Twitter developers. Create a new app with Read only permission. It will be enough for our application. Now, generate your access token. You should have 4 tokens: Application API Key, Application API Secret, Access Token and Access Token Secret.";

personality_insights.profile({ text: my_profile },
function (err, profile) {
  if (err)
    console.log(err)
  else
    console.log(profile.tree.children[0].children[0].children);
});


/*
var speech_to_text = watson.speech_to_text({
  username: details.username,
  password: details.password,
  version: 'v1',
  url: 'https://stream.watsonplatform.net/speech-to-text/api'
});

var params = {
  content_type: 'audio/wav',
  interim_results: true
};

// create the stream
var recognizeStream = speech_to_text.createRecognizeStream(params);

// pipe in some audio
fs.createReadStream(__dirname + '/resources/audiotest2.wav').pipe(recognizeStream);

// and pipe out the transcription
recognizeStream.pipe(fs.createWriteStream('transcription.txt'));


// listen for 'data' events for just the final text
// listen for 'results' events to get the raw JSON with interim results, timings, etc.

recognizeStream.setEncoding('utf8'); // to get strings instead of Buffers from `data` events


['data', 'error', 'connection-close'].forEach(function(eventName) {
  recognizeStream.on(eventName, console.log.bind(console, eventName + ' event: '));
});
recognizeStream.on('results', function(data){
  console.log(data.results[0].alternatives);
});
*/
/*
fs.createReadStream('./resources/audiotest.wav')
  .pipe(speech_to_text.createRecognizeStream({ content_type: 'audio/wav', interim_results: true }))
  .pipe(fs.createWriteStream('./transcription.txt'));
*/
