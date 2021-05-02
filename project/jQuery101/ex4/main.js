$(".item").on("click", function() {
    if ($(this).text() != "Umbrella") {
        $("#cart").append(`<div> ${$(this).text()} </div>`)
    }
})