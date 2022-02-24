import React, {useState, useEffect} from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import Header from '../components/Header'
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom'

function Home() {
    const [inputText, setInputText] = useState("")
    const [avatar, setAvatar] = useState("")
    const [username, setUserName] = useState("")
    const [reposQuant, setReposQuant] = useState("")
    const [reposNames, setReposNames] = useState("")

    useEffect(async () =>{
        if(inputText){
            const response = await fetch(`https://api.github.com/users/${inputText}/repos`)
            const data = await response.json()
            setReposQuant(data.length)
            setUserName(data[0].owner.login)
            setAvatar(data[0].owner.avatar_url)
            setReposNames(data.map((repoItem)=>{
            return <Link to={`/details/${repoItem.name}`} className="link"><p className='outputedRepoName'> {repoItem.name} </p></Link>
            }))
        }
    },[inputText])

    return (
    <div className="App">
        <Header />
        <div className='inputBox'>
        <input 
            value={inputText} 
            className='input' 
            type="text" 
            onChange={(e) => setInputText(e.target.value)}/>
        <IconButton onClick={() => setInputText("")} color="primary">
            {inputText ? <CloseIcon sx={{ fontSize: 30 }}/> : <SearchIcon sx={{ fontSize: 30 }} />}
        </IconButton>
        </div>
        {inputText && 
        <div className='outputBox'>
            <div className='info'>
                <div className='profileInfo'>
                    <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 70, height: 70 }}/>
                    <p>{username}</p>
                </div>
                <div className='repoQuanti'>{reposQuant} Repositories</div>
            </div>
            <div className='reposNames'>{reposNames}</div>
        </div>}
    </div>
    );
}

export default Home