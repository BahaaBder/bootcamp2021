const computersArray = []


$(".generator").on("click", function() {
    console.log("The processor ID : " + $(this).closest(".computer").find(".processor").attr("id"))
    console.log("The computer data-id : " + $(this).closest(".computer").attr("data-id"))
    computersArray.push({ cmp_id: $(this).closest(".computer").attr("data-id") })
    console.log("The BUS Number : " + $(this).closest(".computer").find(".BUS").text())
})
$(".validator").on("click", function() {
    console.log("The The generator text : " + $(this).closest(".computer").find(".generator").text())
    console.log("The MB : " + $(this).closest(".computer").find(".MB").text())
    console.log("Both QRs : " + $(this).closest(".computer").find("span").text())
})