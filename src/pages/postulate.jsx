import '../css/postulate.scss'
import React, { useState, useEffect } from 'react';
import Cardpostulante from '../components/cardpostulante.jsx';
import Button from 'react-bootstrap/Button';
import * as AWS from 'aws-sdk';
import Correopostulante from '../components/correopostulante.jsx';
AWS.config.update({




    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
    accessKeyId: 'AKIA3567SCNVP3RN2AWM'
});




const Postulate = () => {
    var dato = [];
    var dynamodb = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    const [datox, setdatox] = useState([]);
    const onRead = () => {


        let that = this;
        let params = {
            TableName: "Postulate_Table"
        };


        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data)


                dato = data.Items
                console.log(dato);
                console.log("lengh", dato.length)
                setdatox(data.Items)
                console.log("datox", datox.length)
            }
        });
    };


    const [detalle, setdetalle] = useState([]);
    const [showcorreo, setshowcorreo] = useState(false);
    const [posiciondetalle, setposiciondetalle] = useState('');
    const [showalltotal, setshowalltotal] = useState(false);
    const showall = () => {
        setshowalltotal(true)
    }
    const clickFormCorreo = (skills, Posicion) => {
        console.log("testing", skills)
        setshowcorreo(true)
        setdetalle(skills)
        setposiciondetalle(Posicion)
    }
    useEffect(() => {
        onRead();
    }, []);
    const volverPostulate = () => {
        setshowcorreo(false)
    }
    return (
        <div className='NoirProRegular'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span className='home_medologia NoirProRegular'>{"<-"} Home | </span><span onClick={volverPostulate} className={showcorreo ? ('miga_metodologia NoirProRegular') : 'miga_metodologia NoirProBold'}>Postúlate</span>{showcorreo ? (<span className='miga_metodologia NoirProRegular'> |</span>) : ''}{showcorreo ? (<span className={showcorreo ? ('miga_metodologia NoirProBold') : ''}> Aplicacion</span>) : ''}</div>




            {showcorreo == false ? (
                <div className="fila_1_postulate">
                    <div className='fila1_postulate_titulo NoirProBold'>
                        Encuentra tu próximo desafío laboral y sigue creciendo profesionalmente
                    </div>


                    <div id='listado' className='fila1_postulate_listadoCuadros'>
                        {
                            showalltotal ? (
                                datox.map((x, i) =>

                                    <Cardpostulante
                                        key={x.CodigoPostulate}
                                        CodigoPostulate={x.CodigoPostulate}
                                        Modalidad={x.Modalidad}
                                        aniosExperiencia={x.aniosExperiencia}
                                        Pais={x.Pais}
                                        Posicion={x.Posicion}
                                        skills={x.skills}
                                        clickFormCorreox={clickFormCorreo}
                                    />)

                            ) :
                                (datox.map((x, i) =>


                                    i < 9 ? (
                                        <Cardpostulante
                                            key={x.CodigoPostulate}
                                            CodigoPostulate={x.CodigoPostulate}
                                            Modalidad={x.Modalidad}
                                            aniosExperiencia={x.aniosExperiencia}
                                            Pais={x.Pais}
                                            Posicion={x.Posicion}
                                            skills={x.skills}
                                            clickFormCorreox={clickFormCorreo}
                                        />) : ''


                                )
                                )
                        }




                    </div>
                    {
                        showalltotal ? (
                            ''
                        ) :
                            (datox.length > 8 ?
                                (
                                    <div className='botonopciones'>
                                        <Button className='boton NoirProRegular' onClick={showall} variant="primary">Más opciones</Button>
                                    </div>
                                ) : '')
                    }

                </div>) : ''}






            {showcorreo ? (<Correopostulante


                skills={detalle}
                postulacion={posiciondetalle}
            />) : ''


            }


            <div className="fila_2_postulate">
                <div className='fila2_postulate_cover_text'>
                    <div className='fila2_postulate_text NoirProBold'>
                        Nuestro objetivo es brindarte una grata  experiencia dentro de nuestro proceso de selección acompañándote de inicio a fin del proceso.
                    </div>
                    <div className='fila2_postulate_listado'>
                        <ul className='fila2_postulate_ul'>
                            <li>Siempre te mantendremos al tanto del estatus del proceso.</li>
                            <li>Te ofrecemos vacantes 100% reales y legales.</li>
                            <li>Contamos con clientes trasnacionales y nacionales.</li>
                            <li>Te brindaremos feedback al término del proceso.</li>
                            <li>Al logro de la contratación a través de nosotros, te asignaremos un Coach para acompañarte en tu proceso de adaptación.</li>
                        </ul>
                    </div>
                </div>


            </div>


            <div className="fila_3_postulate">

                <div className='fila3_postulate_cover_img_text'>
                    <div className='fila3_postulate_titulo NoirProSemiBold'>
                        Te recomendamos contenido de nuestro Blog
                    </div>
                   <div className='container_postulate_img'>
                   <div className='fila3_postulate_img1'></div>
                    <div className='fila3_postulate_text'>
                        <div className='fila3_postulate_text_arrow_center'>
                            <div className='fila3_postulate_text_arrow'>
                                <div style={{ marginRight: "10px" }}>
                                    Artículo: ¿Cómo enamorar a tu reclutador?
                                </div>
                                <div className='fila1_postulate_arrow_cover'><div className='fila1_postulate_arrow'></div></div>

                            </div>
                        </div>
                        <div className='fila3_postulate_text_arrow_center'>
                            <div className='fila3_postulate_text_arrow'>
                                <div style={{ marginRight: "10px" }}>
                                    Video: Tendencias en reclutamiento y selección
                                </div>
                                <div className='fila1_postulate_arrow_cover'><div className='fila1_postulate_arrow'></div></div>
                            </div>
                        </div>
                        <div className='fila3_postulate_text_arrow_center'>
                            <div className='fila3_postulate_text_arrow'>
                                <div style={{ marginRight: "10px" }}>
                                    Podcast: Cambiar de sector : ¿Me arriesgo o no?
                                </div>
                                <div className='fila1_postulate_arrow_cover'><div className='fila1_postulate_arrow'></div></div>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                   </div>

                </div>
                <div className='fila3_postulate_img2_cover'><div className='fila3_postulate_img2'></div></div>

            </div>


        </div>
    )
}
export default Postulate
