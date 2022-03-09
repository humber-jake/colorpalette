import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<h1>PALETTE LIST GOES HERE</h1>}/>
        <Route exact path='/palette/:id' element={<h1>THIS IS THE OTHER ROUTE</h1>}/>
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;