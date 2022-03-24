import React from 'react';
import {SortableContainer} from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox.js'

function DraggableColorList({colors, deleteColor}) {
    return (
        <div style={{height: '100%'}}>
            {colors.map((color, i) => 
            <DraggableColorBox 
                index={i}
                key={color.name} 
                color={color.color} 
                name={color.name} 
                deleteColor={() => deleteColor(color.name)}
            />)}
        </div>
    );
}

export default SortableContainer(DraggableColorList);