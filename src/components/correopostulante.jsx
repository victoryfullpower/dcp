import "../css/postulate.scss";
import React, { useState, useEffect } from 'react';

function Correopostulante({postulacion,skills}){
    console.log("arreglo",skills)
    var archivo2 = "";
    var fileNamev2 = "";
    var correo = "";
    var telefono = "";
    var arreglo = "";
    var arreglo2 = [];
    arreglo = skills;
    arreglo2 = arreglo.split(",")
    console.log("arreglo2", skills)
    const [base64, setBase64] = useState('');
    const [fileName, setfileName] = useState('');
    const openFile = (e) => {
        document.getElementById('filePostulacion').click()
    }
    const changeCorreo = e => {
        correo = e.target.value;
        console.log('correo', correo)
    }
    const changeTelefono = e => {
        telefono = e.target.value;
    }
    const changefile = (e) => {
        const files = e.target.files;
       
        const file = files[0];
      
       if (file != undefined){
        console.log('onchage',file)
        getBase64(file);
       }
           
        
        
    };
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            fileNamev2 = file.name;
            document.getElementById('postulacionFront').value = fileNamev2;
            setfileName(file.name);
            console.log("file", fileName);
            onLoad(reader.result);

        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    function reset() {
        document.getElementById("formPostulacion").reset();
        archivo2 = "";
        fileNamev2 = "";
        correo = "";
        telefono = "";
    }

    const onLoad = (fileString) => {
        setBase64(fileString);
        archivo2 = fileString;

        console.log("onload", base64);


    };
    const handleSubmit = (e) => {

        console.log('archivo',archivo2)
        console.log('telefono',telefono)
        console.log('correo',correo)
        e.preventDefault();
        if (base64 != '' && telefono != '' && correo != '') {
            document.getElementById('send').disabled = true;
            fetch(
                "https://esxq8zpryl.execute-api.us-east-1.amazonaws.com/sendMail",
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
                        correo: correo,
                        message: "Mensaje de " + correo + " con numero: " + telefono,
                        base64Data: archivo2,
                        date: new Date(),
                        fileName: fileNamev2,
                    }),
                }
            );
            reset();
            document.getElementById('send').disabled = false;
            document.getElementById('alert').style.display = "block";

        } else {
            alert("Faltan datos")
        }

    };
    return (
        <div className="fila_4_postulate">
        <div className='fila4_postulate_titulo NoirProBold'>
            {postulacion}
        </div>
        <div className='fila4_postulate_contexto'>
    
            <div className='fila4_postulate_text'>
    
                <ul className='fila4_postulate_ul'>
                    <p>SKILLS REQUERIDOS:</p>
                    {
                        

                        arreglo2.map((x, i) =>
                        <li key={i}>{x}</li>
                        )
                    }
                
                </ul>
            </div>
            <div className='fila4_postulate_correo'>
                <form id="formPostulacion" action="">
                <div className='fila4_postulate_cover_input'>
                    <div className='fila4_postulate_label'>C. Vitae</div>
                    <div>
                      
                            <input
                                className="fila4_postulate_input"
                                type='file'
                                accept='application/pdf'
                                placeholder="Seleccionar archivo"
                                id='filePostulacion'
                                onChange={changefile}
                                style={{display:"none"}}
                               
                                
                            />
                      
                      <input
                           readOnly
                            className="fila4_postulate_input"
                            type='text'
                            onClick={openFile}
                            placeholder="Seleccionar archivo"
                            id='postulacionFront'
                        />
                    </div>
                </div>
                <div className='fila4_postulate_cover_input'>
                    <div className='fila4_postulate_label'>Correo</div>
                    <div><input
                           
                            className="fila4_postulate_input"
                            type='text'
                            onChange={changeCorreo}
                            name='texto3'
                        /></div>
                </div>
                <div className='fila4_postulate_cover_input'>
                    <div className='fila4_postulate_label'>Teléfono</div>
                    <div><input
                            className="fila4_postulate_input"
                            type='text'
                            name='texto3'
                            onChange={changeTelefono}
                        /></div>
                </div>
                <div className='fila4_postulate_cover_boton'>
                    <button onClick={handleSubmit} id='send' className='botonCorreo NoirProRegular' variant="primary">Enviar</button>
                   
                </div>
                <div id='alert' className='NoirProBold' style={{color:"#fff", display:"none", fontSize:"20px"}}>Envio Exitoso</div>
                </form>
            </div>
        </div>
    </div> 
    )
}
export default Correopostulante