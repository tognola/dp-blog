const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get('id');

postsSection = document.getElementById("posts")

getPosts(id).then(
    post => {
        drawPost(post, postsSection)
    }
)

