import React, { useState } from 'react'
import { updateEmailAddress, updateUserName} from '../features/Users';
import { useDispatch } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

function UpdateUser() {
    const [email, setEmail] = useState('');
    const [userName,setUserName] = useState('');
    const dispatch = useDispatch();
    const id= useParams();
    const history = useHistory();
    const handleUpdate = () => {
      if(email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) && userName){
        dispatch(updateEmailAddress({id: parseInt(id.id), email: email}));
        dispatch(updateUserName({id: parseInt(id.id), name: userName}));
        history.push('/studentsList')
      }
    }
  return (
    <Box className='updateForm'>
      <Typography variant='h1'>Update User</Typography>
      <form>
      <label>Update UserName:</label><br/>
        <input
          type="text" 
          fullWidth
          placeholder='EnterName' 
          onChange={(e) => {setUserName(e.target.value)}} 
          required/>
        <Box> <br/>
        <label>Update Email:</label><br/>
        <input
          required
          type="email" 
          fullWidth
          placeholder='Email address' 
          onChange={(e) => {setEmail(e.target.value)}} 
          />
        <Box>
          <button 
            variant='contained'
            color='primary'
            style={{width:'200px'}}
            onClick={() => {handleUpdate()}} >
            Update Details
          </button>
          </Box>
        </Box>
        </form>
    </Box>
  )
}

export default UpdateUser;