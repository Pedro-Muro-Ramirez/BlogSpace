fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let postText = ``
        postsArr.forEach(function(post){
            postText += `
            <h1>${post.title}</h1>
            <p>${post.body}</p>`
        })
        document.getElementById('posts-container').innerHTML = postText
    })