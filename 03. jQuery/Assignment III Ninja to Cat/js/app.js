/*
Pajama Programmer
Coding Dojo - July 5 Online Flex
12-July-2016
Assignment III: Ninja to Cat

Part 2: Added sliding/puzzle functionality (assignment description didn't indicate this was needed??)
*/

$(document).ready(function(){
    $('img').click(function() {
        var src = $(this).attr('src');
        var alt = $(this).attr('data-alt-src');
        //console.log(src, alt);
        $(this).attr('src', alt);
        $(this).attr('data-alt-src', src);
    });

    $("#dragDrop").sortable();
});

