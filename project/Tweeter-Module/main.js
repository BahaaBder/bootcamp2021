const tweeter = Tweeter()
const renderer = Renderer()
const post = function() {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
}

renderer.renderPosts(tweeter.getPosts())