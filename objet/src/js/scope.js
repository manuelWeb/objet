// scope et closure
var c = 0; // scope global c pour cpt

function a() {
  var i = 0; // scope local à fct a
  cl(`dans la fct, a i vaut toujours ${i}`);
  // return function b() {c++; return ++i; };
  var b = () => {return c++};
  return b;
}

var increment = a(); // increment = fct b()
while (c <= 13) {
  setTimeout(memo(c), c * 1000);
  // cl(`c dans bcl while: ${c}`);
  increment();
}

function memo(c) {
  // show scope.min.js for complete fct
  return () => cl(
      `while n°${c < 10 ? `0${c}` : c}, c inner memo:${c < 10 ? '0'+c : c}, timeOut c * ${c === 0 ? '0000'+c : c < 10 ? '0'+c*1000 : c*1000} = ${c === 0 || c === 1 ? c+' seconde' : c+' secondes' }`
    );
}