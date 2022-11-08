import React from 'react';
import './BackDrop.css'

export const BackDrop = ({close}) => {
    return (
        <div className="backdrop" onClick={close}></div>
    )
}