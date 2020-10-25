import { useState } from 'react'
import './App.css'
import Post from './components/Post/Post'
import ProfileCard from './components/ProfileCard/ProfileCard'
import Switch from './components/Switch/Switch'
const users = require('./data/users.json')
const posts = require('./data/posts.json')

function App() {

  const [currentUser, setCurrentUser] = useState(users[0])
  const [postsObj, setPostsObj] = useState(posts)

  const onLikeClik = (postId) => {
    const newPostsArray = Object.keys(postsObj).reduce((acc, key) => {
      if (parseInt(key) !== currentUser.id) {
        console.log({ key })
        console.log({ id: currentUser.id })
        return {
          ...acc,
          [key]: postsObj[key]
        }
      }

      const { posts } = postsObj[key]

      const newPosts = posts.map((post) => {
        if (post.id !== postId) {
          return post
        }

        return {
          ...post,
          likesCount: post.likesCount + 1
        }
      })

      return {
        ...acc,
        [key]: {
          posts: newPosts
        }
      }

    }, {})

    setPostsObj(newPostsArray)
  }

  return (
    <div className="App">
      <Switch users={users} onUserClick={user => setCurrentUser(user)} />
      <ProfileCard user={currentUser} />
      <Post posts={postsObj[currentUser.id].posts} onLikeClick={onLikeClik} />
    </div>
  );
}

export default App
