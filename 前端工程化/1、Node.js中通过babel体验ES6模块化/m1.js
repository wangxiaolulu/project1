// 定义私有成员 a 和 c
let a = 10
let c = 20
// 外界访问不到变量 d ,因为它没有被暴露出去
let d = 30

function show(){
    console.log('1111111')
}

// 默认导出，将本模块中的私有成员暴露出去，供其它模块使用
export default {
    a,
    c,
    show
}


//每个模块中，可以使用多次按需导出
// 向外按需导出变量 s1
export let s1 = 'aaa'
// 向外按需导出变量 s2
export let s2 = 'ccc'
// 向外按需导出方法 say
export function say(){
    console.log('ooooooooooo')
}


// 每个模块中， 只允许使用唯一的一次export default， 否则会报错！
// export default {
//     d
// }