var main = function(){
    $('form').submit(function(event){
        var $input = $(event.target).find('input'); //storing comment as input
        var comment = $input.val(); //stores actual value of comment
        
        //if there is a new comment, a new li will be created and added to comments class
        if(comment != ""){
            var html = $('<li>').text(comment);
            html.prependTo('#comments')
            $input.val(""); //clears input after comment has been posted
        }
        return false; //stops browser default
    }); 
}

$(document).ready(main);
