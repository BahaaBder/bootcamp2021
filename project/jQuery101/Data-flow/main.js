const posts = [{
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const render = function() {
    $(".posts").empty()
    for (let post of posts) {
        let postBox = $("<div class='post-box' >" + "<h3 style='color:red'>" + post.name + "</h3>" + ":" + post.text + "</div>")
        $(".posts").append(postBox)
        $("h3").css("display", "inline")
    }
}
$("button").on("click", function() {
        let name = $(".t1").val()
        let post = $(".t2").val()
        posts.push({ name: name, text: post })
        render()
    })
    // =======================Challenge section================================
$("body").on("click", ".post-box", function() {
    console.log($(this).text())
    for (let i = 0; i < posts.length; i++) {
        if ((posts[i].name + ":" + posts[i].text) == $(this).text()) {
            posts.splice(i, 1)
            i = posts.length
        }
    }
    render()
});

render()