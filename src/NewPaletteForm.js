import React, { useState } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import NewPaletteFormNav from './NewPaletteFormNav.js';
import ColorPickerForm from './ColorPickerForm.js';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button'
import DraggableColorList from './DraggableColorList.js'
import useStyles from './styles/NewPaletteFormStyles'

function NewPaletteForm(props) {
  
  const {palettes, savePalette} = props;
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(palettes[0].colors);
  
  const isPaletteFull = colors.length >= 20;

  function handleDrawerOpen(){
    setOpen(true);
  };

  function handleDrawerClose(){
    setOpen(false);
  };

  // function for draggable sorting library
  function onSortEnd({oldIndex, newIndex}){
    setColors(
      arrayMove(colors, oldIndex, newIndex)
    )
  };

  function deleteColor(name){
    const newColors = colors.filter(color => color.name !== name) 
    setColors(newColors);
  }

  function clearPalette(){
    setColors([]);
  }

  // generate random color, push to new palette if not duplicate
  function addRandomColor(){
    const allColors = palettes.map(p => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicate = true;
    while (isDuplicate){
      rand = Math.floor(Math.random() * allColors.length)
      randomColor = allColors[rand];
      isDuplicate = colors.some(c => c.name === randomColor.name)
    }
    setColors([...colors, randomColor])
  }

  return (
    <div className={classes.root}>
      <NewPaletteFormNav 
        open={open} 
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        colors={colors}
        savePalette={savePalette}
      />

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {<ChevronLeftIcon />}
          </IconButton>
        </div>

        <div className={classes.container}>
          <Typography variant='h4' gutterBottom>Design New Palette</Typography>
          <div className={classes.buttons}>
              <Button 
                className={classes.button}
                variant='contained' 
                color='secondary' 
                onClick={clearPalette}
              >Clear Palette
              </Button>

              <Button 
                className={classes.button}
                variant='contained' 
                color='primary' 
                onClick={addRandomColor}
                disabled={isPaletteFull}
              >Random Color
              </Button>
          </div>
          
          <ColorPickerForm 
              colors={colors}
              setColors={setColors}
              isPaletteFull={isPaletteFull}
            />
        </div>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList 
          colors={colors} 
          deleteColor={deleteColor}
          axis='xy'
          onSortEnd={onSortEnd}
          distance={5}
        />
      </main>
    </div>
  );
  
}

export default NewPaletteForm;