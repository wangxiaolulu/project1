/* import m1, { s1, s2 as ss2, say } from './m1.js'

console.log(m1)
console.log(s1)
console.log(ss2)
console.log(say) */

// 3、直接导入并执行模块代码
import './m2.js'


// 1、默认导入，导入模块成员 
/* import m1 from './m1.js'
console.log(m1) */

// 2、按需导入，导入模块成员
/* import {s1,s2 as ss2,say} from './m1.js'
console.log(s1) // 打印输出 aaa 
console.log(ss2) // 打印输出 ccc 
console.log(say) // 打印输出 [Function: say] */