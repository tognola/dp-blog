async function getPosts( id ){
    const url = id ? 'https://dp-tognola.herokuapp.com/posts/'+id: 'https://dp-tognola.herokuapp.com/posts' ;
    const resp = await fetch(url)
    const posts = await resp.json();
    return posts
}

function drawPosts( posts, postsSection ){

    posts.sort( (a, b) => {
        return a.id < b.id ? 1 : -1
    })

    posts.forEach(post => {
        const div = document.createElement('div')
        const date = new Date(post.published_at).toLocaleDateString() + "-" +  new Date(post.published_at).toLocaleTimeString()
        const resume = post.content.split('\n')[0]
        div.innerHTML = `
            <h2><a href="./post.html?id=${post.id}"> ${post.title} </a></h2>
            <h3>${date}</h3>
            <p>${resume}</p>
            <hr>
        `

        postsSection.appendChild(div)

    });
}

function drawPost(post, postsSection) {
    const div = document.createElement('div')
        const date = new Date(post.published_at).toLocaleDateString() + "-" +  new Date(post.published_at).toLocaleTimeString()
        const parse = parseMarkdown(post.content)
        div.innerHTML = `
            <h2>${post.title}</h2>
            <h3>${date}</h3>
            <div>${parse}</div>
        `

        postsSection.appendChild(div)
}