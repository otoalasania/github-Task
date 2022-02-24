import React, {useState, useEffect} from 'react'
import './Details.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';

function Details() {
return (
    <div className='detailPage'>
        <div className='iconButton'>
            <Link to="/">
                <IconButton ><KeyboardBackspaceIcon color='primary'  sx={{ fontSize: 50 }}/></IconButton>
            </Link>
        </div>
        <div className='repoInfoBox'></div>
    </div>
)
}

export default Details