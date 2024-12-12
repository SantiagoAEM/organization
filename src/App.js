import { useState } from 'react';
import './App.css';
import './reset.css'

import Header from './components/header/Header';
import Form from './components/form/Form';
import MiOrg from './components/MiOrg/MiOrg'
import Equipos from './components/equipos/equipos';





function App() {

  //team list
  const teams =[
  {
      titulo: "Programación",
      color: "var(--clr-progra)",
      backgroundColor: "var(--clr-progra-bg)"
    },
    {
      titulo: "Front-End",
      color: "var(--clr-front)",
      backgroundColor: "var(--clr-front-bg)"
    },
    {
      titulo: "Data Science",
      color: "var(--clr-data)",
      backgroundColor: "var(--clr-data-bg)"
    },
    {
      titulo: "Devops",
      color: "var(--clr-devo) ",
      backgroundColor: "var(--clr-devo-bg) "
    },
    {
      titulo: "UX y Diseño",
      color: "var(--clr-ux)",
      backgroundColor: "var(--clr-ux-bg)"
    },
    {
      titulo: "Móvil",
      color: "var(--clr-movil)",
      backgroundColor: "var(--clr-movil-bg)"
    },
    {
      titulo: "Innovación y Gestión ",
      color: "var(--clr-innova)",
      backgroundColor: "var(--clr-innova-bg)"
    },

  ];

  const [show,updateShow] = useState(false);   
  const changeShow =() =>{
    updateShow(!show)
  }

  return (
    <div className='container' >
      <Header />
      {/* {show === true ? <Form /> : <></>} */}
       {show && <Form equipo = {teams.map((equipo) => equipo.titulo)} />}
       
      <MiOrg  changeShow={changeShow}/> 
 
      {
        teams.map( (teams) => <Equipos data = {teams} key={teams.titulo}  />)
      }           
     
    </div>
  );
}

export default App;
