var clc = require('cli-color'); // .................................... i use cli-color, it's the only one i've tried that properly shows color in papertrail
var stringify = require('json-stringify-safe'); // .................... to simplify json object logging
var figlet = require('figlet');

function gigantize(msg) {
  if (typeof msg === 'object') {
    console.log(clc.red('Err: cannot large print JSON objects'));
    return null;
  } else {
    figlet(msg, function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data)
    });
  }
}

var color = {
  red: msg => clc.red(extract(msg)),
  blue: msg => clc.blue(extract(msg)),
  green: msg => clc.green(extract(msg)),
  yellow: msg => clc.yellow(extract(msg)),
  magenta: msg => clc.magenta(extract(msg))
}

var logg = function (msg) {
  lg(extract(msg));
}

// colorized logging
logg.red = msg => lg(color.red(msg)); // ............. red
logg.blue = msg => lg(color.blue(msg)); // ........... blue
logg.green = msg => lg(color.green(msg)); // ......... green
logg.yellow = msg => lg(color.yellow(msg)); // ....... yellow
logg.magenta = msg => lg(color.magenta(msg)); // ..... purple

// functional logging
logg.doing = msg => logg(color.yellow('[ ] ' + extract(msg))); // to show that something is going to be done.
logg.done = msg => logg(color.green('[✓] ' + extract(msg))); // . to show that something is now done.

logg.big = msg => gigantize(msg);

// globalize things if you wanna get really brazen. don't tell crockford.
logg.globalize = () => {
  GLOBAL.logg = logg;
}

module.exports = logg

// this [ v ] makes that [ ^ ] work
function lg(msg, color) {
  console.log(msg);
}

function extract(msg) {
  if (typeof msg === 'object') {
    var str = stringify(msg, null, 2);
    return str;
  } else {
    return msg;
  }
}

