$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();
    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //输入判断
        if ($('#newstitle').val() === "" || $('#newstype').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            };
            if ($('#newstype').val() === "") {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            };
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            };
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            };
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            };
        } else {

            var jsonNews = {
                    newstitle: $('#newstitle').val(),
                    newstype: $('#newstype').val(),
                    newsimg: $('#newsimg').val(),
                    newstime: $('#newstime').val(),
                    newssrc: $('#newssrc').val(),
                }
                //提交数据
            $.ajax({
                url: 'server/postPHPdata.php',
                type: 'post',
                data: 'jsonNews',
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                }

            });
        };
    })


    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            url: 'server/PHPdata.php',
            type: 'get',
            datatype: 'json',
            success: function(data) {

                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                     var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdtype = $('<td>').html(item.newstype);
                   
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtitle, $tdtype, $tdimg, $tdtime, $tdsrc, $tdctrl);
                    $newsTable.append($tRow);
                })
            }

        });

    }
})
