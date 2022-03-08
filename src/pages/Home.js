import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import ListInstructure from "./ListInstructure.js"
import { getListClass } from '../store/actions/listClass';
import { getListInstructure } from '../store/actions/listInstructure.js';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListClass())
  }, [dispatch])

  useEffect(() => {
    dispatch(getListInstructure())
  }, [dispatch])

  return (
    <div>
        asdklajsd
      {/* <ListInstructure/> */}
    </div>
  )
}

export default Home