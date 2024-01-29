import { useState } from 'react';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import searchIcon from '../../assets/icons/search.png';
import '../../general/reset.css';
import '../../general/vars.css';
import './Header.css'

export default function Header({ setResults })
{
    const [input, setInput] = useState("");

    // TODO: Set interval between resquests due to event overload
    async function requestAPI(searchTerm)
    {
        if (String(searchTerm).toLowerCase() !== '')
        {
            const url = `http://localhost:5000/artists?name_like=${searchTerm}`;
            const response = await fetch(url);
            const data = await response.json();
            
            // If there's an input but no fetched data, displays an empty grid
            if (searchTerm.length > 0 && data.length === 0)
            {
                setResults({'data': [], status: true});
                return;
            }

            setResults({'data': data, status: true});
        } 
        else
        {
            // If there isn't an input, go back displaying the playlist grid (search status -> false)
            setResults({'data': [], status: false});
        }
    }

    // Handles changes at each event that has happened (key pressing input)
    const handleChange = (value) => {
        setInput(value);
        requestAPI(value);
    };

    return (
        <nav className="header_navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Left arrow"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Right arrow"/>
                </button>
            </div>
            <div className="header_search">
                <img src={searchIcon} alt=""/>
                <input id="search-input" type="text" maxLength="50"
                placeholder="What do you want to listen to?"
                value={input}
                onChange={(e) => handleChange(e.target.value)}/>
            </div>
            <div className="header_login">
                <button className="signup">Sign up</button>
                <button className="login">Log In</button>
            </div>
        </nav>
    );
}
