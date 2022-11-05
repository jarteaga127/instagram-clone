import UserIcon from "./UserIcon";
import "../styles/story.css";

export default function Story({stories}) {
    return (
        <>
        {stories.map(({id, username}) => (
        
        <div className="story" key={id}>
        <div className="story-icon">
       <UserIcon iconSize="icon-default"/>
        </div>
        <div className="story-username">
            {username}
        </div>
        </div>
        
        ))}
        </>
    )
}