import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { addDark, addLight } from '../redux/appSlice';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const theme = useSelector(state => state.app.theme)

  const dispatch = useDispatch()

  return (
    <div className='p-5 bg-emerald-500 h-16 flex items-center justify-center sticky top-0'> 
      <IconButton onClick={() => {theme === "dark" ? dispatch(addLight()) : dispatch(addDark()) } } className="text-white">
        {theme === "dark" ? <LightModeIcon className="text-white"/> : <DarkModeIcon className="text-white" />}
      </IconButton>
      <Link to={"/test"}>test</Link>
      <Link to={"/"}>home</Link>
    </div>
  )
}

export default Navbar