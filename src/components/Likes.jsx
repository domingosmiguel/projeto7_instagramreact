function RenderLikes(props) {
    const { likes, likeCount } = props;
    return (
        <div className="post-likes">
            {likes.map((like, index) => {
                return <img key={index} src={like.userImgSrc} alt={like.username} />;
            })}
            <div>
                Curtido por <b>{likes[0].username}</b> e <b>outras {likeCount} pessoas</b>
            </div>
        </div>
    );
}

export default RenderLikes;
