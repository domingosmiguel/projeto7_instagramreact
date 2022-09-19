function RenderSuggestionCard(props) {
    const { card } = props;
    const { suggestion, sugImgSrc, details } = card;
    return (
        <li className="other-profiles">
            <img className="other-profiles-pic" src={sugImgSrc} alt={suggestion} />
            <div className="other-profiles-txt">
                <div>{suggestion}</div>
                <div>{details}</div>
            </div>
            <div className="follow">Seguir</div>
        </li>
    );
}

export default RenderSuggestionCard;
