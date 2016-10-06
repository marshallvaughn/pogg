var clc = require('cli-color'); // .................................... i use cli-color, it's the only one i've tried that properly shows color in papertrail
var stringify = require('json-stringify-safe'); // .................... to simplify json object logging

var color = {
  red: msg => clc.red(msg),
  blue: msg => clc.blue(msg),
  green: msg => clc.green(msg),
  yellow: msg => clc.yellow(msg),
  magenta: msg => clc.magenta(msg)
}

// plain old logging
module.exports = logg;

// colorized logging
module.exports.red = msg => logg(extract(msg), 'red'); // ............. red
module.exports.blue = msg => logg(extract(msg), 'blue'); // ........... blue
module.exports.green = msg => logg(extract(msg), 'green'); // ......... green
module.exports.yellow = msg => logg(extract(msg), 'yellow'); // ....... yellow
module.exports.magenta = msg => logg(extract(msg), 'magenta'); // ..... purple

// functional logging
module.exports.doing = msg => logg('[ ] ' + extract(msg), 'yellow'); // to show that something is going to be done.
module.exports.done = msg => logg('[✓] ' + extract(msg), 'green'); // . to show that something is now done.

// globalize things if you wanna get really brazen. don't tell crockford.
module.exports.globalize = () => {
  GLOBAL.logg = logg;
}

// this [ v ] makes that [ ^ ] work
function logg(msg, color) {

  var str = extract(msg);

  if (color === 'red') {
    str = clc.red(str);
  } else if (color === 'blue') {
    str = clc.blue(str);
  } else if (color === 'green') {
    str = clc.green(str);
  } else if (color === 'yellow') {
    str = clc.yellow(str);
  } else if (color === 'magenta') {
    str = clc.magenta(str);
  }

  console.log(str);

}

function extract(msg) {
  if (typeof msg === 'object') {
    var str = stringify(msg, null, 2);
    return str;
  } else {
    return msg;
  }
}

