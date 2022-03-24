import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import NewPaletteFormNav from './NewPaletteFormNav.js';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button'
import {ChromePicker} from 'react-color'
import DraggableColorList from './DraggableColorList.js'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 400;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  const [currentColor, setCurrentColor] = useState('');
  const [colors, setColors] = useState(palettes[0].colors);
  const [newColorName, setNewColorName] = useState('');
  const isPaletteFull = colors.length >= 20;


  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
  });
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorUnique", value => {
      return colors.every(
        ({ color }) => color !== currentColor
      );
    });
  });


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = e => {
      setNewColorName(e.target.value)
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors(
      arrayMove(colors, oldIndex, newIndex)
    )
  };

  function addNewColor(){
      const newColor = {
          color: currentColor,
          name: newColorName
      }
      setColors([...colors, newColor])
      setNewColorName('');
  }

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
        classes={classes}
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
        <ChromePicker color={currentColor} onChangeComplete={e => setCurrentColor(e.hex)}/>

        <ValidatorForm onSubmit={addNewColor}>
            <TextValidator
                value={newColorName}
                onChange={handleColorChange}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={['This field is required.', 'Color name must be unique.', 'This color is already in the palette.']}
            />
            <Button 
                variant='contained' 
                color='primary' 
                type='submit'
                style={{backgroundColor: isPaletteFull ? "grey" : currentColor}}
                disabled={isPaletteFull}
            >{isPaletteFull ? "Palette Full" : 'Add Color'}
            </Button>
        </ValidatorForm>
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