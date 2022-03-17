$(document).ready(function () {
    var interval;
    $('#a1').click(function () {
        console.log('gallry');
        $("#Dobai").hide();
        var imgs = $("#imgs").find("*");
        var i = 0;
        interval = setInterval(function () {
            if (i == 0) {
                $(imgs[i]).toggle("slow").animate({
                    width: '400px',
                    'padding-left': '800px',
                    opacity: '1'
                }, 3000);
            }
            else {
                $(imgs[i - 1]).toggle("slow");
                $(imgs[i]).toggle("slow").animate({
                    width: '400px',
                    'padding-left': '800px',
                    opacity: '1'
                }, 3000);
            }
            if (i == 12) {
                clearInterval(interval);
            }
            i++;
        }, 3000);
    });

});