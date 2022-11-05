import { PostData } from "../data/PostData";
import "../styles/timeline.css";
import Post from "./Post";
import Stories from "./Stories";


export default function Timeline() {
    return(
        <div className="timeline">
          <Stories/>
          <div className="post-container">
            <Post posts={PostData}/>
          </div>
        </div>
    )
}