postsSection = document.getElementById("posts")


getPosts().then(
    posts => drawPosts(posts, postsSection)
)

