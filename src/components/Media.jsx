function RenderMedia(props) {
    const { type, source, alternative, handleHeartClick } = props;
    switch (type) {
        case "video":
            return (
                <div className="video" onDoubleClick={handleHeartClick}>
                    <video autoPlay muted>
                        <source src={source.mp4} />
                        <source src={source.ogv} />
                    </video>
                </div>
            );
        default:
            return <img src={source} alt={alternative} onDoubleClick={handleHeartClick} />;
    }
}

export default RenderMedia;
