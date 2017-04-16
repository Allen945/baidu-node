$(document).ready(function() {
    refreshNews();

});


function refreshNews() {

    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url: 'server/PHPdata.php',
        type: 'get',
        datatype: 'json',
        success: function(data) {
            console.log(data);

            // var $list = $('<li></li>').addClass('news-list').prependTo($lists);
            // var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
            // var $img = $('<img>').attr({
            //     'src':data.newsimg,
            //     'width': '100%'
            // }).appendTo($newsImg);
            // var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
            // var $h1 = $('<h1></h1>').html(data.newstitle).appendTo($newsContent);
            // var $p = $('<p></p>').appendTo($newsContent);
            // var $newsTime = $('<span></span>').addClass('newstime').html(data.newstime).appendTo($p);
            // var $newsSrc = $('<span></span>').addClass('newssrc').html(data.newssrc).appendTo($p);
        }
    });






}
