function change(e) {
    var elem = e.target;
    if (e.target.id == "imgbelowleft") {
        elem.setAttribute('src', 'images/WhatsApp Image 2022-01-14 at 6.32.29 PM (6).jpeg');

    }
    else {
        elem.setAttribute('src', 'images/WhatsApp Image 2022-01-14 at 6.32.29 PM (1).jpeg');
    }
}
function change1(e) {
    var elem = e.target;
    if (e.target.id == "imgbelowleft") {
        elem.setAttribute('src', 'images/elmaestro.jpg');
    }
    else {
        elem.setAttribute('src', 'images/elmaestro2.png');
    }
}
var audio = document.getElementById('audio');
var birthDate = document.getElementById('birthDate');
function celebarte(e) {
    var val = birthDate.value;
    // if (val.trim() === "2022-01-14T00:00") {
        document.getElementById('tsparticles').style.display = "inline-block";
        audio.play();
        var j = 1;
        loadConfettiPreset(tsParticles);
        tsParticles.load("tsparticles", {
            preset: "confetti",
       });
        var interval = setInterval(function () {

            loadConfettiPreset(tsParticles);
            tsParticles.load("tsparticles", {
                preset: "confetti",
            });
            if (j == 5) {
                clearInterval(interval);
                window.location.href = "Information.html"
            }
            j++;
        }, 5000)
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "chocolate";
        ctx.font = "80px 'Moon Dance'";
        ctx.fillText("Dr / Bilal Ahmed Mohammed", 370, 80);
        ctx.fill();
        document.getElementById('img1').setAttribute('src', 'images/WhatsApp Image 2022-01-14 at 6.32.13 PM (2).jpeg');
        document.getElementById('img2').setAttribute('src', 'images/WhatsApp Image 2022-01-14 at 6.32.29 PM (5).jpeg');
        document.getElementById('div5').style.display = "inline-block";
        document.getElementById('div6').style.display = "inline-block";
        e.target.removeEventListener('click', celebarte);
    // }

}
// $(document).ready(function () {
//     $('#btn1').click(function () {
//         $('#img1').toggel('explode', false);
//         $('#img2').toggel('explode', false);
//     })
// });
