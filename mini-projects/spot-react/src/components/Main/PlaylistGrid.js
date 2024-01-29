import '../../general/reset.css';
import './PlaylistGrid.css';

import PinkFloyd  from '../../assets/playlist/pink-floyd.png';
import Scorpions from '../../assets/playlist/scorpions.jpg';
import DireStraits from '../../assets/playlist/dire-straits.jpg';
import LedZeppelin from '../../assets/playlist/led-zeppelin.jpg';
import ThePolice from '../../assets/playlist/the-police.jpg';
import Metallica from '../../assets/playlist/metallica.jpg';
import Nirvana from '../../assets/playlist/nirvana.jpg';
import Queen from '../../assets/playlist/queen.jpg';
import BonJovi from '../../assets/playlist/bon-jovi.jpg';
import ACDC from '../../assets/playlist/ac-dc.png';
import TheBeatles from '../../assets/playlist/the-beatles.jpg';
import Aerosmith from '../../assets/playlist/aerosmith.jpg';
import BlackSabbath from '../../assets/playlist/black-sabbath.png';
import TheRollingStones from '../../assets/playlist/the-rolling-stones.jpg';
import SystemofaDown  from '../../assets/playlist/system-of-a-down.jpg';
import GreenDay from '../../assets/playlist/green-day.jpg';
import IronMaiden from '../../assets/playlist/iron-maiden.jpg';
import GunsNRoses from '../../assets/playlist/guns-n-roses.jpg';

export default function PlaylistGrid()
{
    return (
        <div className="playlist-container">
            <div id="result-playlists">

                <div className="playlist">
                    <h1 id="greetings">Browse all</h1>
                </div>

                <div className="offer_scroll-container">
                    <div className="offer_list">
                        <section className="offer_items-list">

                            <a href="" className="cards">
                                <div className="cards card1">
                                    <img src={PinkFloyd} alt=""/>
                                    <span>Pink Floyd</span>
                                </div>
                            </a>
                            
                            <a href="" className="cards">
                                <div className="cards card2">
                                    <img src={Scorpions} alt=""/>
                                    <span>Scorpions</span>
                                </div>
                            </a>
                            
                            <a href="" className="cards">
                                <div className="cards card3">
                                    <img src={DireStraits} alt=""/>
                                    <span>Dire Straits</span>
                                </div>
                            </a>
                            
                            <a href="" className="cards">
                                <div className="cards card4">
                                    <img src={LedZeppelin} alt=""/>
                                    <span>Led Zeppelin</span>
                                </div>
                            </a>
                            
                            <a href="" className="cards">
                                <div className="cards card5">
                                    <img src={ThePolice} alt=""/>
                                    <span>The Police</span>
                                </div>
                            </a>
                            
                            <a href="" className="cards">
                                <div className="cards card6">
                                    <img src={Metallica} alt=""/>
                                    <span>Metallica</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card7">
                                    <img src={Nirvana} alt=""/>
                                    <span>Nirvana</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card8">
                                    <img src={Queen} alt=""/>
                                    <span>Queen</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card9">
                                    <img src={BonJovi} alt=""/>
                                    <span>Bon Jovi</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card10">
                                    <img src={ACDC} alt=""/>
                                    <span>AC/DC</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card11">
                                    <img src={TheBeatles} alt=""/>
                                    <span>The Beatles</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card12">
                                    <img src={Aerosmith} alt=""/>
                                    <span>Aerosmith</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card13">
                                    <img src={BlackSabbath} alt=""/>
                                    <span>Black Sabbath</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card14">
                                    <img src={TheRollingStones} alt=""/>
                                    <span>The Rolling Stones</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card15">
                                    <img src={SystemofaDown} alt=""/>
                                    <span>System of a Down</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card16">
                                    <img src={GreenDay} alt=""/>
                                    <span>Green Day</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card17">
                                    <img src={IronMaiden} alt=""/>
                                    <span>Iron Maiden</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card18">
                                    <img src={GunsNRoses} alt=""/>
                                    <span>Guns N' Roses</span>
                                </div>
                            </a>

                        </section>
                    </div>

                    {/* TODO: Fix aligning and responsiveness in this section */}
                    {/* TODO: Display this section on search results too */}
                    <table className="more-info">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Communities</th>
                                <th>Useful links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="">About</a>
                                </td>
                                <td>
                                    <a href="">Jobs</a>
                                </td>
                                <td>
                                    <a href="">For the Record</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">For Artists</a>
                                </td>
                                <td>
                                    <a href="">Developers</a>
                                </td>
                                <td>
                                    <a href="">Advertising</a>
                                </td>
                                <td>
                                    <a href="">Investors</a>
                                </td>
                                <td>
                                    <a href="">Vendors</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Support</a>
                                </td>
                                <td>
                                    <a href="">Free Mobile App</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <hr/>
                    <span>
                        &copy; 2024 Spotify Clone
                    </span>
                </div>
            </div>
        </div>
    );
}
