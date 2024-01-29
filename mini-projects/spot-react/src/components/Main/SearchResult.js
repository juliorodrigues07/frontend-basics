import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function SearchResult({ result })
{
    return (
        <div className="artist-card" id="">
            <div className="card-img">
                <img id="artist-img" className="artist-img" src={result.urlImg} alt={`Artista ${result.name}`}/>
                <div className="play">
                    <span><FontAwesomeIcon icon={faPlay} className="fa fa-solid fa-play"/></span>
                </div>
            </div>
            <div className="card-text">
                <a title="" className="vst" href=""></a>
                <span className="artist-name" id="artist-name">{result.name}</span>
                <span className="category">Artista</span>
            </div>
        </div>
    );
}
