//Module imports
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LINsService from '../services/LINs';

//MUI imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

//Components imports
import AddNewLIN from './AddNewLIN';

const DisplayLINs = ({ LINs, setLINs }) => {
    const handleRemoveLIN = () => {
        alert('are you sure?');
    }

    return (
        <>
            
            <Box width={'50%'} sx={{margin: 'auto'}}>
                <AddNewLIN LINs={LINs} setLINs={setLINs}/>
                {LINs.map(item =>
                    <Link to={`/${item.LIN}`}>    
                        <Card sx={{padding: '10px 5px', margin: '10px 0px', ':hover': {boxShadow: 10}}}>
                            <Box width={'80%'} border={1}>
                                {item.LIN} - {item.LIN_Description}
                            </Box>
                            
                            <IconButton sx={{float: 'right', marginRight: '20px'}} aria-label="delete"
                                                                    onClick={handleRemoveLIN}><DeleteIcon /></IconButton>
                        </Card>
                    </Link>

                        // <Card sx={{padding: '10px 5px', margin: '10px 0px', ':hover': {boxShadow: 10}}}>
                        //     <Grid container>
                        //         <Link to={`/${item.LIN}`}><Grid item xs='auto'>
                        //             {item.LIN} - {item.LIN_Description}
                        //         </Grid></Link>
                        //         <Grid item xs='auto'>
                        //             <IconButton sx={{float: 'right', marginRight: '20px'}} aria-label="delete"
                        //                                             onClick={handleRemoveLIN}><DeleteIcon /></IconButton>
                        //         </Grid>
                        //     </Grid>
                        // </Card>
                )}
            </Box>
        </>
    )
}

export default DisplayLINs;