
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  return array.reduce((acc, curr) => curr > acc ? acc : curr, +Infinity);
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  return array.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity);
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
