//create hello world react component
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import {  getDetailInstructure, getListInstructure } from '../store/actions/listInstructure.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Card from '@mui/material/Card';
const DetailInstructure = () => {
  const dispatch = useDispatch();
  
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [social_media, setSocialMedia] = useState('');
  const params = useParams();
  const id = params.id;
  
  // console.log(id,'ea')
  
  
  const data = useSelector(state => state.listInstructureReducer.detailInstructure.data)
  

  
  useEffect(() => {
    dispatch(getDetailInstructure(id))
  }, [dispatch])
  
  
  useEffect(() => {
    console.log(data,'a')
    if(typeof data !== 'undefined'){
      setAvatar(data.avatar)
      setName(data.name)
      setDescription(data.description)
      setSocialMedia(data.social_media)
    }
  }, [data])
  //get data from redux
  

  if (!data) {
    return <Alert severity="error">This is an error — check it out!</Alert>;
  }
  return (
 
    <Paper>
      <Box p={2}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} align='center'>
            <Avatar
              alt="avatar"
              src={avatar}
              sx={{ width: 100, height: 100 }}
            
              />
            <Button variant="text">ADD PHOTO</Button>
          </Grid>
          <Grid item xs={12}>
              <span>Nama</span>
              <TextField
              fullWidth
              id="name"
              value={name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} >
            Deskripsi
            <ReactQuill theme="snow" value={description} onChange={''}/>
          </Grid>
          <Grid item xs={6} marginTop="15px">
            Social Media
            <IconButton>
              <AddBoxIcon/>
            </IconButton>
            {data.social_media.map((item, index) => (
              <div key={index}>
                <p>{item.type}</p>
                <p>{item.url}</p>
              </div>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Paper>

  )
}

export default DetailInstructure;