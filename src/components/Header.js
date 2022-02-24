import React from 'react'
import '../App.css'
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
  return (
    <div className='header'>
        <h1>Find Github Repos </h1>
        <GitHubIcon color="primary" sx={{ fontSize: 48 }}/>
    </div>
  )
}

export default Header