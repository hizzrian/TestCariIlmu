//create hello world react component
import React, { useState, useEffect, state } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getListClass } from '../store/actions/listClass';
import Chip from '@mui/material/Chip';
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import PreviewIcon from '@mui/icons-material/Preview';
const ListKelas = (  ) => {
  const dispatch = useDispatch();
  

  const kelas = useSelector(state => state.listClassReducers.class)
  

  useEffect(() => {
    dispatch(getListClass())
  }, [dispatch])


const columns = [
    {
        name: "#",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <div>
                        {tableMeta.rowIndex + 1}
                    </div>
                );
            }
        }
    },  
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      //get data use an array instead 
      name: "course_type",
      label: "Course Type",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (id, label, data) => {
          return (
            <div>
              <Chip label={id.name} color="primary" />
            </div>
          );
        }
      }
    },
    {
      name: "course_category",
      label: "Course Category",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (id, label, data) => {
          return (
            <div>
              <Chip label={id.name} color="primary" variant="outlined"/>
            </div>
          );
        }
      }
    },
    {
      name: "course_level",
      label: "Course Level",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (id, label, data) => {
          return (
            <div>
              <Chip label={id.name} color="primary" />
            </div>
          );
        }
      }
    },
    {
      name: "course_teach_method",
      label: "Course Teach Method",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (id, label, data) => {
          return (
            <div>
              <Chip label={id.name} color="primary" variant="outlined"/>
            </div>
          );
        }
      }
    },
    {
      name: "id",
      label: "Options",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (id,value, tableData) => {
          return (
            <div>
              <Button variant="contained" color="primary" onClick={() =>
                {
                  getDetailClass(id,value, 'asdasdasd')
                }
              }>
                <PreviewIcon/>
              </Button>
            </div>
          );
        }
      }
    }

   
   ];
   const getDetailClass = (id, value, tableData) => {
    window.location.href = `/detail-class/${id}`
   }
  
   const options = {
     filterType: 'checkbox',
   };
  return (
    <MUIDataTable
    title={"Kelas List"}
    data={ kelas ? kelas.records : []}
    columns={columns}
    options={options}
  />
  )
}

export default ListKelas;