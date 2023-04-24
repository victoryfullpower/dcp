import '../css/recursos.scss'
import * as AWS from 'aws-sdk';
import React, { useState, useEffect } from 'react';
import Cardvideo from '../components/cardvideo.jsx';
import {useNavigate} from 'react-router-dom';

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
    accessKeyId: 'AKIA3567SCNVP3RN2AWM'
});

const Recursovideo = () => {
    const [video, setvideo] = useState([]);

   
    var dynamodb = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    const onReadVideos = () => {
        let that = this;
        let params = {
            TableName: "lecturaVideo"
        };


        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data)
              
             
               
                setvideo(data.Items)
               
            }
        });
    };

    useEffect(() => {
      
        onReadVideos();
    }, []);
    const handleclick=(url)=>{
        window.open(`/${url}`,"_self");
  }
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
  const clickvideo =dato=>{
    sessionStorage.setItem("video",JSON.stringify(dato));
    navigate(`/Detallevideo`)
   
  }
    return (

        <div className='NoirProRegular'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span onClick={volverHome} className='home_medologia NoirProRegular'>{"<-"} Home | </span><span onClick={volverrecurso} className='miga_metodologia NoirProRegular'>Recursos | </span><span onClick={volvervideos} className='miga_metodologia NoirProBold'>Videos </span></div>

            <div className="fila_1_recurso">
                <div className='fila1_recurso_titulo NoirProBold'>
                    Encuentra información relevante que impulse tus acciones
                </div>
                <div className='fila1_recurso_text1'><div style={{ marginLeft: "30px" }}>VIDEOS</div></div>

                <div className='fila1_recurso_lista_videos'>
                 
                     {
                    video.map((dato,i)=>
                    i < 4 ? (
                        <Cardvideo
                        key={dato.Codigo}
                        Codigo = {dato.Codigo}
                        Articulo = {dato.Articulo}
                        Autor = {dato.Autor}
                        Descripcion = {dato.Descripcion}
                        Fecha = {dato.Fecha}
                        imagen = {dato.imagen}
                        titulo = {dato.titulo}
                        video = {dato.video} 
                        item = {dato}
                        clickvideo  = {clickvideo} 
                    />):''
                    )
                }
                </div>
            </div>

            <div className="fila_2_recurso">

                <div className='fila2_recurso_text1'>
                    <div style={{ marginLeft: "60px" }}></div>
                    <div className='fila2_recuerso_encuentraMas'></div>
                </div>

               

                <div className='fila1_recurso_lista_videos'>
                {
                    video.map((dato,i)=>
                    i > 3 ? (
                        <Cardvideo
                        key={dato.Codigo}
                        Codigo = {dato.Codigo}
                        Articulo = {dato.Articulo}
                        Autor = {dato.Autor}
                        Descripcion = {dato.Descripcion}
                        Fecha = {dato.Fecha}
                        imagen = {dato.imagen}
                        titulo = {dato.titulo}
                        video = {dato.video} 
                        item = {dato}
                        clickvideo  = {clickvideo} 
                    />):''
                    )
                }
                   
                </div> 
                <div className='fila2_recurso_text_arrow_center'>
                    <div className='fila2_recurso_text_arrow'>
                        <div style={{ marginRight: "10px" }}>
                        
                        </div>
                        <div className='fila2_recurso_arrow_cover'></div>


                    </div>
                </div>


            </div>
        </div>
    )
}
export default Recursovideo