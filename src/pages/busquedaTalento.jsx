import '../css/busquedaTalento.scss'
import imgEstrechaManos from '../assets/estrecharManos.png'
import imgOperaria from '../assets/chicaPerfil.png'
import chicoPerfil from '../assets/chicoPerfil.png'
import chicapc from '../assets/chica_pc.svg'
import cohete_talento from '../assets/cohete_talento.svg'

const BusquedaTalento = () => {
    const mouseenter = ()=>{
        document.getElementById('talento_img1').style.backgroundImage = "url(/src/assets/t1.png)";
        document.getElementById('talento_texto1').style.opacity = "1"
        document.getElementById('talento_texto1').style.transition = "opacity .5s"
        document.getElementById('talento_img1').style.backgroundSize = "cover"
    }
    const mouseleave = ()=>{
        document.getElementById('talento_img1').style.backgroundImage = "url(/src/assets/fondoVerde_1.png)";
        document.getElementById('talento_texto1').style.opacity = "0"
        document.getElementById('talento_img1').style.backgroundSize = "150px 250px"
        
    }
    /* 1 */
    const mouseenter2 = ()=>{
        document.getElementById('talento_img2').style.backgroundImage = "url(/src/assets/t2.png)";
        document.getElementById('talento_texto2').style.opacity = "1"
        document.getElementById('talento_texto2').style.transition = "opacity .5s"
        document.getElementById('talento_img2').style.backgroundSize = "cover"
    }
    const mouseleave2= ()=>{
        document.getElementById('talento_img2').style.backgroundImage = "url(/src/assets/fondoVerde_2.png)";
        document.getElementById('talento_texto2').style.opacity = "0"
        document.getElementById('talento_img2').style.backgroundSize = "200px 280px"
    }
     /* 2 */
    const mouseenter3 = ()=>{
        document.getElementById('talento_img3').style.backgroundImage = "url(/src/assets/t3.png)";
        document.getElementById('talento_texto3').style.opacity = "1"
        document.getElementById('talento_texto3').style.transition = "opacity .5s"
        document.getElementById('talento_img3').style.backgroundSize = "cover"
    }
    const mouseleave3 = ()=>{
        document.getElementById('talento_img3').style.backgroundImage = "url(/src/assets/fondoVerde_3.png)";
        document.getElementById('talento_texto3').style.opacity = "0"
        document.getElementById('talento_img3').style.backgroundSize = "200px 280px"
    }
    /* 3 */
    const mouseenter4 = ()=>{
        document.getElementById('talento_img4').style.backgroundImage = "url(/src/assets/t4.png)";
        document.getElementById('talento_texto4').style.opacity = "1"
        document.getElementById('talento_texto4').style.transition = "opacity .5s"
        document.getElementById('talento_img4').style.backgroundSize = "cover"

    }
    const mouseleave4 = ()=>{
        document.getElementById('talento_img4').style.backgroundImage = "url(/src/assets/fondoVerde_4.png)";
        document.getElementById('talento_texto4').style.opacity = "0"
        document.getElementById('talento_img4').style.backgroundSize = "200px 280px"
    }
    /* 4 */
    const mouseenter5 = ()=>{
        document.getElementById('talento_img5').style.backgroundImage = "url(/src/assets/t5.png)";
        document.getElementById('talento_texto5').style.opacity = "1"
        document.getElementById('talento_texto5').style.transition = "opacity .5s"
        document.getElementById('talento_img5').style.backgroundSize = "cover"
    }
    const mouseleave5 = ()=>{
        document.getElementById('talento_img5').style.backgroundImage = "url(/src/assets/fondoVerde_5.png)";
        document.getElementById('talento_texto5').style.opacity = "0"
        document.getElementById('talento_img5').style.backgroundSize = "200px 280px"
    }
    /* 5 */
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
                <div className='SubTituloAsociadoEstrella NoirProRegular' style={{width: "100%"}}>
                        ¿Cómo evaluamos a tu Asociado estrella?
                        </div>
                    <div className='AsociadoEstrella' style={{position:"relative"}}>
                        
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

                    <div className='tituloPerfiles NoirProRegular'>
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
                        <div >
                        <div className='cuadrosPerfile_6'><div>Operarios</div></div>
                        <img src={imgOperaria} className="cuadrosPerfile_4 NoirProRegular" />
                       
                        </div>
                       
                    </div>
                   
                </div>
               
            </div>
            <div className="fila3_busquedaTalento NoirProRegular">
                <div className='fila3_buscatalento_titulo NoirProSemiBold' style={{fontSize:"28px"}}>
                    <div style={{ color: "#00CFB4" }}>Descubre los motivos para que</div><div style={{ color: "#000" }}><span style={{ color: "#00CFB4" }}>conversemos</span> sobre este servicio</div>
                </div>
                <div className='cuadros_fila2_busquedaTalento'>

                    <div id="talento_img1" onMouseEnter={mouseenter} onMouseLeave={mouseleave} className='cuadros_fila2_busquedaTalento_1'>
                    <div className='talento_texto1' id="talento_texto1">Transmitimos tu cultura corporativa  desde el primer contacto.</div>
                        <div  className='cuadro_fila2_busquedaTalento_imgsTextos_1'>
                            <div className='cuadros_fila2_busquedaTalento_img1'></div>
                            <div className='cuadros_fila2_busquedaTalento_img2'></div>
                        </div>

                    </div>
                    <div id="talento_img2" onMouseEnter={mouseenter2} onMouseLeave={mouseleave2} className='cuadros_fila2_busquedaTalento_2'>
        <div className='talento_texto1' id="talento_texto2">Utilizamos gamificación para que el candidato revele su comportamiento más natural.</div>
                        <div className='cuadro_fila2_imgsTextos_2'>
                            <div className='cuadros_fila2_busquedaTalento_img3'></div>
                        </div>
                    </div>

                    <div id="talento_img3" onMouseEnter={mouseenter3} onMouseLeave={mouseleave3} className='cuadros_fila2_busquedaTalento_3'>
                    <div className='talento_texto1' id="talento_texto3">Contamos con herramientas objetivas para  cada etapa.
</div>

                        <div className='cuadro_fila2_imgsTextos_2'>
                            <div className='cuadros_fila2_busquedaTalento_img3'></div>
                        </div>
                    </div>
                    <div id="talento_img4" onMouseEnter={mouseenter4} onMouseLeave={mouseleave4} className='cuadros_fila2_busquedaTalento_4'>
                    <div className='talento_texto1' id="talento_texto4">Proceso digitalizado para fácil seguimiento.</div>

                        <div className='cuadro_fila2_imgsTextos_2'>
                            <div className='cuadros_fila2_busquedaTalento_img3'></div>
                        </div>
                    </div>
                    <div>
                    
                        <img src={cohete_talento} className="cohete_talento" />
                        <div id="talento_img5" onMouseEnter={mouseenter5} onMouseLeave={mouseleave5} className='cuadros_fila2_busquedaTalento_5'>
                        <div className='talento_texto1' id="talento_texto5">Asignación de un coach para tu nuevo colaborador. 
</div>

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