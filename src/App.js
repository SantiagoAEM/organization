import { useState } from 'react';
import './App.css';
import './reset.css'

import Header from './components/header/Header';
import Form from './components/form/Form';
import MiOrg from './components/MiOrg/MiOrg'
import Equipos from './components/equipos/equipos';
import Footer from './components/collaborator/footer/footer';





function App() {
  const [show,updateShow] = useState(false);   
  const [collaborators, updateCollaborators] = useState([]);
//team list
  const [teams, updateTeams] = useState ([
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
          titulo: "Innovación y Gestión",
          color: "var(--clr-innova)",
          backgroundColor: "var(--clr-innova-bg)"
        },
    
      ]);
  
  const changeShow =() =>{
    updateShow(!show)
  }


//Collaborator registration
  const regis = (collaborator) =>{
    console.log("usuario registrado ", collaborator)
/// spread opertor
    updateCollaborators([...collaborators,collaborator])
  }
/// delete collaborator
  const deleteCollaborator = ()=>{
    console.log("eliminado")
  }

/// Update color
const updateColor = (color,titulo) => {
  console.log(color,titulo)
  const teamsUpdated = teams.map((team)=>{
    if (team.titulo === titulo) {
        team.color = color
    }
    return team
  })
  updateTeams(teamsUpdated)

}

  return (
    <div className='container' >
      <Header />
      {/* {show === true ? <Form /> : <></>} */}
       {show && <Form equipo = {teams.map((equipo) => equipo.titulo)}
       regis={regis}
       />}
       
      <MiOrg  changeShow={changeShow}/> 
 
      {
        teams.map( (teams) => 
        <Equipos data = {teams} 
        key={teams.titulo} 
        collaborators={collaborators.filter(collaborator => 
          (collaborator.equipo === teams.titulo))}
          deleteCollaborator = {deleteCollaborator}
          updateColor={updateColor}
        />)
      }           
     <Footer />
    </div>
  );
}

export default App;
