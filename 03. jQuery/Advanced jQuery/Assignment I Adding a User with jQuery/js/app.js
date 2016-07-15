/*
Pajama Programmer
Coding Dojo - July 5 Online Flex
14-July-2016
Assignment: Adding a User with jQuery

*/

$(document).ready(function(){
    $('form').submit(function() {
        var row = '<tr>';
        var input = $(this).serialize().split('&');

        for (var i=0; i<4; i++)
        {
            row += '<td>'+ decodeURIComponent(input[i].split('=')[1]) + '</td>';
        }

        row += '</tr>';

        $('tbody').append(row);
        return false;
    });
});

