import {useState} from 'react';

import Nav from './components/Nav';
import Slider from './components/Slider';
import Products from './components/Products';


function App() {

  const [query, setQuery] = useState('')

  return (
    <div className="App">
      <Nav />
      <div className = 'search-container' >
        <input className = 'search' type="text" value = {query} placeholder='Search...'
         onChange = {(e) => setQuery(e.target.value)} />
      </div>
      <Slider />
      <Products query = {query} />
    </div>
  );
}

export default App;