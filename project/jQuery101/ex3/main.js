$("body").append(`<div class="box"></di>`)
$("body").append(`<div class="box"></di>`)
$(".box").hover(function() {

    if ($(this).css("background-color") == "rgb(142, 68, 173)") {

        $(this).css("background-color", "#f34d92")
    } else {
        $(this).css("background-color", "#8e44ad")
    }

})