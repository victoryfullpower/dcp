import '../css/potencialHumano.scss'
const PotencialHumano = () => {
    const mouseenter = () => {
        document.getElementById('idcab_fila2_potencial_d1').style.backgroundImage = "url(/src/assets/p1.png)";

        document.getElementById('potencial_textod11').style.opacity = "0"
        document.getElementById('potencial_textod1').style.opacity = "1"
        document.getElementById('potencial_textod1').style.transition = "opacity .5s"
        document.getElementById('potencial_textod1').style.fontSize = "18px"
        document.getElementById('idcab_fila2_potencial_d1').style.backgroundSize = "cover"
    }
    const mouseleave = () => {
        document.getElementById('idcab_fila2_potencial_d1').style.backgroundImage = "";
        document.getElementById('potencial_textod1').style.opacity = "0"
        document.getElementById('potencial_textod11').style.opacity = "1"
        document.getElementById('potencial_textod11').style.transition = "opacity .5s"
        document.getElementById('idcab_fila2_potencial_d1').style.backgroundSize = "120px 250px"
    }
    /* v1 */

    const mouseenter2 = () => {
        document.getElementById('idcab_fila2_potencial_d2').style.backgroundImage = "url(/src/assets/p2.png)";

        document.getElementById('potencial_textod22').style.opacity = "0"
        document.getElementById('potencial_textod2').style.opacity = "1"
        document.getElementById('potencial_textod2').style.transition = "opacity .5s"
        document.getElementById('potencial_textod2').style.fontSize = "18px"
        document.getElementById('idcab_fila2_potencial_d2').style.backgroundSize = "cover"
    }
    const mouseleave2 = () => {
        document.getElementById('idcab_fila2_potencial_d2').style.backgroundImage = "";
        document.getElementById('potencial_textod2').style.opacity = "0"
        document.getElementById('potencial_textod22').style.opacity = "1"
        document.getElementById('potencial_textod22').style.transition = "opacity .5s"
        document.getElementById('idcab_fila2_potencial_d2').style.backgroundSize = "150px 250px"
    }
    /* v2*/

    const mouseenter3 = () => {
        document.getElementById('idcab_fila2_potencial_d3').style.backgroundImage = "url(/src/assets/p3.png)";

        document.getElementById('potencial_textod33').style.opacity = "0"
        document.getElementById('potencial_textod3').style.opacity = "1"
        document.getElementById('potencial_textod3').style.transition = "opacity .5s"
        document.getElementById('potencial_textod3').style.fontSize = "18px"
        document.getElementById('idcab_fila2_potencial_d3').style.backgroundSize = "cover"
    }
    const mouseleave3 = () => {
        document.getElementById('idcab_fila2_potencial_d3').style.backgroundImage = "";
        document.getElementById('potencial_textod3').style.opacity = "0"
        document.getElementById('potencial_textod33').style.opacity = "1"
        document.getElementById('potencial_textod33').style.transition = "opacity .5s"
        document.getElementById('idcab_fila2_potencial_d3').style.backgroundSize = "150px 250px"
    }
    /* v3*/
    return (
        <div className='NoirProRegular'>

            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>Desarrollo del potencial humano</span></div>
            <div className="fila_1_PotencialH">
                <div className='TituloPaginaPotencialH NoirProBold'>
                    DESARROLLO DE POTENCIAL HUMANO
                </div>


                <div className='Cab_fila1_PotencialH'>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}><div className='img_fila1_PotencialH1'></div></div>
                    <div className='texto_fila1_PotencialHv1'>
                        <p>
                            En un mundo cada vez más digitalizado y tecnológico las <span style={{ color: "#00CFB4" }}>soft skills</span> cobran mayor relevancia porque <span style={{ color: "#00CFB4" }}>impactan en tu empresa</span> y en sus diversas áreas desde los perfiles más operativos hasta los más autónomos.
                        </p>
                        <p>
                            Las soft skills <span style={{ color: "#00CFB4" }}>son el corazón que bombea dentro del core</span> de tu
                            negocio para mantenerlo vivo, si hoy nos estás leyendo, es porque te
                            diste cuenta que <span style={{ color: "#00CFB4" }}>para que todo mejore</span> en los procesos que realizas
                            es necesario que las sigas <span style={{ color: "#00CFB4" }}>potenciando en tus equipos.</span>
                        </p>
                        <div className='cuadro_fila1_1'>Diseñar y ejecutar experiencias de aprendizaje orientadas al desarrollo.</div>
                        <div className='cuadro_fila1_2'>Potencializar las habilidades blandas dirigidas a gerentes, mandos medios y colaboradores.</div>
                    </div>
                    <div className='img_fila1_PotencialH2_cover'><div className='img_fila1_PotencialH2'></div></div>
                </div>
            </div>
            <div className="fila_3_PotencialH NoirProRegular">
                <div className='cab_fila3_PotencialH_Texto_img'>
                    <div className='fila3_PotencialH_textcuadro NoirProBold'>
                        <div><span style={{ color: "#fff" }}>Para la ejecución de</span> programas y talleres <span style={{ color: "#fff" }}>utilizaremos:</span></div></div>
                </div>
                <div className='cuadros_fila3_PotencialH'>
                    <div className='cuadros_fila3_PotencialH_img2'></div>
                    <div className='cuadros_fila3_PotencialH_1' id='idcab_fila2_potencial_d1' onMouseEnter={mouseenter} onMouseLeave={mouseleave} >
                        <div className='clima_opacity' id="potencial_textod1">
                            <ul style={{ textAlign: "left", color: "#fff" }}>
                                <li>Liderazgo con valores</li>
                                <li>Liderazgo transformador</li>
                                <li>Gestión de personas</li>
                                <li>Nivel de ingresos</li>
                                <li>Gestión del cambio Comunicación</li>
                            </ul>
                        </div>
                        <div id="potencial_textod11" style={{margin:"20px"}}>
                            Metodología andragógica
                        </div>

                    </div>
                    <div className='cuadros_fila3_PotencialH_2' id='idcab_fila2_potencial_d2' onMouseEnter={mouseenter2} onMouseLeave={mouseleave2}>
                        <div className='clima_opacity' id="potencial_textod2">
                            <ul style={{ textAlign: "left", color: "#fff" }}>
                                <li>Supervisión de equipos</li>
                                <li>Comunicación</li>
                                <li>Planificación</li>
                                <li>Organización</li>
                                <li>Trabajo en equipo</li>
                                <li>Toma de decisiones</li>
                                <li>Inteligencia emocional</li>
                                <li>Manejo de estrés</li>

                            </ul>
                        </div>

                        <div id="potencial_textod22">
                            Gamificación
                        </div>

                    </div>
                    <div className='cuadros_fila3_PotencialH_3' id='idcab_fila2_potencial_d3' onMouseEnter={mouseenter3} onMouseLeave={mouseleave3}>
                        <div className='clima_opacity' id="potencial_textod3">
                            <ul style={{ textAlign: "left", color: "#fff" }}>
                                <li>Trabajo en equipo</li>
                                <li>Administración del tiempo</li>
                                <li>Calidad de servicio</li>
                                <li>Comunicación</li>
                                <li>Inteligencia emocional</li>
                                <li>Manejo de estrés</li>

                            </ul>
                        </div>
                        <div id="potencial_textod33">
                            Herramientas de Design Thinking
                        </div>

                    </div>

                </div>
            </div>
            <div className="fila_2_PotencialH">
                <div className='NoirProBold' style={{fontSize:"25px", marginLeft:"60px", lineHeight:"30px"}}>Descubre cuáles son las habilidades blandas que dominamos: </div>
                <div className='NoirProBold' style={{fontSize:"25px", marginLeft:"60px",lineHeight:"30px"}}>que dominamos: </div>

                <div className='cuadros_fila2_PotencialH'>

                <div className='cuadros_fila2_PotencialH_2'>
                        <div>GERENTES</div>

                        <div className='cuadros_fila2_PotencialH_img3'></div>

                    </div>




                    <div className='cuadros_fila2_PotencialH_1'>

                        <div style={{ marginBottom: "55px" }}>MANDOS MEDIOS</div>
                        <div className='cuadro_fila2_imgsTextos_2'>
                            <div className='cuadros_fila2_PotencialH_img1'></div>
                            <div className='cuadros_fila2_PotencialH_img2'></div>
                        </div>

                    </div>
                    <div>
                        <div className='cuadros_fila2_PotencialH_img5'></div>
                        <div className='cuadros_fila2_PotencialH_3'>
                            <div style={{ width: "100%" }}>COLABORADORES</div>

                            <div className='cuadros_fila2_PotencialH_img4'></div>

                        </div>
                    </div>




                </div>

            </div>
            <div className="fila_4_PotencialH NoirProRegular">
                <div className='cab_fila4_PotencialH_Texto_img'>
                    <div className='fila4_PotencialH_textcuadro NoirProBold'>
                        <div><span style={{ color: "#fff" }}>Durante la ejecución del servicio de</span> Coaching Ejecutivo:</div>
                    </div>
                </div>
                <div className='cuadros_fila4_PotencialH'>
                    <div className='cuadros_fila4_PotencialH_img2'></div>
                    <div className='cuadros_fila4_PotencialH_1'>Nos enfocamos en conocer la casuística de forma holística.</div>
                    <div className='cuadros_fila4_PotencialH_2'>Evaluaremos fortalezas, oportunidades de mejora y el alcance que tendremos. </div>
                    <div className='cuadros_fila4_PotencialH_3'>Se desplegarán las sesiones con el coachee y se realizará seguimiento por medio de sus líderes inmediatos.</div>
                    <div className='cuadros_fila4_PotencialH_4'>Entregaremos un informe detallado del caso, abordaje y logros así como un plan de acción que impulse la sostenibilidad del comportamiento. </div>
                </div>
            </div>
            <div className="fila_5_PotencialH">
                <div className='cab_fila5_PotencialH_Texto_img'>
                    <div className='fila5_PotencialH_textcuadro NoirProBold'>
                        <div>Con nosotros lograrás lo siguiente:</div>
                    </div>
                </div>
                <div className='cuadros_fila5_PotencialH'>


                    <div className='cuadros_fila5_PotencialH_2'>
                        <div>Identificar objetivos y accionar para el logro de éstos.</div>

                    </div>

                    <div style={{ zIndex: "7" }}>

                        <div className='cuadros_fila5_PotencialH_3'>
                            <div style={{ width: "100%" }}>Generar autonomía y empoderamiento.</div>

                        </div>
                        <div className='cuadros_fila5_PotencialH_img5'></div>
                    </div>
                    <div>
                        <div className='cuadros_fila5_PotencialH_img6'></div>
                        <div className='cuadros_fila5_PotencialH_1'>
                            <div style={{ marginBottom: "55px" }}>Mejorar tu manera de relacionarte con los demás.</div>
                            <div className='cuadro_fila5_imgsTextos_2'>
                            </div>
                        </div>
                    </div>

                    <div className='cuadros_fila5_PotencialH_6'>
                        <div style={{ marginBottom: "55px" }}>Impulsar tu creatividad y capacidad resolutiva.</div>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default PotencialHumano