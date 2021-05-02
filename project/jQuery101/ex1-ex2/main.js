$("body").append(`<input type="text" id="textField" >`)
$("body").append(`<button>Add item</button>`)

const addDiv = function() {
    $("ul").append(`<li class="human">${$("#textField").val()}</li>`)
};

$("button").on("click", function() {
    addDiv();
});

$("body").on("click", ".human", function() {
    $(this).remove()
});