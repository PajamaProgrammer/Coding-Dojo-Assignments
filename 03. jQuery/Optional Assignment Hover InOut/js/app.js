/*
Pajama Programmer
Coding Dojo - July 5 Online Flex
12-July-2016
Optional Assignment: Hover In/Out
*/

$(document).ready(function(){
    var src = "";
    var alt = "";
    $('img').hover(function(){
        src = $(this).attr('src');
        alt = $(this).attr('data-alt-src');
        $(this).attr('src', alt);
        $(this).attr('data-alt-src', src);
    }, function() {
        $(this).attr('src', src);
        $(this).attr('data-alt-src', alt);
    });

});

