$(document).ready(getTweets);
setInterval(getTweets, 100000); 

function getTweets() {
    $.ajax({
        url: 'http://localhost/twitter.php',
        dataType: 'json',
        success: function(data) {
            $('#twitter_tweets').empty();
            console.log(data.statuses);
            $.each(data.statuses, function(index, element){
                    var created_at = element.created_at;
                    var text = element.text;
                    var user = element.user.name;
                    var screenname = element.user.screen_name;
                    $('#twitter_tweets').append('<div class="tweet"><p>' +user + ' @' + screenname +'<br>' + text);
            });

        
                //var name = 
                //var screenname = 

                //$("#tweets").append('<p>'+ created_at +'<br>'+ name+ ' ' + screenname +'<br>' + text + '</p>');
                
        },
        error: function() {
            $("#tweets").append("error");
            alert('error');
        }
    });
}