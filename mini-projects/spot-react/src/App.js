import { useState } from "react";
import './general/reset.css';
import './general/vars.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PlaylistGrid from './components/Main/PlaylistGrid';
import SearchList from "./components/Main/SearchList";
import './App.css';
import './general/responsiveness.css';

function App() 
{
  const [results, setResults] = useState({'data': [], 'status': false});

  return (
    <>
    <Sidebar/>
    <main>
        <Header setResults={setResults}/>
        {!results.status && <PlaylistGrid results={results.data}/>}
        {results.status && <SearchList results={results.data}/>}
    </main>
    <Footer/>
    </>
  );
}

export default App;
