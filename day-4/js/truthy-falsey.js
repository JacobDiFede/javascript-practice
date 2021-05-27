const yes = true; // = assignment operator (truthy)
const no = false; // boolean (falsey)

const abc = 'abc'; // strings
const name = 'Jacob';
const title = 'title';
const red = 'red';
const falseyString = '';

const numbers = -1;
const number2 = 2.5;
const falseyNumber = 0;

const myNull = null;
const myUndefined = undefined;
const forever = Infinity;



!!false === false
!!true === true

   !!0 === false
!!parseInt("foo") === false // NaN is falsy
   !!1 === true
  !!-1 === true  // -1 is truthy
!!(1/0) === true  // Infinity is truthy

  !!"" === false // empty string is falsy
!!"foo" === true  // non-empty string is truthy
!!"false" === true  // ...even if it contains a falsy value

!!window.foo === false // undefined is falsy
!!null === false // null is falsy

  !!{} === true  // an (empty) object is truthy
  !![] === true  // an (empty) array is truthy; PHP programmers beware!