import './App.css';
import Palette from './Palette';
import { Route, Routes } from 'react-router-dom';
import SeedColors from './seedColors.js';
import PaletteList from './PaletteList';


function App() {

  return (
    <Routes>
        <Route exact path='/' element={<PaletteList palettes={SeedColors}/>}/>
        <Route exact path='palette/:id' element={<Palette />}/>
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;