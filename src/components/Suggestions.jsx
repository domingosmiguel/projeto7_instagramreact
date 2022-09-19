import RenderSuggestionCard from "./SuggestionCard";
import { suggestionsData } from "../data/Database";

function Suggestions() {
    return (
        <div>
            <div>
                <div className="suggestions">Sugestões para você</div>
                <div className="see-all">Ver tudo</div>
            </div>
            {suggestionsData.map((suggestionData, index) => {
                return <RenderSuggestionCard key={index} card={suggestionData} />;
            })}
        </div>
    );
}

export default Suggestions;
