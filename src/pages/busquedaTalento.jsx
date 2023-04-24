import '../css/busquedaTalento.scss'
import imgEstrechaManos from '../assets/estrecharManos.png'
import imgOperaria from '../assets/chicaPerfil.png'
import chicoPerfil from '../assets/chicoPerfil.png'
import chicapc from '../assets/chica_pc.svg'
import cohete_talento from '../assets/cohete_talento.svg'
const BusquedaTalento = () => {
    return (
        <div className='container'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>Búsqueda de talentos</span></div>

            <div className="fila_1">

                <div className="Bloque_Cabecera_busqueda" >
                    <div className='tituloSubtitulo'>
                        <div className='TituloPagina NoirProBold'>
                            BÚSQUEDA DE TALENTOS
                        </div>
                        <div className='SubTituloPagina NoirProRegular'>
                            Encuentra tu próximo asociado eficaz y resolutivo que haga <span className='clickSubtitulo'>click</span> con tu cultura organizacional.
                        </div>
                    </div>
                    <div className="imagenTitulo">

                    </div>
                </div>

                <div className="Bloque_garantizamos" >
                    <div className='garantizamos'>
                        <div className='SubTituloGarantizamos NoirProRegular'>
                            Te garantizamos
                        </div>
                        <div className="imagen_Garantizamos">

                        </div>
                    </div>
                    <div className="Cuadros_Garantizamos NoirProRegular">
                        <div className='cuadroGarantizamos_1'><div>Confidencialidad.</div></div>
                        <div className='cuadroGarantizamos_2'><div>Levantamiento exacto del perfil.</div></div>
                        <div className='cuadroGarantizamos_3'><div>Cierre exitoso con el candidato elegido.</div></div>
                    </div>
                </div>

                <div className="Bloque_AsociadoEstrella" >
                    <div className='AsociadoEstrella'>
                        <div className='SubTituloAsociadoEstrella NoirProRegular'>
                            Te garantizamos
                        </div>
                        <div className="imagen_AsociadoEstrella">

                        </div>
                    </div>
                    <div className="Cuadros_AsociadoEstrella NoirProRegular">
                        <div className='cuadroAsociadoEstrella_1'><div>Evaluaciones Psicotécnicas.</div></div>
                        <div className='cuadroAsociadoEstrella_2'><div>Entrevista por competencias SMART.</div></div>
                        <div className='cuadroAsociadoEstrella_3'><div>Assessment center.</div></div>
                    </div>
                </div>



            </div>
            <div className="fila_2">
                <div className='BloquePerfiles'>

                    <div className='tituloPerfiles'>
                        <div>Dentro de las diferentes industrias hemos reclutado los siguientes perfiles:</div>
                    </div>

                    <img src={imgEstrechaManos} className="imgEstrechaManos" />

                </div>
                <div className='cuadrosPerfiles NoirProRegular'>
                    <div className='cuadrosPerfile_1'><div>Administrativos</div></div>
                    <div className='cuadrosPerfile_2'><div>Técnicos</div></div>
                    <div className='cuadrosPerfile_3'><div>Gerencias</div></div>

                    <div className='cuadrosPerfile_5'><div>Jefaturas</div></div>



                    <div className='cuadrosPerfile_7_8'>


                        <img src={chicoPerfil} className="cuadrosPerfile_8" />
                        <div className='cuadrosPerfile_7'><div>Gestores / Coordinadores</div></div>

                    </div>
                </div>
                <div className='cuadrosPerfile_4_6'>
                    <div className='cover_d-flex'>
                        <div ><img src={imgOperaria} className="cuadrosPerfile_4 NoirProRegular" /></div>
                        <div className='cuadrosPerfile_6'><div>Operarios</div></div>
                    </div>
                </div>
            </div>
            <div className="fila3_busquedaTalento NoirProRegular">
                <div className='fila3_buscatalento_titulo'>
                    <div style={{ color: "#00CFB4" }}>Descubre los motivos para que</div><div style={{ color: "#000" }}><span style={{ color: "#00CFB4" }}>conversemos</span> sobre este servicio</div>
                </div>
                <div className='cuadros_fila2_busquedaTalento'>

                    <div className='cuadros_fila2_busquedaTalento_1'>


                        <div className='cuadro_fila2_busquedaTalento_imgsTextos_1'>
                            <div className='cuadros_fila2_busquedaTalento_img1'></div>
                            <div className='cuadros_fila2_busquedaTalento_img2'></div>
                        </div>

                    </div>
                    <div className='cuadros_fila2_busquedaTalento_2'>
                        <div className='cuadro_fila2_imgsTextos_2'>
                            <div className='cuadros_fila2_busquedaTalento_img3'></div>
                        </div>
                    </div>

                    <div className='cuadros_fila2_busquedaTalento_3'>
                        <div className='cuadro_fila2_imgsTextos_2'>
                            <div className='cuadros_fila2_busquedaTalento_img3'></div>
                        </div>
                    </div>
                    <div className='cuadros_fila2_busquedaTalento_4'>
                        <div className='cuadro_fila2_imgsTextos_2'>
                            <div className='cuadros_fila2_busquedaTalento_img3'></div>
                        </div>
                    </div>
                    <div>
                    
                        <img src={cohete_talento} className="cohete_talento" />
                        <div className='cuadros_fila2_busquedaTalento_5'>

                            <div className='cuadro_fila2_imgsTextos_2'>
                                <div className='cuadros_fila2_busquedaTalento_img3'></div>
                            </div>

                        </div>
                        <img src={chicapc} className="imgchicaPc" />
                    </div>

                    {/* <div>
                        <div className='cuadros_fila2_busquedaTalento_img5'></div>
                        <div className='cuadros_fila2_busquedaTalento_3'>
                            <div style={{ width: "100%" }}>COLABORADORES</div>

                            <div className='cuadros_fila2_busquedaTalento_img4'></div>

                        </div>
                    </div> */}





                </div>
            </div>

        </div>
    )
}
export default BusquedaTalento