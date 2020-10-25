import React from 'react'
import './Post.css'

export default function Post({
    posts,
    onLikeClick
}) {
    const length = posts.length
    const lastPost = posts[length - 1]

    return (
        <div className="PostContainer">
            <p>{lastPost.content}</p>
            <button onClick={() => onLikeClick(lastPost.id)}>👍 C'est super ! ({lastPost.likesCount})</button>
        </div>
    )
}
