const postForm = document.getElementById('post-form')
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')

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

postForm.addEventListener("submit", function(e){
    e.preventDefault()
    let contentObj = {
        title: postTitle.value,
        body: postBody.value
    }
    console.log(contentObj)
})