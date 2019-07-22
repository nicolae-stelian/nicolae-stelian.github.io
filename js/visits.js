
$(function() {
    // var url = 'http://localhost:3000/log/index.php';
    var url = 'http://159.69.29.27/stelu-log/index.php';
    url += "?type=nav&page=" + window.location.pathname;

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        success: function() {}
    });

    $('a').on('click', function() {
        var href  = $(this).attr('href');
        var url = 'http://159.69.29.27/stelu-log/index.php';
        url += "?type=click&page=" + window.location.pathname;

        $.ajax({
            url: url + "?type=click&page=" + href,
            type: 'GET',
            dataType: 'jsonp',
            success: function() {}
        });

    });
});




