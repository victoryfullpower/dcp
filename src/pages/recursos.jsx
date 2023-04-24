import '../css/recursos.scss'
import * as AWS from 'aws-sdk';
import React, { useState, useEffect } from 'react';
import Cardvideo from '../components/cardvideo';
import Cardlectura from '../components/cardlectura';
import {useNavigate} from 'react-router-dom';
AWS.config.update({
    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
    accessKeyId: 'AKIA3567SCNVP3RN2AWM'
});

const Recursos = () => {
    const [lectura, setlectura] = useState([]);
    const [video, setvideo] = useState([]);
    var dynamodb = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    const onReadLectura = () => {
        let that = this;
        let params = {
            TableName: "lecturaTable"
        };


        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
               
                setlectura(data.Items)
            }
        });
    };
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
        onReadLectura();
        onReadVideos()
       /*  onReadLectura(); */
    }, []);
    const handleclick=(url)=>{
          
            navigate(`/${url}`)
      }
      
      const clicklectura =dato=>{
        sessionStorage.setItem("lectura",JSON.stringify(dato));
        navigate(`/Detallerecurso`)
       
      }
      const clickvideo =dato=>{
        sessionStorage.setItem("video",JSON.stringify(dato));
        navigate(`/Detallevideo`)
       
      }
      const navigate = useNavigate();
  
        const volverHome=()=>{
        
          navigate(`/`)
         
        }
    return (

        <div className='NoirProRegular'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span onClick={volverHome} className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>Recursos</span></div>
            <div className="fila_1_recurso">
                <div className='fila1_recurso_titulo NoirProBold'>
                    Encuentra información relevante que impulse tus acciones
                </div>
                <div className='fila1_recurso_text1'><div style={{ marginLeft: "30px" }}>LECTURAS</div></div>

                <div className='fila1_recurso_lista_videos'>
                 
                {
                    lectura.map((dato,i)=>
                    i < 4 ? (
                        <Cardlectura
                            key={dato.Codigo}
                            Codigo = {dato.Codigo}
                            Articulo = {dato.Articulo}
                            Autor = {dato.Autor}
                            Descripcion = {dato.Descripcion}
                            Fecha = {dato.Fecha}
                            imagen = {dato.imagen}
                            titulo = {dato.titulo}
                            item = {dato}
                            clicklectura={clicklectura}
                        />):''
                    )
                }
                </div>
            </div>

            <div className="fila_2_recurso">

                <div className='fila2_recurso_text1'>
                    <div style={{ marginLeft: "60px" }}>VIDEOS</div>
                    <div onClick={()=>handleclick('Recursolectura')}  className='fila2_recuerso_encuentraMas'>Encuentra más lecturas {"->"}</div>
                </div>

               

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
                <div className='fila2_recurso_text_arrow_center'>
                    <div className='fila2_recurso_text_arrow'>
                        <div onClick={()=>handleclick('Recursovideo')} style={{ marginRight: "10px" }}>
                            Encuentra más videos
                        </div>
                        <div className='fila2_recurso_arrow_cover'><div className='fila2_recurso_arrow'></div></div>


                    </div>
                </div>


            </div>
        </div>
    )
}
export default Recursos