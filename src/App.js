import './App.css';
import Palette from './Palette';
import { Route, Routes } from 'react-router-dom';
import SeedColors from './seedColors.js';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';


function App() {

  return (
    <Routes>
        <Route path='/' element={<PaletteList palettes={SeedColors}/>}/>
        <Route path='/palette/new' element={<NewPaletteForm />}/>
        <Route path='palette/:id' element={<Palette />}/>
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette />}/>
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;