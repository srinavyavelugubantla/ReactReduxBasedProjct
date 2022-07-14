import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateRating} from '../features/Rating';
import {useHistory} from 'react-router-dom'

function Feedback() {
    const [ratingValue, setRatingValue] = useState(5);
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()
    const updateComments = (value) => {
        if (value.length <= 200) {
            setComments(value);
        }
    };
    const handleRating = () => {
        dispatch(updateRating({rating: ratingValue, comments: comments}) );
        history.push('/')
    }

    return (
        <div>
            <h1>Help us to improve</h1><br />
            <Box style={{textAlign: 'center'}}>
            <Rating
                className='feedback'
                fontSize='20px'
                value={ratingValue}
                label='how satisfied are you with our product?'
                onChange={(event, newValue) => setRatingValue(newValue)}
            />
            </Box><br/><br/>
            <div style={{ width: "100%" }}>
                <Typography variant="body1" className="textarea-lable">Reason for your rating (optional): </Typography>
                <TextField
                    id='comments'
                    size='small'
                    variant='outlined'
                    fullWidth
                    multiline
                    color='primary'
                    minRows={5}
                    maxRows={15}
                    className='text-area'
                    value={comments}
                    onChange={(e) => updateComments(e.target.value)}
                    helperText={<Typography variant="body1">Maximum 200 characters</Typography>}
                />
                <Button 
                style={{margin: '50px 0', width: '100%', padding: '10px'}}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        handleRating();
                    }}>Send feedback</Button>
            </div>
            
        </div>
    )
}

export default Feedback;