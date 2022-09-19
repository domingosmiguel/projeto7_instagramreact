import { storiesData } from "../data/Database";
import RenderStory from "./Story";

function Stories() {
    return (
        <ul className="stories">
            {storiesData.map((storyData, index) => {
                return <RenderStory key={index} storyData={storyData} />;
            })}
        </ul>
    );
}

export default Stories;
