// import map  from 'lodash/map';
// var x = map([1,2,3], function(e) {
//   return e +1;
// });



import _ from 'lodash';
let x = _.map([1,2,3], function(e) {
  return e +1;
});
let mess = {a: {b: {c: {d: 'the prize'}}}};
let y = _.debounce(a => console.log(a),1);
let z = _.get(mess, 'a.b.c.d')
document.getElementById("number").innerHTML=x[1];
document.getElementById("number").innerHTML=y;
document.getElementById("mess").innerHTML=z;

console.log('x is ', x);
console.log("i don't got this")

/*
Nodemodules
babel plugin rewrites your code import _ from lodash turns into import just what you need from lodash

no optimization: lodash kb
lodash webpack plugin only  kb
lodash babel plugin only: kb
both plugins kb


no optimization: lodash 526kb
lodash webpack plugin only 0.5 kb
lodash babel plugin only: 85kb
both plugins .5kb

*/