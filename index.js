// Initial variables
const postForm = document.getElementById('post-form')
const titleInput = document.getElementById('post-title')
const bodyInput = document.getElementById('post-body')
let postsArray = []

// Function to render posts
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

// Fetch initial posts
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        // Store first 5 posts and render them
        postsArray = data.slice(0, 5)
        renderPosts()
    })

// Event listener for form submission   
postForm.addEventListener("submit", function(e){
    // Prevent default form submission behavior
    e.preventDefault()
    // Get input values and create new post object
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const newPost = {
        title: postTitle,
        body: postBody
    }
    // Send POST request to API
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST", 
        body: JSON.stringify(newPost), 
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => { 
        // Add new post to the beginning of the array and re-render posts
        postsArray.unshift(data)
        renderPosts()
        postForm.reset()
    })
})