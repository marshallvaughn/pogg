var pogg = require("./index");
pogg.globalize();

var msg = "test";
var obj = {
	tisket: 'tasket'
}

var arr = [
	msg,
	obj
]

for (var i = 0; i < arr.length; i++) {

	logg(arr[i]);

	logg.red(arr[i]);
	logg.blue(arr[i]);
	logg.green(arr[i]);
	logg.yellow(arr[i]);
	logg.magenta(arr[i]);

	logg.doing(arr[i]);
	logg.done(arr[i]);

	logg.big(arr[i]);
	logg.big.red(arr[i]);
	logg.big.blue(arr[i]);
	logg.big.green(arr[i]);
	logg.big.yellow(arr[i]);
	logg.big.magenta(arr[i]);

}