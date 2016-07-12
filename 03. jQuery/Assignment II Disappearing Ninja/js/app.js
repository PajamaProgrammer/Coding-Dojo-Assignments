/*
Pajama Programmer
Coding Dojo - July 5 Online Flex
12-July-2016
Assignment II: Disappearing Ninja
*/

$(document).ready(function(){

    $('button').click(function(){
        $('img').show("slow");
    });

    $('img').click(function(){
        $(this).hide("slow");
        //alert('Show an image!');
    });


});

