import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
  const {palettes} = props;
  let navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState('');
  const [colors, setColors] = useState(palettes[0].colors);
  const [newColorName, setNewColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');
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
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
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
  const handlePaletteChange = e => {
      setNewPaletteName(e.target.value)
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors(
      arrayMove(colors, oldIndex, newIndex)
    )
  };

  function handleSubmit(){
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors
    }
    props.savePalette(newPalette)
    console.log(newPalette);
    navigate('/');
  }
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
      <CssBaseline />
      <AppBar
        position="fixed"
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator 
              label='Palette Name' 
              value={newPaletteName} 
              onChange={handlePaletteChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter a palette name.','Name already in use.']}
            />
            <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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