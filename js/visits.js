
$(function() {
    var url = '/log/index.php';
    url += "?type=nav&page=" + window.location.pathname;

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        success: function() {}
    });

    $('a').on('click', function() {
        var href  = $(this).attr('href');
        var url = '/log/index.php';
        url += "?type=click&page=" + window.location.pathname;

        $.ajax({
            url: url + "?type=click&page=" + href,
            type: 'GET',
            dataType: 'jsonp',
            success: function() {}
        });

    });
});




