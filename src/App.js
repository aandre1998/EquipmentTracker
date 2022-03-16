import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import AddNewLIN from './components/AddNewLIN';
import DisplayLINs from './components/DisplayLINs';
import SingleLIN from './components/SingleLIN';

import LINsService from './services/LINs';

import './App.css';


const App = () => {
  const [LINs, setLINs] = useState([]);
  //const [newLIN, setNewLIN] = useState({});

  useEffect(() => {
    LINsService.getAll().then(initialLINs => {
      setLINs(initialLINs);
    })
  }, [])

  return (
    <>
      <Typography variant="h3" sx={{textAlign:'center', marginBottom:'20px'}}>
        <Link to='/'>MCP Platoon Equipment Tracking</Link>
      </Typography>

      <Routes>
        <Route path="/" element={<DisplayLINs LINs={LINs} setLINs={setLINs}/>} />
        <Route path={':LINparam'} element={<SingleLIN data={LINs}/>} />
      </Routes>
    </>
  );
}

export default App;