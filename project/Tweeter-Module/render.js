const Renderer = function() {

    const renderPosts = (posts) => {

        $("#posts").empty();

        for (let i = 0; i < posts.length; i++) {
            $("#posts").append(`<div data-id=` + posts[i].id + `><h1>` + posts[i].text + `</h1></div>`)
                // $("div").find(`[data-id='${posts[i].id}']`) 
                //can use above  with specific id of divs
            for (let comment of posts[i].comments) {
                $("#posts").append(`<div data-id=` + comment.id + `>` + comment.text + `</div>`)

            }
        }


    }

    return { renderPosts: renderPosts }

}