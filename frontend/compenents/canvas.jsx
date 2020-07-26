import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Canvas = () => {
    let points = useSelector( state => state.points )

    const dispatch = useDispatch()

    useEffect( () => {
        console.log("Canvas initiated, points: ", points[0])
    }, [])

    let { x, y} = points[0]
 
    return <div>
        <p>Point: {x}, {y}</p>

    </div>
}

export default Canvas;