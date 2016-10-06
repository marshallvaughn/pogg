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

// plain old logging
module.exports = msg => logg(extract(msg));

// colorized logging
module.exports.red = msg => logg(color.red(msg)); // ............. red
module.exports.blue = msg => logg(color.blue(msg)); // ........... blue
module.exports.green = msg => logg(color.green(msg)); // ......... green
module.exports.yellow = msg => logg(color.yellow(msg)); // ....... yellow
module.exports.magenta = msg => logg(color.magenta(msg)); // ..... purple

// functional logging
module.exports.doing = msg => logg('[ ] ' + extract(msg), 'yellow'); // to show that something is going to be done.
module.exports.done = msg => logg('[✓] ' + extract(msg), 'green'); // . to show that something is now done.

module.exports.big = msg => gigantize(msg);

// globalize things if you wanna get really brazen. don't tell crockford.
module.exports.globalize = () => {
  GLOBAL.logg = logg;
}

// this [ v ] makes that [ ^ ] work
function logg(msg, color) {
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

