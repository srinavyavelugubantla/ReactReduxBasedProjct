import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../features/Users';
import { Box, Button, Typography } from '@material-ui/core';
import './ListUser.css';
import {useHistory} from 'react-router-dom';

function AddUser() {
    const userList = useSelector((state) => state.users.value);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    const handleAddUser = () =>{
        if(email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) && name){
            dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, email }));
            history.push('/studentsList');
        }
    
    }
    return (
        <Box>
            <Typography variant='h1'>Create New User</Typography>
            <form className='addUser'>
                <label>
                    <b>Enter Student Name:</b>
                </label><br/>
                <input 
                    type="text" 
                    placeholder='Name' 
                    required
                    onChange={(e) => { setName(e.target.value) }} />
                    <br /><br />
                <label>
                    <b>Enter Email Address:</b>
                </label><br/>
                <input 
                    required
                    type="email" 
                    pattern='/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/'
                    placeholder='Email address' 
                    onChange={(e) => { setEmail(e.target.value) }} />
                    <br /><br />
                    <Box >
                <Button 
                    className='submitButton'
                    style={{height:'50px', width: '150px', marginLeft: '170px'}}
                    type='submit'
                    color='primary'
                    required
                    variant='contained'
                    onClick={() => {handleAddUser()}}>
                    Submit
                </Button>
                </Box>
            </form>
            </Box>
    )
    }

export default AddUser;