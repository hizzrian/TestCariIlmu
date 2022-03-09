//create hello world react component
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import {  getDetailClass } from '../store/actions/listClass.js';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
const DetailClass = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course_category, setCourseCategory] = useState('');
  const [course_type, setCourseType] = useState('');
  const [course_level, setCourseLevel] = useState('');
  const [course_teach_method, setCourseTeachMethod] = useState('');
  const [duration, setDuration] = useState('');
  const [cover, setCover] = useState('');
  const [instructors, setInstructors] = useState('');
  
  
  const params = useParams();
  const id = params.id;
  
  
  const data = useSelector(state => state.listClassReducers.detailClass.data)
  // console.log(data,'ea')
  
  const Input = styled('input')({
    display: 'none',
  });
  
  useEffect(() => {
    dispatch(getDetailClass(id))
  }, [dispatch, id])
  
  
  useEffect(() => {
    // console.log(data.instructors,'a')
    if(typeof data !== 'undefined'){
      setCode(data.code)
      setName(data.name)
      setDescription(data.description)
      setCourseCategory(data.course_category)
      setCourseType(data.course_type)
      setCourseLevel(data.course_level)
      setCourseTeachMethod(data.course_teach_method)
      setDuration(data.duration)
      setCover(data.cover)
      setInstructors(data.instructors[0].name)
    }
  }, [data])
  //course category
  const courseCategory = [
    {    
      value: '1',
      title: 'Silahkan pilih'
    },
    {
      value: '2',
      title: course_category.name,
    }
  ];
  const flatPropsCategory = {
    options: courseCategory.map((option) => option.title),
  };
  //course type
  const courseType = [
    {
      value: '1',
      title: 'Silahkan pilih'
    },
    {
      value: '2',
      title: course_type.name,
    }
  ];
  const flatPropsType = {
    options: courseType.map((option) => option.title),
  };

  //course level
  const courseLevel = [
    {
      value: '1',
      title: 'Silahkan pilih'
    },
    {
      value: '2',
      title: course_level.name,
    }
  ];
  const flatPropsLevel = {
    options: courseLevel.map((option) => option.title),
  };
 
  //course teach method
  const courseTeachMethod = [
    {
      value: '1',
      title: 'Silahkan pilih'
    },
    {
      value: '2',
      title: course_teach_method.name,
    }
  ];
  const flatPropsTeachMethod = {
    options: courseTeachMethod.map((option) => option.title),
  };
  //instructor
  const instructorList = [
    {
      value: '1',
      title: 'Silahkan pilih'
    },
    {
      value: '2',
      title: instructors,
    }
  ];
 
  return (
 
    <Paper>
      <Box p={4}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} align='center'>
              <h2>Master Data</h2>
          </Grid>
          <Grid item xs={4}>
              <span>Kode</span>
              <TextField
              fullWidth
              id="Kode"
              value={code}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={8}>
              <span>Judul</span>
              <TextField
              fullWidth
              id="title"
              value={name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          {description ? (
            <Grid item xs={12}>
              <span>Deskripsi</span>
              <ReactQuill
                value={description}
                modules={DetailClass.modules}
                readOnly
                theme="snow"
              />
            </Grid>
          ) : null}
          <Grid item xs={3} >
            Kategori
            <Autocomplete
              {...flatPropsCategory} 
              id="course_category"
              defaultValue={flatPropsCategory.options[0]}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={3} >
            Tipe
            <Autocomplete
              {...flatPropsType} 
              id="course_type"
              defaultValue={flatPropsType.options[0]}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={3} >
            Level
            <Autocomplete
              {...flatPropsLevel} 
              id="course_level"
              defaultValue={flatPropsLevel.options[0]}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={3} >
            Metode Ajar
            <Autocomplete
              {...flatPropsTeachMethod} 
              id="course_TeachMethod"
              defaultValue={flatPropsTeachMethod.options[0]}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={4} >
            Cover
            <Card >  
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
              <Button variant="contained" component="span" size='small'>
                +
              </Button>
            </label>  
            </Card>
          </Grid>
          <Grid item xs={4} >
              Instructure
              <Autocomplete
               multiple
               limitTags={2}
               id="instructors"
               options={instructorList}
               getOptionLabel={(option) => option.title}
               defaultValue={[instructorList[0], instructorList[1]]}
               renderInput={(params) => (
                 <TextField {...params} placeholder="Favorites" />
               )}
               sx={{ width: '334px' }}
             />
          </Grid>
          <Grid item xs={4}>
              <span>Durasi</span>
              <TextField
              fullWidth
              id="Durasi"
              value={duration}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            Cover Preview
            <Card >
              <img src={cover} alt="cover" conte />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Paper>

  )
}

export default DetailClass;