import { useState } from 'react';
import './App.css';
import './reset.css'
import Header from './components/header/Header';
import Form from './components/form/Form';
import MiOrg from './components/MiOrg/MiOrg'



function App() {

  const [show,updateShow] = useState(true);   
  const changeShow =() =>{
    updateShow(!show)
  }

  return (
    <div className='container' >
      <Header />
      {/* {show === true ? <Form /> : <></>} */}
       {show && <Form />}
       
      <MiOrg  changeShow={changeShow}/>     
     
    </div>
  );
}

export default App;
