function RenderMedia(props) {
    const { type, source, alternative } = props;
    switch (type) {
        case "video":
            return (
                <div className="video">
                    <video autoPlay muted>
                        <source src={source.mp4} />
                        <source src={source.ogv} />
                    </video>
                </div>
            );
        default:
            return <img src={source} alt={alternative} />;
    }
}

export default RenderMedia;
