import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { deleteUser } from '../features/Users';
import { Box, Button, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import './ListUser.css';
import 'remixicon/fonts/remixicon.css'

function ListUser() {
    const userList = useSelector((state) => state.users.value);
    const dispatch = useDispatch();
    const history = useHistory()
    const handleUpdate = (id) => {
        history.push(`/update/${id}`)
    }
   
    return (
        <Box className="App">
            <Typography variant='h2'>Users Listing page</Typography>
            <Box className="displayUsers">
                <Table className='listingTable'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>customer Name</TableCell>
                            <TableCell>Email Address</TableCell>
                            <TableCell>Update User</TableCell>
                            <TableCell>Delete user</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {userList.map((user, index) => {
                        return (
                                <TableRow key={index}>
                                    <TableCell><Link to={`/update/:${user.id}`}>{index + 1}</Link></TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell><Button className='updateButton' onClick={() => { handleUpdate(user.id) }}>
                                        <i className="ri-edit-fill"></i></Button></TableCell>
                                    <TableCell><Button className='deleteButton' onClick={() => { dispatch(deleteUser({ id: user.id })) }}>
                                        <i className="ri-delete-bin-line" ></i></Button>
                                    </TableCell>
                                </TableRow>
                        
                    )})}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    )
}

export default ListUser;