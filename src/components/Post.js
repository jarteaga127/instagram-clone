import UserIcon from "./UserIcon";
import "../styles/post.css";

export default function Post({posts}) {
    return(
<>
{posts.map(({id, username, image, likedBy, likedNo}) => (
        <div className="post" key={id}>
            <div className="post-top">
                <div className="post-top-left">
                <div className="post-user-icon">
                    <UserIcon iconSize="icon-small"/>
                </div>
                <div className="post-username">{username} </div>    
                </div>
                <div className="post-top-right">
                <div className="three-dots">
                <i class="fa-solid fa-ellipsis"></i>
                </div>
                </div>
            </div>
            <div className="post-image">
                <img src={image} alt="dog" />
            </div>
        <div className="post-text-area">
            <div className="response-menu">
                <div className="resp-menu-left">
                    <button><i class="fa-regular fa-heart"></i></button>
                    <button><i class="fa-regular fa-comment"></i></button>
                    <button><i class="fa-regular fa-paper-plane"></i></button>
                </div>
                <div className="resp-menu-right">
                <button><i class="fa-regular fa-bookmark"></i></button>
                </div>
            </div>
            <div className="post-text-area-2">
            <UserIcon iconSize="icon-tiny"/>
            <div className="liked-caption">
                Liked by <strong>{likedBy}</strong> and <strong>{likedNo} others</strong>
            </div>    
            </div>
            <div className="post-description">
                <strong>{username}</strong> This is a picture. Enjoy.
            </div>
        </div>
        <div className="add-comment">
                <div className="add-comment-left">
                    <div className="add-comment-icon">
                    <i class="fa-regular fa-face-smile"></i>
                    </div>
                <div className="add-comment-input">
                    <input type="text" placeholder="Add a comment..." />
                </div>
                </div>
                <div className="add-comment-right">
                <div className="add-comment-post">
                    <a href="/">Post Comment</a>
                </div>
                </div>
            </div>

        </div>
        ))}
        </>
    )
}