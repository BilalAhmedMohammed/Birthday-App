var video1 = document.getElementById('video1');
video1.play();
function start(e) {
    if (e.target.paused) {
        e.target.play();
    }
    else {
        e.target.pause();
    }
}
// video1.onended=function () {
//     video1.animate([
//         // keyframes
//         { display:'none'}
//         // { opacity: '0' }
//       ], {
//         // timing options
//         duration: 2000,
//         // iterations: Infinity
//       });
// }


$(document).ready(function () {
    // $("#video1").trigger('play');
    // $("#video1").click(function () {
    //     if ($(this).trigger('play')) {
    //         $(this).trigger('pause');
    //         console.log($(this).trigger());
    //     }
    //     else {
    //         $(this).trigger('play');
    //     }

    // });
    $('#video1').on('ended', function () {
        $(this).animate({
            height: '0px',
            opacity: '0',
            width: '350px'
        }, 2000);
        $("#video2").show();
        $("#video2").trigger('play');
        // $('#video3').animate({
        //     height: '0px',
        //     opacity: '0',
        //     width: '350px'
        // }, 2000);
    });
    $('#video2').on('ended', function () {
        $(this).animate({
            height: '0px',
            opacity: '0',
            width: '350px'
        }, 2000);
        $("#video3").show();
        $("#video3").trigger('play');
    });
    $('#video3').on('ended', function () {
        $(this).animate({
            height: '0px',
            opacity: '0',
            width: '350px'
        }, 2000);
        $("#img1").show().animate({
            opacity: '1',
            'margin-top': '0px'
        }, 1000);
        $("#img2").show().animate({
            opacity: '1',
            'margin-top': '0px'
        }, 3000);
        $("#img3").show().animate({
            opacity: '1',
            'margin-top': '0px'
        }, 5000);
        setTimeout(function () {
            $('#img1').toggle("bounce", { times: 1 }, "slow");
        }, 5000)
        setTimeout(function () {
            $('#img2').toggle("bounce", { times: 1 }, "slow");
        }, 6000)
        setTimeout(function () {
            $('#img3').toggle("bounce", { times: 1 }, "slow");
        }, 7000)
        $('#end').show().animate({
            width:'1575px',
            opacity:'1'
        },27000)
    });
});