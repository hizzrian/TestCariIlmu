//create hello world react component
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import MUIDataTable from "mui-datatables";
import { getListInstructure } from '../store/actions/listInstructure.js';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import PreviewIcon from '@mui/icons-material/Preview';
const ListInstructure = () => {
  const dispatch = useDispatch();

  const instruktur = useSelector(state => state.listInstructureReducer.instructure)
    console.log(instruktur)

  useEffect(() => {
    dispatch(getListInstructure())
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
        name: "avatar",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <div>
                        <Avatar
                            src={value}
                        />
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
      //show avatars: true
    }
    },
    {
        name: "total_courses",
        label: "Total Class",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "id",
        label: "Options",
        options: {
            filter: false,
            sort: false,
            
            customBodyRender: (value, tableMeta,tableData) => {
                
                return (
                    <div>
                        <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" onClick={() => {
                            
                            getDetailInstructure(value)
                            //Go to Edit instructure page with ID

                        }}>
                            <PreviewIcon/>
                        </Button>
                        <Button variant="contained" color="error" onClick={() => {
                            deleteInstructure(value)
                            
                        }}>
                            <DeleteSharpIcon/>
                        </Button>
                        </Stack>
                    </div>

                );
            }
    }}
   ];

    const getDetailInstructure = (value, tableMeta) => {
        //Go to Detail Class page with ID
        window.location.href = `/detail-instructure/${value}`
    }
 
    const deleteInstructure = (value, tableMeta) => {
        //delete data from row
       
    }


   const options = {
     filterType: 'checkbox',
   };
  
  return (
       <MUIDataTable
         title={"Employee List"}
         data={ instruktur ? instruktur.records : []}
         columns={columns}
         options={options}
       />
  )
}

export default ListInstructure;