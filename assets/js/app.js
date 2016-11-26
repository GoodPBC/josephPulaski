//tooltips for nav
$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
});

//type animation
$(function(){
    $("#animate-type").typed({
        strings: ["<strong style='color: red'>a lover</strong>. ^500", "<strong style='color: red'>a dreamer</strong>. ^500", "<strong style='color: red'>a father</strong>. ^500", "<strong style='color: red'>a fiance</strong>. ^500", "<strong style='color: red'>a creator</strong>. ^500", "<strong style='color: red'>an innovator</strong>. ^500", "<strong style='color: red'>an entrepreneur</strong>. ^500", "<strong style='color: red'>a student</strong>. ^500", "<strong style='color: red'>a leader</strong>. ^500", "<strong style='color: red'>a friend</strong>. ^500", "<strong style='color: red'>a believer</strong>. ^500", "<strong style='color: red'>a thinker</strong>. ^500", "<strong style='color: red'>a doer</strong>. ^500", "<strong style='color: red'>authentic</strong>. ^500", "<strong style='color: red'>empathetic</strong>. ^500", "<strong style='color: red'>a man of integrity</strong>. ^500", "<strong style='color: red'>reliable</strong>. ^500", "<strong style='color: red'>exceptional</strong>. ^500", "<strong style='color: red'>humble</strong>. ^500", "<strong style='color: red'>grateful</strong>. ^500", "<strong style='color: red'>HUMAN</strong>. ^500", "<strong style='color: red'>READY</strong>. ^500"],
        contentType: 'html',
        typeSpeed: 0,
        shuffle: true,
    });
});

