import SearchResult from "./SearchResult";
import './PlaylistGrid.css';
import './SearchGrid.css';

export default function SearchList({ results })
{
    return (
        <div className="playlist-container">
            <div id="result-artist">
                <div className="grid-container" id="artists-grid">
                    {results.map((result, id) => {
                        return <SearchResult result={result} key={id}/>;
                    })}
                </div>
            </div>
        </div>
    );
}