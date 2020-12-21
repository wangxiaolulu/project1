import $ from 'jQuery'

$(function () {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'lightblue');
})