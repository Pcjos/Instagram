import React from 'react'
import postList from './data.json'
import { FaRegHeart, FaRegComment, FaTelegramPlane } from 'react-icons/fa';


const Posts = () => {
    const [like,setLike]=React.useState(false);
    return (
        <>
            {
                postList.map(post => (
                    <div className='posts'>
                        <div className='posts-header'>
                            <div className='posts_header-avatar'>
                                <img src={post.from.profile_picture} alt="post"></img>
                            </div>
                            <div className='posts_header-name'>{post.from.full_name}
                            </div>
                        </div>
                        <div className='posts-img'><img src={post.images} alt="post"></img></div>
                        <div className='comment-icons'>
                            <li><FaRegHeart
                                className={like ? 'liked' : 'notliked'}
                                onClick={ ()=>setLike(!like)}></FaRegHeart></li>
                            <li><FaRegComment></FaRegComment></li>
                            <li><FaTelegramPlane></FaTelegramPlane></li>
                        </div>
                        <div className='descriptions'>
                            <li className='username'>{post.from.username} </li>
                            <li className='user-text'>{post.text} </li>
                        </div>
                        {post.comments.map(cmt => (
                            <div className='descriptions'>
                                <li className='username'>{cmt.user} </li>
                                <li className='user-text'>{cmt.text} </li>
                            </div>
                        ))}


                        <div className='write'>
                            <input className='navbar_search' placeholder='Add a comment..'></input>
                        </div>




                    </div>

                ))}
        </>
    )
}

export default Posts