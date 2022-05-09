import Post from "./Post"

export default function Posts(){
    const posts = 
    [
        {user: "meowed", image: "assets/img/gato-telefone.svg"},
        {user: "barked", image: "assets/img/dog.svg"},
    ]
    
    return(
        <div class="posts">
            {posts.map(post => <Post user={post.user} img={post.image}/>)}
        </div>
    )
}