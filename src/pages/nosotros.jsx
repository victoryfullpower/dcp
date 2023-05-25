import '../css/nosotros.scss'
import {useNavigate} from 'react-router-dom';

const Nosotros = () => {
    const navigate = useNavigate();
    const volverHome=()=>{

      navigate(`/`)
     
    }
    return (
        <div className='NoirProRegular'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span onClick={volverHome} className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>Nosotros</span></div>
            <div className="fila_1_nosotros">
                <div className='TituloPaginanosotros NoirProBold'>
                    Creamos experiencias que te permitirán llevar a tus equipos a un siguiente nivel
                </div>
                <div className='texto_fila1_nosotrosv1'><div className='texto_fila1_nosotros'>Filosofía corporativa:</div></div>

                <div className='Cab_fila1_nosotros'>
                    <div className='Cab_fila1_nosotros_mision_img'>
                        <div className='Cab_fila1_nosotros_mision_text'>
                            <div>
                                Misión
                            </div>
                            <div>
                                Somos una empresa que brinda soluciones fuera de la caja para identificar y abordar necesidades específicas en tus equipos.
                            </div>
                        </div>
                        <div className='img_fila1_nosotros1'></div>
                    </div>
                    <div className='Cab_fila1_nosotros_mision_img2'>
                        <div className='img_fila1_nosotros2'></div>
                        <div className='Cab_fila1_nosotros_mision_text2'>
                            <div>
                                Visión
                            </div>
                            <div>
                                Ser reconocidos a nivel nacional como un socio estratégico que analiza, entiende y da propuestas de mejora enfocadas en la solución de los diferentes equipos de trabajo cuidando la esencia de nuestra imagen corporativa que busca también contribuir socialmente con instituciones de niños con habilidades diferentes.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="fila_3_nosotros NoirProRegular">
                <div className='cab_fila3_nosotros_Texto_img'>
                    <div className='fila3_nosotros_textcuadro'><div className='cuadros_fila3_nosotros_text NoirProBold'>Valores que nos definen:</div></div>

                </div>
                <div className='cuadros_fila3_nosotros'>

                    <div className='cuadros_fila3_nosotros_1'>
                        <div className='circle_img_text'>
                            <div className='nosotros_fila3_circle_1'></div>
                            <div className='cuadros_titulo_fila3_1 NoirProBold'>Honestidad</div>
                            <div className='cuadros_titulo_fila3_1_1 NoirProRegular'>Mantenemos la coherencia entre lo que decimos y hacemos, nuestra palabra la validamos con resultados.</div>
                        </div>

                    </div>
                    <div className='cuadros_fila3_nosotros_2'>

                        <div className='circle_img_text'>
                            <div className='nosotros_fila3_circle_2'></div>
                            <div className='cuadros_titulo_fila3_2 NoirProBold'>Confianza</div>
                            <div className='cuadros_titulo_fila3_1_2 NoirProRegular'>Generamos espacios en donde prime la co creación estratégica para diseñar soluciones precisas.</div>
                        </div>


                    </div>
                    <div className='cuadros_fila3_nosotros_3'>

                        <div className='circle_img_text'>
                            <div className='nosotros_fila3_circle_3'></div>
                            <div className='cuadros_titulo_fila3_3 NoirProBold'>Excelencia</div>
                            <div className='cuadros_titulo_fila3_1_3 NoirProRegular'>Estamos comprometidos contigo y con tu causa, por lo que nuestras acciones son de impacto positivo para tu negocio.</div>
                        </div>
                    </div>
                    <div className='cuadros_fila3_nosotros_4'>
                        <div className='circle_img_text'>
                            <div className='nosotros_fila3_circle_4'></div>
                            <div className='cuadros_titulo_fila3_4 NoirProBold'>Colaboración</div>
                            <div className='cuadros_titulo_fila3_1_4 NoirProRegular'>Desarrollamos conexiones significativas porque queremos hacer de este mundo un lugar mejor junto a  nuestros clientes apoyando a la sociedad.</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="fila_4_nosotros NoirProRegular">
                <div className='fila4_titulo NoirProBold'>
                    Nuestros Asociados Especialistas
                </div>
                <div className='nosotros_fila4_listaCuadro'>
                    <div className='nosotros_fila4_lista1'>
                        <div className='nosotros_fila4_cuadro1'>
                            <div className='nosotros_fila4_cuadro1_cover_recuadro2_1'><div className='nosotros_fila4_cuadro1_recuadro1'></div></div>
                            <div className='nosotros_fila4_main_cuadro_1'>
                                <div className='nosotros_fila4_circle_1'></div>
                                <div className='nosotros_fila4_text'>
                                    <p>
                                        “Reuní a las personas adecuadas en un mismo equipo para solucionar y equilibrar diferentes situaciones laborales mientras nos divertimos en el camino“
                                    </p>
                                    <p>
                                        <div>Vicky Carruitero</div>
                                        <div>Gerente General</div>
                                    </p>
                                </div>
                            </div>
                            <div className='nosotros_fila4_cuadro1_cover_recuadro2_2'><div className='nosotros_fila4_cuadro1_recuadro2'></div></div>
                        </div>

                        <div className='nosotros_fila4_cuadro2'>
                            <div className='nosotros_fila4_cuadro2_cover_recuadro2_1'><div className='nosotros_fila4_cuadro2_recuadro1'></div></div>
                            <div className='nosotros_fila4_main_cuadro_2'>
                                <div className='nosotros_fila4_circle_2'></div>
                                <div className='nosotros_fila4_text'>
                                    <p>
                                        <div>Ricardo Rospigliosi</div>
                                        <div className='nosotros_fila4_cuadro2_text'>Especialista en Desarrollo Organizacional</div>
                                    </p>
                                </div>
                            </div>
                            <div className='nosotros_fila4_cuadro2_cover_recuadro2_2'><div className='nosotros_fila4_cuadro2_recuadro2'></div></div>
                        </div>

                        <div className='nosotros_fila4_cuadro3'>
                            <div className='nosotros_fila4_cuadro3_cover_recuadro2_1'><div className='nosotros_fila4_cuadro3_recuadro1'></div></div>
                            <div className='nosotros_fila4_main_cuadro_3'>
                                <div className='nosotros_fila4_circle_3'></div>
                                <div className='nosotros_fila4_text'>
                                    <p>
                                        <div>Fátima Reaño</div>
                                        <div className='nosotros_fila4_cuadro3_text'>Capacitadora de Habilidades Blandas</div>
                                    </p>
                                </div>
                            </div>
                            <div className='nosotros_fila4_cuadro3_cover_recuadro2_2'><div className='nosotros_fila4_cuadro3_recuadro2'></div></div>
                        </div>
                    </div>
                    <div className='nosotros_fila4_lista2'>
                        <div className='nosotros_fila4_cuadro4'>

                            <div className='nosotros_fila4_cuadro4_cover_recuadro2_1'><div className='nosotros_fila4_cuadro4_recuadro1'></div></div>
                            <div className='nosotros_fila4_main_cuadro_3'>
                                <div className='nosotros_fila4_circle_4'></div>
                                <div className='nosotros_fila4_text'>
                                    <p>
                                        <div>Lucero Carruitero</div>
                                        <div className='nosotros_fila4_cuadro4_text'>Consultor de Selección de Personal</div>
                                    </p>
                                </div>
                            </div>
                            <div className='nosotros_fila4_cuadro4_cover_recuadro2_2'><div className='nosotros_fila4_cuadro4_recuadro2'></div></div>

                        </div>
                        <div className='nosotros_fila4_cuadro5'>

                            <div className='nosotros_fila4_cuadro5_cover_recuadro2_1'><div className='nosotros_fila4_cuadro5_recuadro1'></div></div>
                            <div className='nosotros_fila4_main_cuadro_3'>
                                <div className='nosotros_fila4_circle_5'></div>
                                <div className='nosotros_fila4_text'>
                                    <p>
                                        <div>Sofía Gutiérrez</div>
                                        <div className='nosotros_fila4_cuadro5_text'>Consultor de Selección de Personal</div>
                                    </p>
                                </div>
                            </div>
                            <div className='nosotros_fila4_cuadro5_cover_recuadro2_2'><div className='nosotros_fila4_cuadro5_recuadro2'></div></div>

                        </div>
                        <div className='nosotros_fila4_cuadro6'>

                            <div className='nosotros_fila4_cuadro6_cover_recuadro2_1'><div className='nosotros_fila4_cuadro6_recuadro1'></div></div>
                            <div className='nosotros_fila4_main_cuadro_3'>
                                <div className='nosotros_fila4_circle_6'></div>
                                <div className='nosotros_fila4_text'>
                                    <p>
                                        <div>Luis Weston</div>
                                        <div className='nosotros_fila4_cuadro6_text'>Entrevistador Bilingüe</div>
                                    </p>
                                </div>
                            </div>
                            <div className='nosotros_fila4_cuadro6_cover_recuadro2_2'><div className='nosotros_fila4_cuadro6_recuadro2'></div></div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="fila_5_nosotros NoirProBold">
                <div className='nosotros_fila5_titulo NoirProBold'>
                         Nuestro propósito
                </div>
                <div className='nosotros_fila5_text NoirProRegular'>
                    
                    <div>
                            <div className='nosotros_fila5_text_1'>
                                DPC nace bajo la idea que los negocios deben ser rentables a través de soluciones efectivas para mejorar nuestro entorno corporativo y social ayudando a personas con  habilidades diferentes tales como síndrome de Down, autismo, entre otras.
                            </div> 
                            <div style={{display:"flex",justifyContent: "space-between"}}>
                            <div className='nosotros_fila5_img1'></div>
                            <div className='nosotros_fila5_img2'></div>
                            </div>
                            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Nosotros