$(document).ready(function () {

    console.log("page loaded");

    var backgrounds = [
        "url(images/beachhouse.gif)",
        "url(images/scan1.jpg)",
        "url(images/nightlight.jpg)",
        "url(images/swirl.gif)",
        "url(images/meadow_dark.jpg)"];
    var index = 0;

    var words = [
        "i like to think",
        "i like to feel",
        "i like to move",
        "i like to dream",
        "i like to rest",
        "i like to play",
        "i like to cry",
        "i like to listen",
        "i like to breathe"
    ]

    var secondWords = [
        "and think and",
        "and feel and",
        "and move and",
        "and dream and",
        "and rest and",
        "and play and",
        "and cry and",
        "and listen and",
        "and breathe and"
    ]

    var randWordSecond = Math.floor(Math.random() * secondWords.length);
    $('#text-second').text(secondWords[randWordSecond]);

    $('.button2').click(function () {
        var randWordSecond = Math.floor(Math.random() * secondWords.length);
        $('#text-second').text(secondWords[randWordSecond]);
    })

    $('.button1').click(function () {
        console.log("button clicked");

        // change word
        var randWord = Math.floor(Math.random() * words.length);
        $('#text-main').text(words[randWord]);

    })

    $('#button-relocate').click(function () {
        console.log("button clicked");

        $("body").css('background-image', backgrounds[index]);
        console.log(index);
        console.log(backgrounds[index]);

        // update index of background
        index++;
        if (index == backgrounds.length) {
            index = 0;
        }
    })

    $('#button-about').click(function () {
        $('#about').toggle();
    });

    $('#button-reset').click(function () {
        location.reload();
    });


    $(function () {
        $('#text-main').draggable();
        $('#text-second').draggable();
        $('.circle').draggable();
        $('.circle-red').draggable();
        $('.square').draggable();
        $('.square-red').draggable();
        $('.triangle-up').draggable();
        $('.triangle-down').draggable();
        $('.triangle-left').draggable();
        $('.triangle-right').draggable();
    });

});
