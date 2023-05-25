import imgbandera from '../assets/chicosbandera.svg';
import estrechaManos from '../assets/estrecharManos.png';
import '../css/climaOrganizacional.scss'
import {useNavigate} from 'react-router-dom';

const ClimaOrganizacional = () => {
    const navigate = useNavigate();
    const volverHome=()=>{

      navigate(`/`)
     
    }
    const mouseenter = () => {
        document.getElementById('idcab_fila2_clima_1').style.backgroundImage = "url(/src/assets/s1.png)";
        document.getElementById('clima_texto1').style.opacity = "1"
        document.getElementById('clima_texto1').style.transition = "opacity .5s";
        document.getElementById('idcab_fila2_clima_1').style.backgroundSize = "cover";
        document.getElementById('idcab_fila2_clima_1').style.backgroundPosition = "unset"
        
    }
    const mouseleave = () => {
        document.getElementById('idcab_fila2_clima_1').style.backgroundImage = "url(/src/assets/fondo_1.png)";
        document.getElementById('clima_texto1').style.opacity = "0"
        document.getElementById('idcab_fila2_clima_1').style.backgroundSize = "120px 250px"
        document.getElementById('idcab_fila2_clima_1').style.backgroundPosition = "bottom -4px right -17px"
       
    }
    /* 1 */
    const mouseenter2 = () => {
        document.getElementById('idcab_fila2_clima_2').style.backgroundImage = "url(/src/assets/s2.png)";
        document.getElementById('clima_texto2').style.opacity = "1"
        document.getElementById('clima_texto2').style.transition = "opacity .5s"
        document.getElementById('idcab_fila2_clima_2').style.backgroundSize = "cover"
        document.getElementById('idcab_fila2_clima_2').style.backgroundPosition = "unset"
    }
    const mouseleave2 = () => {
        document.getElementById('idcab_fila2_clima_2').style.backgroundImage = "url(/src/assets/fondo_2.png)";
        document.getElementById('clima_texto2').style.opacity = "0"
        document.getElementById('idcab_fila2_clima_2').style.backgroundSize = "170px 250px"
        document.getElementById('idcab_fila2_clima_2').style.backgroundPosition = "bottom -4px right -17px"
        
    }
    /* 2 */
    const mouseenter3 = () => {
        document.getElementById('idcab_fila2_clima_3').style.backgroundImage = "url(/src/assets/s3.png)";
        document.getElementById('clima_texto3').style.opacity = "1"
        document.getElementById('clima_texto3').style.transition = "opacity .5s"
        document.getElementById('idcab_fila2_clima_3').style.backgroundSize = "cover"
        document.getElementById('idcab_fila2_clima_3').style.backgroundPosition = "unset"
    }
    const mouseleave3 = () => {
        document.getElementById('idcab_fila2_clima_3').style.backgroundImage = "url(/src/assets/fondo_3.png)";
        document.getElementById('clima_texto3').style.opacity = "0"
        document.getElementById('idcab_fila2_clima_3').style.backgroundSize = "170px 250px"
        document.getElementById('idcab_fila2_clima_3').style.backgroundPosition = "bottom -4px right -17px"
        
    }
    /* 3 */
    const mouseenter4 = () => {
        document.getElementById('idcab_fila2_clima_4').style.backgroundImage = "url(/src/assets/s4.png)";
        document.getElementById('clima_texto4').style.opacity = "1"
        document.getElementById('clima_texto4').style.transition = "opacity .5s"
        document.getElementById('idcab_fila2_clima_4').style.backgroundSize = "cover"
        document.getElementById('idcab_fila2_clima_4').style.backgroundPosition = "unset"
    }
    const mouseleave4 = () => {
        document.getElementById('idcab_fila2_clima_4').style.backgroundImage = "url(/src/assets/fondo_4.png)";
        document.getElementById('clima_texto4').style.opacity = "0"
        document.getElementById('idcab_fila2_clima_4').style.backgroundSize = "170px 250px"
        document.getElementById('idcab_fila2_clima_4').style.backgroundPosition = "bottom -4px right -17px"
    }
    /* 4 */


    const mouseenterv1 = () => {
        document.getElementById('idcab_fila2_clima_d1').style.backgroundImage = "url(/src/assets/s5.png)";

        document.getElementById('clima_textod11').style.opacity = "0"
        document.getElementById('clima_textod1').style.opacity = "1"
        document.getElementById('clima_textod1').style.transition = "opacity .5s"
        document.getElementById('clima_textod1').style.fontSize = "18px"
    }
    const mouseleavev1 = () => {
        document.getElementById('idcab_fila2_clima_d1').style.backgroundImage = "";
        document.getElementById('clima_textod1').style.opacity = "0"
        document.getElementById('clima_textod11').style.opacity = "1"
        document.getElementById('clima_textod11').style.transition = "opacity .5s"
    }
    /* v1 */
    const mouseenterv2 = () => {
        document.getElementById('idcab_fila2_clima_d2').style.backgroundImage = "url(/src/assets/s6.png)";

        document.getElementById('clima_textod22').style.opacity = "0"
        document.getElementById('clima_textod2').style.opacity = "1"
        document.getElementById('clima_textod2').style.transition = "opacity .5s"
        document.getElementById('clima_textod2').style.fontSize = "18px"
    }
    const mouseleavev2 = () => {
        document.getElementById('idcab_fila2_clima_d2').style.backgroundImage = "";
        document.getElementById('clima_textod2').style.opacity = "0"
        document.getElementById('clima_textod22').style.opacity = "1"
        document.getElementById('clima_textod22').style.transition = "opacity .5s"
    }
    /* v2 */
    const mouseenterv3 = () => {
        document.getElementById('idcab_fila2_clima_d3').style.backgroundImage = "url(/src/assets/s7.png)";

        document.getElementById('clima_textod33').style.opacity = "0"
        document.getElementById('clima_textod3').style.opacity = "1"
        document.getElementById('clima_textod3').style.transition = "opacity .5s"
        document.getElementById('clima_textod3').style.fontSize = "18px"
    }
    const mouseleavev3 = () => {
        document.getElementById('idcab_fila2_clima_d3').style.backgroundImage = "";
        document.getElementById('clima_textod3').style.opacity = "0"
        document.getElementById('clima_textod33').style.opacity = "1"
        document.getElementById('clima_textod33').style.transition = "opacity .5s"
    }
    /* v3 */
    return (
        <div className='container'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span onClick={volverHome} className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>Clima organizacional</span></div>
            <div className="fila_1_Clima">
                <div className='TituloPaginaClima NoirProBold'>
                    CLIMA ORGANIZACIONAL
                </div>
                <div className="Bloque_Cabecera_Clima" >
                    <div className="cuadros_imagen_clima">
                        <div className="cuadros_Cabecera_Clima NoirProRegular">
                            <div className='textoSomosExpertos'>
                                <span>Somos expertos en levantar información sobre cómo</span> <span style={{color:"#00CFB4"}}> perciben, sienten y opinan</span>  las personas que trabajan contigo.
                            </div>
                            <div className='ListadoCuadros_cabecera_clima_1'>
                                <div className='cuadro_cabecera_clima_1'>Nos alineamos a tus necesidades.</div>
                                <div className='cuadro_cabecera_clima_2'>Elaboramos una encuesta ad hoc  para la medición y diagnóstico certeros.</div>
                                <div className='cuadro_cabecera_clima_3'>Te brindamos un plan de acción de mejora a la medida. </div>
                            </div>
                            <div className='textoNuestrosEspecialistas'>
                            <span>De la mano con nuestros especialistas y durante el</span><span style={{color:"#00CFB4"}}> proceso de ejecución </span>podrás<span style={{color:"#00CFB4"}}> hacer la diferencia</span> ofreciéndole a tus  colaboradores una experiencia <span style={{color:"#00CFB4"}}>gamificada</span>, permitiendo:
                            </div>
                            <div className='ListadoCuadros_cabecera_clima_2'>
                                <div className='cuadro_cabecera_clima_4'>Difusión de conceptos y campañas.</div>
                                <div className='cuadro_cabecera_clima_5'>Transmitir tu esencia corporativa.</div>
                                <div className='cuadro_cabecera_clima_6'>Participación voluntaria en el estudio de clima.</div>
                            </div>
                        </div>
                        <div className='imgbanderaclima'>
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
                    <div className='cab_fila2_clima_1' id='idcab_fila2_clima_1' onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
                        <div className='clima_opacity' id="clima_texto1" style={{color:"#fff"}}>Construir y mejorar la cultura de tu organización.</div>

                    </div>
                    <div className='cab_fila2_clima_2_img'>
                        <div className='cab_fila2_clima_2' id='idcab_fila2_clima_2' onMouseEnter={mouseenter2} onMouseLeave={mouseleave2}>
                            <div className='clima_opacity' id="clima_texto2" style={{color:"#fff"}}>Incrementar la sensación de bienestar, sentimiento de pertenencia y compromiso en tus colaboradores.</div>
                        </div>
                        <div className='cab_fila2_clima_2_img_img'></div>
                    </div>
                    <div className='cab_fila2_clima_3_img'>
                        <div className='cab_fila2_clima_3_img_img'>

                        </div>
                        <div className='cab_fila2_clima_3' id='idcab_fila2_clima_3' onMouseEnter={mouseenter3} onMouseLeave={mouseleave3}>
                            <div className='clima_opacity' id="clima_texto3" style={{color:"#fff"}}>Comprender el
                                comportamiento de tus
                                colaboradores
                                detectando necesidades
                                como formación,
                                ergonomía, carga de
                                trabajo, oportunidades
                                de mejora dentro de tus
                                equipos, entre otras.</div>

                        </div>
                    </div>
                    <div className='cab_fila2_clima_4' id='idcab_fila2_clima_4' onMouseEnter={mouseenter4} onMouseLeave={mouseleave4}>
                        <div className='clima_opacity' id="clima_texto4" style={{color:"#fff"}}>Comprender el
                            Tomar decisiones
                            adecuadas para
                            prevenir o
                            disminuir la
                            rotación,
                            ausentismo,
                            desmotivación e
                            insatisfacción
                            en tus
                            colaboradores.</div>
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
                        <div className='cab_fila3_clima_2' id='idcab_fila2_clima_d1' onMouseEnter={mouseenterv1} onMouseLeave={mouseleavev1}>
                            <div className='clima_opacity' id="clima_textod1">
                                Permitiremos que conozcas cómo esta la relación compañía-colaborador a nivel de:
                                <ul style={{ textAlign: "left" }}>
                                    <li>Liderazgo</li>
                                    <li>Comunicación</li>
                                    <li>Infraestructura</li>
                                    <li>Nivel de ingresos</li>
                                    <li>Ergonomía</li>
                                </ul>
                            </div>
                            <div id="clima_textod11" className='cuadrosfila3Clima'>
                                NUESTRO SERVICIO
                            </div>

                        </div>
                        <div className='cab_fila3_clima_3' id='idcab_fila2_clima_d2' onMouseEnter={mouseenterv2} onMouseLeave={mouseleavev2}>

                            <div className='clima_opacity' id="clima_textod2">

                                <ul style={{ textAlign: "left" }}>
                                    <li>Disminución de rotación</li>
                                    <li>Retención del talento</li>
                                    <li>Referencia de tu empresa como un buen lugar de trabajo</li>

                                </ul>
                            </div>
                            <div id="clima_textod22" className='cuadrosfila3Clima'>

                                NECESIDADES QUE RESOLVEMOS
                            </div>


                        </div>
                        <div className='cab_fila3_clima_4' id='idcab_fila2_clima_d3' onMouseEnter={mouseenterv3} onMouseLeave={mouseleavev3}>
                            <div className='clima_opacity' id="clima_textod3">
                                Brindamos un enfoque humanizado con respuestas rápidas y campañas comunicacionales virtuales para darte una propuesta de plan de acción a la medida.
                            </div>
                            <div  id="clima_textod33"  className='cuadrosfila3Clima'>
                                LO QUE NOS HACE DIFERENTES
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default ClimaOrganizacional