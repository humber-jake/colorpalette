import React from 'react';
import {SortableContainer} from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox.js'

function DraggableColorList({colors, deleteColor}) {
    return (
        <div style={{height: '100%', margin: 0, padding: 0,}}>
            {colors.map((color, i) => 
            <DraggableColorBox 
                index={i}
                key={color.name} 
                background={color.color} 
                name={color.name} 
                deleteColor={() => deleteColor(color.name)}
            />)}
        </div>
    );
}

export default SortableContainer(DraggableColorList);