/*import { name, age, greet } from './export.js';*/
import * as p from './export.js';   
// imports and exports can be placed anywhere
//if we place * the entire named exports will be extracted and it expects an alias name
console.log(p.name);
console.log(p.age);
p.greet();
import x from './export.js';
console.log(x);
