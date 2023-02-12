import React from 'react';
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
        <Navbar title="Home" to='/'/>
        <Form />
    </div>
  )
}

export default Home
