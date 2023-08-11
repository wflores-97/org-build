import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo/equipo';
import Footer from './componentes/footer';


function App() {
  /*Mostrar/esconder el formulario*/
  const [showForm, updateShow]=useState(false);
  const [colaboradores, actualizarColaborador] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);
  const [equipos1, actualizarEquipos]=useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    }, 
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    }, 
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    }, 
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
    ]);

  const cambiarMostrar =()=>{
    updateShow(!showForm)
  }

  //Actualizar color de equipo
  const actualizarColor=(color, id)=>{
    const equiposActualizados=equipos1.map((equipo)=>{
      if(equipo.id === id ){
        equipo.colorPrimario=color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  /*Registrar Colaborador */
    const RegistrarColaborador =(colaborador)=>{
      //Spread Operator
      actualizarColaborador([...colaboradores, colaborador]);
    }
  
  //Eliminar Colaborador
  const EliminarColaborador=(id)=>{
    console.log("Eliminar Colaborador: ", id)
    const nuevosColaboradores=colaboradores.filter((colaborador)=>colaborador.id !== id );
    actualizarColaborador(nuevosColaboradores);
  }

  //Crear Equipo
  const crearEquipo =(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos1, {...nuevoEquipo, id:uuid()}])
  }

  //Like
  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    actualizarColaborador(colaboradoresActualizados)
  }

  return (
    <div>

      <Header/>
      {
      ///operador ternario---> condición === true ? showform : updateShow
        showForm && <Formulario 
          equipos={equipos1.map((equipo)=>equipo.titulo)}
          registrarColaborador={RegistrarColaborador}
          crearEquipo={crearEquipo}
          />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos1.map( (equipos1) => <Equipo
          datos={equipos1} 
          key={equipos1.titulo} 
          colaboradores={colaboradores.filter(colaborador=> colaborador.equipo === equipos1.titulo)}
          eliminarColaborador={EliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }
      <Footer/>

    </div>
  );
}

export default App;
