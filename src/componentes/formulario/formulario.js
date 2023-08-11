import { useState } from "react";
import "./formulario.css";
import CampoTexto from "./campoTexto";
import ListaOpciones from "./listaOpciones";
import Boton from "./boton";

const Formulario=(props)=>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarfoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor]=useState("");

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio=(e)=>{
        e.preventDefault();
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo =(e)=>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingrese nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingrese puesto"
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingrese enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarfoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton text="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingrese nombre del puesto" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingrese coloe en Hex"
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton text="Registrar Equipo"/>
        </form>
    </section>
};

export default Formulario;