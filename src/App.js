import './App.css';
import Palette from './Palette';
import { Route, Routes, useParams } from 'react-router-dom';

function App() {

  return (
    <Routes>
        <Route exact path='/' element={<h1>PALETTE LIST GOES HERE</h1>}/>
        <Route exact path='palette/:id' element={<Palette />}/>
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;