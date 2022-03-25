import './App.css';
import { useEffect, useState } from 'react';
import Palette from './Palette';
import { Route, Routes } from 'react-router-dom';
import SeedColors from './seedColors.js';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {

  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

  const [palettes, setPalettes] = useState( savedPalettes || [...SeedColors]);
  
  const findPalette = id => {
    return palettes.find(palette => palette.id === id)
  }

  function savePalette(newPalette){
    setPalettes([...palettes, newPalette])
  }
  
  function syncLocalStorage(){
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }

  useEffect(() => {
    syncLocalStorage(palettes);
  })


  return (
    <Routes>
        <Route path='/' element={<PaletteList palettes={palettes}/>}/>
        <Route path='/palette/new' element={<NewPaletteForm savePalette={savePalette} palettes={palettes}/>}/>
        {/* <Route path='/test' element={ }/> */}
        <Route path='palette/:id' element={<Palette findPalette={findPalette}/>}/>
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette findPalette={findPalette}/>}/>
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;