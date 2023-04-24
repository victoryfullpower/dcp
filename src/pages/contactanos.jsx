import '../css/contactanos.scss'
import { useState } from "react";
const Contactanos = () => {
    const [nombre, setNombre] = useState('');
    const [cargo, setCargo] = useState('');
    const [correoLaboral, setCorreoLaboral] = useState('');
    const [telefono, setTelefono] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const getNombre = (e)=>{
        setNombre(e.target.value);
    }
    const getCargo = (e)=>{
        setCargo(e.target.value);
    }
    const getCorreoLaboral = (e)=>{
        setCorreoLaboral(e.target.value);
    }
    const getTelefono = (e)=>{
        setTelefono(e.target.value)
    }
    const getDescripcion = (e)=>{
       setDescripcion(e.target.value);
    }
    function reset(){
        document.getElementById("formContactanos").reset();
        setNombre('');
        setCargo('');
        setCorreoLaboral('');
        setTelefono('');
        setDescripcion('');

    }
    const handleSubmit = (e) => {
        e.preventDefault();
       if (nombre!= '' && cargo!= '' && correoLaboral!= '' && telefono!= '' && descripcion!= ''){
            document.getElementById('send').disabled = true;
              fetch(
                "https://udpc52lo5a.execute-api.us-east-1.amazonaws.com/sendContactanos",
                {
                  mode: "no-cors",
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    senderName: "seleccion@dpc.pe",
                    senderEmail: "seleccion@dpc.pe",
                    correo: correoLaboral,
                    message: "Mensaje de " + nombre + "<br> cargo: " + cargo + "<br> correoLaboral:" + correoLaboral + "<br> telefono:" + telefono + "<br> Descripcion:" + descripcion,
                    nombre: nombre,
                  }),
                }
              );
              reset();
              document.getElementById('send').disabled = false;
              document.getElementById('alert').style.display = "block";
              
        }else{
            alert("Faltan datos")
        }  
        
      };
    return (
        <div className='NoirProRegular'>
            <div className='fila_1_contactanos'>

                <div className='fila1_contactanos_correo_texto'>

                <div className='fila1_contactanos_texto NoirProBold'>Nos encanta saber de ti. Estaremos en contacto como  máximo al siguiente día hábil.</div>
                <div>

                <div className='fila1_contactanos_correo'>
                    <form id="formContactanos" action="">
                        <div className='fila1_contactanos_cover_input'>
                            <div className='fila1_contactanos_label'>Nombre</div>
                            <div>
                                <input
                                    className="fila1_contactanos_input"
                                    type='text'
                                    onChange={getNombre}
                                    name='texto3'
                                />
                            </div>
                        </div>
                        <div className='fila1_contactanos_cover_input'>
                            <div className='fila1_contactanos_label'>Cargo</div>
                            <div><input
                                className="fila1_contactanos_input"
                                type='text'
                                onChange={getCargo}
                                name='texto3'
                            /></div>
                        </div>
                        <div className='fila1_contactanos_cover_input'>
                            <div className='fila1_contactanos_label'>Correo laboral</div>
                            <div><input
                                className="fila1_contactanos_input"
                                type='text'
                                onChange={getCorreoLaboral}
                                name='texto3'
                            /></div>
                        </div>
                        <div className='fila1_contactanos_cover_input'>
                            <div className='fila1_contactanos_label'>Teléfono</div>
                            <div><input
                                className="fila1_contactanos_input"
                                type='text'
                                name='texto3'
                                onChange={getTelefono}
                            /></div>
                        </div>
                        <div className='fila1_contactanos_cover_textarea'>
                            <div className='fila1_contactanos_label_cuentanos'>Cuéntanos qué necesitas</div>
                            <div><textarea
                                className="fila1_contactanos_textarea"
                                type='text'
                                name='texto3'
                                onChange={getDescripcion}
                            /></div>
                        </div>
                        <div className='fila1_contactanos_cover_boton'>
                            <button id='send' onClick={handleSubmit} className='fila1_contactanos_botonCorreo NoirProRegular' variant="primary">Enviar</button>
                        </div>
                        </form>
                        <div id='alert' className='NoirProBold' style={{color:"#fff", display:"none", fontSize:"20px"}}>Envio Exitoso</div>
                    </div>
                </div>
                

                    
                </div>
            </div>
        </div>
    )
}
export default Contactanos