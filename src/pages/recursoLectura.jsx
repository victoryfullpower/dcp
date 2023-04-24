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

const Recursolectura = () => {
    const [lectura, setlectura] = useState([]);
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

    useEffect(() => {
      
        onReadLectura();
    }, []);
    const handleclick=(url)=>{
         /* navigate(`/${url}`, { replace: false })
        navigate(0) */
        window.open(`/${url}`,"_self");
  }
  const navigate = useNavigate();
  const volverHome=()=>{
  
    navigate(`/`)
   
  }
  const clicklectura =dato=>{
    sessionStorage.setItem("lectura",JSON.stringify(dato));
    navigate(`/Detallerecurso`)
   
  }
    return (

        <div className='NoirProRegular'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span onClick={volverHome} className='home_medologia NoirProRegular'>{"<-"} Home | </span><span onClick={()=>handleclick('Recursos')} className='miga_metodologia NoirProRegular'>Recursos |</span><span className='miga_metodologia NoirProBold'> Lectura</span></div>
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
                    <div style={{ marginLeft: "60px" }}></div>
                    <div className='fila2_recuerso_encuentraMas'></div>
                </div>

               

                <div className='fila1_recurso_lista_videos'>
                {
                    lectura.map((dato,i)=>
                    i > 3 ? (
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
export default Recursolectura