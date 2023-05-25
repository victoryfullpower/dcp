import '../css/inicio.scss'
import video from '../assets/video_home.mp4'
import { useNavigate } from 'react-router-dom';
const Inicio = () => {
    const navigate = useNavigate();
    function handleclick(url) {
        /* navigate(`/${url}`, { replace: false })
        navigate(0) */
        window.open(`/${url}`, "_self");
    }
    return (
        <div className="inicio">
            <div className='fila1_inicio_video'>
                <video width="100%" height="auto" muted autoPlay loop >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='contenedor_primerCuadro'>

                <div className='primerCuadro'>
                    <div className='container'>
                        <div className='contentDescrp'>
                            <div className='titulo NoirProBold'>
                                <div>Tus necesidades son nuestra prioridad</div>

                            </div>
                            <div className='cuerpo NoirProRegular'><p>Estamos disponibles para ti en todo momento. </p>
                                <p>Siempre tendrás un asociado especialista que lidere e impulse tu
                                    proyecto y esté dispuesto a guiarte de inicio a fin garantizando tu éxito.</p>
                            </div>
                            <div className='conocemas NoirProLight'><span onClick={() => handleclick("Metodologia")} style={{ cursor: "pointer" }}>Conoce más</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contenedor_segundoCuadro'>
                <div className='container'>
                    <div className='contentDescrp2'>
                        <div className='titulo_segundoCuadro NoirProBold'>Nos enfocamos en brindar soluciones reales, personalizadas y  estratégicas a las empresas para lograr llevar apoyo a las
                            instituciones inclusivas del Perú.</div>
                    </div>
                </div>
            </div>
            <div className='contenedor_tercerCuadro'>
                <div className='container_descrp3'>
                    <div className='contentDescrp3'>
                        <div className='titulo_tercerCuadro NoirProBold'>Las acciones certeras afianzan lazos y permiten ayudar a la sociedad.</div>

                        <div className='ListadoCuadros'>
                            <div className='cuadroInicio1'><div className='cabCuadro'>Metodología</div><div onClick={() => { handleclick('Metodologia') }} className='redmore'>Conoce más</div></div>
                            <div className='cuadroInicio2'><div className='cabCuadro'>DPC Social</div><div onClick={() => { handleclick('Social') }} className='redmore'>Conoce más</div></div>
                            <div className='cuadroInicio1'><div className='cabCuadro'>Recursos</div><div onClick={() => { handleclick('Recursos') }} className='redmore'>Conoce más</div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Inicio