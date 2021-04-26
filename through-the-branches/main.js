$(document).ready(function () {

    $('#ripple').ripples({
        resolution: 512,
        dropRadius: 30, //px
        perturbance: 0.05,
    });

    $(function () {

        $('.vis').draggable();

    });


});
