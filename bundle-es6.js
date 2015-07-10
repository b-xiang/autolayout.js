var fs = require('fs');
var esperanto = require('esperanto');

esperanto.bundle({
  entry: 'src/AutoLayout.js', // the '.js' is optional
  skip: [
    'kiwi/ts/bin/kiwi',
    'cassowary/bin/c'
  ]
}).then(function(bundle) {
  var cjs = bundle.toCjs();
  fs.writeFile('dist/autolayout.js', cjs.code);
}, function(err) {
    console.log(err);
});
