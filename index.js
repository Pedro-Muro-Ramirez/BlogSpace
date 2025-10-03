const postForm = document.getElementById('post-form')
const titleInput = document.getElementById('post-title')
const bodyInput = document.getElementById('post-body')

let postsArray = []

function renderPosts(){
    let postText = ``
        postsArray.forEach(function(post){
            postText += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />`
        })
        document.getElementById('posts-container').innerHTML = postText
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

postForm.addEventListener("submit", function(e){
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST", 
        body: JSON.stringify(data), 
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        postsArray.unshift(data)
        renderPosts()
        postForm.reset()
    })
})
console.log(postsArray)