import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Canvas = () => {
    let points = useSelector( state => Object.values(state.points) )

    const dispatch = useDispatch()

    useEffect( () => {
        console.log("Canvas initiated, points: ", points[0])
    }, [])

    let { x, y } = points[ points.length - 1]
 
    return <div>
        <div className="plane">
            <p>Point: {x}, {y}</p>
        </div>
    </div>
}

export default Canvas;