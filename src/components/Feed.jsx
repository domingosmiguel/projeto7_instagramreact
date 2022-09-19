import { postsData } from "../data/Database";
import RenderPost from "./Post";

function Feed() {
    return (
        <ul className="feed">
            {postsData.map((post, index) => {
                return <RenderPost key={index} postData={post} />;
            })}
        </ul>
    );
}

export default Feed;
