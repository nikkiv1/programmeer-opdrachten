const Mocha = require('mocha')
const express = require('express')
const app = express()
var path = require('path');
const port = 3000


//
// Without middleware
app.get('/', function(req, res){
  function sendIt() {
    var options = {
      root: path.join(__dirname, 'public')
    }
    var fileName = 'index.html';

    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log('Sent:', fileName);
      }
    })
  }
  

  console.log('mocha setup')
  var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'public',
      reportFilename: 'index',
      quiet: false,
      html: true,
      json: false
    }
  });
  mocha.addFile(path.join(__dirname, 'tests', 'test.js'))
  //mocha.cleanReferencesAfterRun(false)


  console.log('doe test')
  mocha.run(() => {
        console.log('✅ done');
        mocha.unloadFiles();
        mocha.dispose();
        sendIt();
      }
    )
    .on('test', function(test) {
        console.log('Test started: '+test.title);
    })
    .on('test end', function(test) {
        console.log('Test done: '+test.title);
    })
    .on('pass', function(test) {
        console.log('Test passed');
        console.log(test);
    })
    .on('fail', function(test, err) {
        console.log('Test fail');
        console.log(test);
        console.log(err);
    })
    .on('end', function() {
        console.log('All done')
        
    })
  console.log('test done')
  
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})