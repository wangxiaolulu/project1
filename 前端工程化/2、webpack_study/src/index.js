import $ from 'jQuery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'lightblue');
})

class Person {
    static info = 'aaa'
}

console.log(Person.info)


// 1、导入构造函数
import Vue from 'vue'
// 2、导入App根组件
import App from './components/App.vue'

const vm = new Vue({
    // 3、指定页面控制区域
    el:'#app',
    // 4、通过render函数，把指定的组l件渲染到el区域
    render:h=>h(App)
})

