import imgbandera from '../assets/banderaclima.png';
import estrechaManos from '../assets/estrecharManos.png';
import '../css/climaOrganizacional.scss'
const ClimaOrganizacional = () => {
    return (
        <div className='container'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>Clima organizacional</span></div>
            <div className="fila_1_Clima">
                <div className='TituloPaginaClima NoirProRegular'>
                    CLIMA ORGANIZACIONAL
                </div>
                <div className="Bloque_Cabecera_Clima" >
                    <div className="cuadros_imagen_clima">
                        <div className="cuadros_Cabecera_Clima NoirProRegular">
                            <div className='textoSomosExpertos'>
                                Somos expertos en levantar información sobre cómo perciben, sienten y opinan las personas que trabajan contigo.
                            </div>
                            <div className='ListadoCuadros_cabecera_clima_1'>
                                <div className='cuadro_cabecera_clima_1'>Nos alineamos a tus necesidades.</div>
                                <div className='cuadro_cabecera_clima_2'>Elaboramos una encuesta ad hoc  para la medición y diagnóstico certeros.</div>
                                <div className='cuadro_cabecera_clima_3'>Te brindamos un plan de acción de mejora a la medida. </div>
                            </div>
                            <div className='textoNuestrosEspecialistas'>
                                De la mano con nuestros especialistas y durante el proceso de ejecución podrás hacer la diferencia ofreciéndole a tus  colaboradores una experiencia ganmificada, permitiendo:
                            </div>
                            <div className='ListadoCuadros_cabecera_clima_2'>
                                <div className='cuadro_cabecera_clima_4'>Difusión de conceptos y campañas.</div>
                                <div className='cuadro_cabecera_clima_5'>Transmitir tu esencia corporativa.</div>
                                <div className='cuadro_cabecera_clima_6'>Participación voluntaria en el estudio de clima.</div>
                            </div>
                        </div>
                        <div>
                            <img src={imgbandera} className="imagenBandera" />
                        </div>
                    </div>




                </div>





            </div>
            <div className="fila_2_Clima">
                <div className='cab_fila2_clima'>
                    <div className='cab_fila2_clima_img1'></div>
                    <div className='cab_fila2_clima_text1 NoirProRegular'>Este servicio es para ti, descubre los puntos que puedes lograr con nosotros:</div>
                </div>
                <div className='cuadros_fila2_clima'>
                    <div className='cab_fila2_clima_1'>

                    </div>
                    <div className='cab_fila2_clima_2_img'>
                        <div className='cab_fila2_clima_2'></div>
                        <div className='cab_fila2_clima_2_img_img'></div>
                    </div>
                    <div className='cab_fila2_clima_3_img'>
                        <div className='cab_fila2_clima_3_img_img'></div>
                        <div className='cab_fila2_clima_3'></div>
                    </div>
                    <div className='cab_fila2_clima_4'>

                    </div>
                </div>
            </div>

            <div className="fila_3_Clima NoirProRegular">
                <div className='cab_fila3_clima'>
                    <div className='cab_fila3_clima_text1'>Descubre porqué somos <span className='span_eleccion'>tu mejor elección:</span></div>
                </div>

                <div className='cuadros_fila3_clima'>
                <img src={estrechaManos} className="cab_fila3_clima_1_img" />
                    <div className='cuadros_fila3_clima_v2'>
                        <div className='cab_fila3_clima_2'>
                        NUESTRO SERVICIO
                        </div>
                        <div className='cab_fila3_clima_3'>
                            NECESIDADES QUE RESOLVEMOS
                        </div>
                        <div className='cab_fila3_clima_4'>
                            LO QUE NOS HACE DIFERENTES
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}
export default ClimaOrganizacional