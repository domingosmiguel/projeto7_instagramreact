function RenderStory(props) {
    const { storyData } = props;
    const { userImgSrc, username } = storyData;
    return (
        <li className="story">
            <div className="story-img">
                <img src={userImgSrc} alt={username} />
            </div>
            <div className="story-txt">{username}</div>
        </li>
    );
}

export default RenderStory;
