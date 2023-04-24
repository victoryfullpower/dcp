import '../css/recursos.scss'
import * as AWS from 'aws-sdk';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import YoutubeEmbed from '../components/youtube_embed.jsx';
import {useNavigate} from 'react-router-dom';

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
    accessKeyId: 'AKIA3567SCNVP3RN2AWM'
});

const Detallevideo = () => {
    var dato = JSON.parse(sessionStorage.getItem("video"))
    const [lectura, setlectura] = useState([]);
    const [video, setvideo] = useState([]);
    let { problemId } = useParams()

    useEffect(() => {
       
    }, []);
    const navigate = useNavigate();
    const volvervideos =()=>{
      
        navigate(`/Recursovideo`)
       
      }
      const volverrecurso =()=>{
      
        navigate(`/Recursos`)
       
      }
      const volverHome=()=>{
      
        navigate(`/`)
       
      }
    return (

        <div className='NoirProRegular'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span onClick={volverHome} className='home_medologia NoirProRegular'>{"<-"} Home | </span><span onClick={volverrecurso} className='miga_metodologia NoirProRegular'>Recursos | </span><span onClick={volvervideos} className='miga_metodologia NoirProRegular'>Videos |</span> <span className='miga_metodologia NoirProBold'>{dato.titulo}</span> </div>
            <div className="fila_1_recurso">
                <div className='fila1_recurso_titulo NoirProBold'>
                    {dato.titulo}
                </div>
                <div className='fila1_recurso_text1_video' style={{ marginTop: "30px" }}>
                    {/* <img src={dato.imagen} style={{ width: "500px", height: "350px" }} />
                    <div id="articulodetalle" style={{ marginLeft: "50px" }}>

                    </div> */}

                <YoutubeEmbed embedId={dato.video} />
                </div>

                <div className='fila1_recurso_lista_videos'>


                </div>
            </div>

            <div className="fila_2_recurso_detalle">
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className='elaboradopor'>

                        <div>Elaborado por:</div>
                        <div style={{ marginLeft: "10px" }}>{dato.Autor}</div>

                    </div>
                    <div className='fecha' >{dato.Fecha}</div>
                </div>




                <div className='fila1_recurso_lista_videos'>


                </div>
                <div className='fila2_recurso_text_arrow_center'>
                    <div className='fila2_recurso_text_arrow'>



                    </div>
                </div>


            </div>
        </div>
    )
}
export default Detallevideo