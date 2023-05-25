import '../css/metodologia.scss'
import {useNavigate} from 'react-router-dom';

const Metodologia = () => {
    const navigate = useNavigate();
    const volverHome=()=>{

      navigate(`/`)
     
    }
    return (
        <div>
            <div className="main1">
                <div style={{ marginTop: '20px', marginLeft: '20px' }}><span onClick={volverHome} className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>Metodología de Acción</span></div>

                <div className='container row1'>
                    <div className='Soluciones NoirProBold'>
                        SOLUCIONES DIFERENTES PARA MEJORES RESULTADOS
                    </div>
                </div>

                <div className='container row2'>
                    <div className='mostramos NoirProBold'>
                        Te mostramos nuestra metodología
                    </div>
                </div>

                <div className='container row3'>
                    <div className='listadoCuadros_metodologia'>
                        <div className='cuadro1'>
                            <div className='titulo_metodologia'>Nos ponemos al día</div><div className='cuerpo_metodologia'>Escuchamos tus necesidades para brindarte un servicio personalizado.</div>
                        </div>
                        <div className='cuadro2'>
                            <div className='titulo_metodologia2y3'>Atamos cabos</div><div className='cuerpo_metodologia'>Juntos definiremos objetivos para establecer un plan de acción a tu  medida.</div>
                        </div>
                        <div className='cuadro3'>
                            <div className='titulo_metodologia2y3'>Nos ponemos en marcha</div><div className='cuerpo_metodologia'>Desplegaremos soluciones personalizadas para ti y tu equipo. Además te mantendremos informado en todo el proceso. </div>
                        </div>
                        <div className='cuadro4'>
                            <div className='titulo_metodologia'>Mostramos resultados obtenidos</div><div className='cuerpo_metodologia'>Procesamos la información y te brindamos un informe integral con propuesta de mejora y plan de acción.</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='covermain2'>
                <div className="main2">
                    <div className='container contentDescrpRow4'>

                        <div className='elección NoirProBold'>
                            ¿Por qué DPC es mi mejor elección?
                        </div>
                        <div className='Buscamos NoirProBold'>Buscamos cambios que generen
                            oportunidad de crecimiento
                        </div>
                        <div className='listadoCajasMetodologia NoirProRegular'>
                            <div className='caja1Metodologia'>
                                <div>Avanzaremos juntos de inicio a fin.</div>
                            </div>
                            <div className='caja2Metodologia'>
                                <div>Co crearemos soluciones a la medida de tus necesidades.</div>
                            </div>
                            <div className='caja3Metodologia'>
                                <div>Te brindaremos una experiencia ad hoc.</div>
                            </div>
                            <div className='caja4Metodologia'>
                                <div>Transmitiremos tu marca empleadora en el proceso.</div>
                            </div>
                            <div className='caja5Metodologia'>
                                <div>Fortaleceremos el engagement en tu empresa.</div>
                            </div>
                            <div className='caja6Metodologia'>
                                <div>Garantizaremos la sostenibilidad del aprendizaje.</div>
                            </div>
                        </div>

                    </div>
                   
                </div>
                <div className='coverAsociados'>
                    <div className='Asociados NoirProBold'>
                           <div style={{maxWidth:"674px"}}>Asociados que confirman nuestra excelencia</div> 
                    </div>
                </div>
                
                    
                    <div className='listadoLogos'>
                        <div className='organizacionalez NoirProSemiBold'>
                            +5 AÑOS ACOMPAÑÁNDOLOS EN LOGRAR SUS OBJETIVOS ORGANIZACIONALES
                        </div> 
                        <div className='Logo1'>
                            
                        </div>
                        <div className='Logo2'>
                            
                        </div>
                        <div className='Logo3'>
                            
                        </div>
                        <div className='Logo4'>
                            
                        </div>
                        <div className='Logo5'>
                            
                        </div>
                        <div className='Logo6'>
                            
                        </div>
                        <div className='Logo7'>
                            
                        </div> 
                        <div className='Logo8'>
                            
                        </div> 
                    </div>
                </div>
                
            
        </div>



    )
}
export default Metodologia