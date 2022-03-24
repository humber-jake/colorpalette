import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import NewPaletteFormNav from './NewPaletteFormNav.js';
import ColorPickerForm from './styles/ColorPickerForm.js';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button'
import DraggableColorList from './DraggableColorList.js'
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 400;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function NewPaletteForm(props) {
  const {palettes, savePalette} = props;
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(palettes[0].colors);
  const isPaletteFull = colors.length >= 20;


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onSortEnd = ({oldIndex, newIndex}) => {
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

  function addRandomColor(){
    const allColors = palettes.map(p => p.colors).flat();
    const rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
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
        <Typography variant='h4' >Design New Palette</Typography>
        <div>
            <Button 
              variant='contained' 
              color='secondary' 
              onClick={clearPalette}
            >Clear Palette
            </Button>
            <Button 
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
        />
      </main>
    </div>
  );
  
}

export default NewPaletteForm;