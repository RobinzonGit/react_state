import Post from './Post';

function Posts(props) {
    return (
        <div>
            {
                props.posts.map
                (
                    post =>
                    (
                        <Post title={post.title} content={post.content} />
                    )
                )
            }
        </div>
    );
}
export default Posts;