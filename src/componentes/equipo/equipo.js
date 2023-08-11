import "./equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    //const bgColor={ backgroundColor: props.datos.colorSecundario}
    const {colorPrimario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador,actualizarColor, like} = props;

    const estiloTitulo={borderColor: colorPrimario};
    const obj={backgroundColor:hexToRgba(colorPrimario, 0.5)}
    //const estiloFondo={backgroundColor: colorPrimario};

    return <>{ colaboradores.length > 0 &&
        <section className="sectionEquipo" style={obj}>
            <input  type="color" 
                    className="input-color" 
                    value={colorPrimario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value, id)
                    }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">

                {
                    colaboradores.map( (colaborador, index)=> <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        /> )
                }
            </div>
    </section>}
    </> 
}

export default Equipo;