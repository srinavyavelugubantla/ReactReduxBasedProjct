import { Box, Typography, Link } from '@material-ui/core';
import React from 'react';
import logo from './logo.png';
import {useHistory} from 'react-router-dom';

function Introduction() {
  const history = useHistory();
    const handleClick = () =>{
      history.push('/createuser')
    }
  return (
    <Box className='App'>
        <Typography variant='h2'>Welcome to Registration Form</Typography>
        <img src={logo} width='500px' height='400px' alt='schoolLogo'/>
        <Box margin='10px' className='registerlink'>
            click here to register 
        <Link color='primary' style={{textDecoration: 'underline', marginLeft: '10px'}} onClick={() => {handleClick()}} >Register</Link>
        </Box>
    </Box>
  )
}

export default Introduction