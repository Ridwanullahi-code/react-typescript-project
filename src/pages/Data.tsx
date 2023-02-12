import React from 'react';
import Navbar from '../components/Navbar'
import DisplayData from '../components/DataGrid';
const Data = () => {
  return (
    <div>
        <Navbar title='Data' to='/'/>
        <DisplayData />
    </div>
  )
}

export default Data;
