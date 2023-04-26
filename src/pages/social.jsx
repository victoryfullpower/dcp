import '../css/social.scss'
import { useState } from "react";
import video from '../assets/social.mp4'

const Social = () => {
    const [cantidad, setCantidad] = useState(0);
   const pagar = (e)=>{


    if (cantidad > 0){
        Culqi.settings({
            title: 'DPC',
            currency: 'PEN',  // Este parámetro es requerido para realizar pagos yape
            amount: (cantidad * 100),  // Este parámetro es requerido para realizar pagos yape
            order: 'ord_live_0CjjdWhFpEAZlxlz' // Este parámetro es requerido para realizar pagos con pagoEfectivo, billeteras y Cuotéalo
          });
        Culqi.open();
        e.preventDefault();
    }else{
        document.getElementById("input_donar").value = ""
        document.getElementById("input_donar").focus()
        alert("No ingreso un monto valido")

    }
    
   }
   const getCantidad = (e)=>{
    setCantidad(e.target.value);
}
    return (
        <div className='NoirProRegular'>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}><span className='home_medologia NoirProRegular'>{"<-"} Home | </span><span className='miga_metodologia NoirProBold'>DPC Social</span></div>
            <div className="fila_1_social">
                <div className='fila1_social_titulo NoirProBold'>
                    Acciones que generan cambios reales
                </div>
                <div className='fila1_social_descripcion NoirProRegular'>
                    DPC Social es una red de aliados que tienen interés en promover el adecuado desarrollo de niños con habilidades diferentes en todo el Perú.
                </div>
            </div>

            <div className="fila_2_social NoirProBold">

                <div className='social_fila2_text NoirProRegular'>

                    <div>
                        <div className='social_fila2_text_1'>
                            Cada miembro de nuestra organización reconoce que es imposible estar bien si alguien de nuestro entorno social no lo está. No somos ajenos a la realidad que pasan muchos niños con habilidades diferentes en nuestro país. Es por ello que como organización sumamos esfuerzos para accionar a favor de la inclusión e igualdad de oportunidades de manera que estos niños lleguen a ser independientes y puedan lograr sus sueños.
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className='social_fila2_img1'></div>
                            <div className='social_fila2_img2'></div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='fila_3_social'>
                <div className='fila3_social_titulo NoirProBold'>Impactamos en sus vidas para llevarlos a un siguiente nivel</div>
                <video width="100%" height="auto" muted autoPlay loop >
                <source src={video} type="video/mp4"/>
            </video>
            </div>

            <div className="fila_4_social NoirProBold">

                <div className='social_fila4_text NoirProRegular'>

                    <div>
                        <div className='social_fila4_text_1'>
                            La meta de este 2023 es lograr proporcionarles a estos niños 1000 HORAS DE TERAPIA FÍSICA
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className='social_fila4_img1'></div>
                            <div className='social_fila4_img2'></div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='fila5_social'>
                <div className='fila5_social_texto1 NoirProBold'>¿Qué haremos desde nuestro lado?</div>
                <div className='fila5_social_cuadro1 NoirProRegular'>
                    <div>
                        <div className='fila5_social_cuadro1_asociados'>
                            DPC ASOCIADOS DONARÁ
                        </div>
                        <div className='fila5_social_cuadro1_porcentaje'>
                            <div className='fila5_social_cuadro1_elde'>EL DE</div>
                            <div className='fila5_social_cuadro1_numero_porcentaje NoirProBold'>15%</div>
                        </div>
                        <div className='fila5_social_cuadro1_Ingresos'>SUS INGRESOS</div>
                    </div>

                </div>
                <div className='fila5_social_text NoirProBold'>
                    Estamos abiertos a generar un espacio one to one en  el cual te podamos contar sobre la estructura de esta bonita causa.
                </div>
                <div className='fila5_postulate_cover_boton'>
                    <button className='fila5_postulate_botonCorreo NoirProBold' variant="primary">CONVERSEMOS</button>
                </div>
            </div>

            <div className="fila_6_social NoirProBold">

                <div className='social_fila6_text NoirProRegular'>

                    <div>
                        <div className='social_fila6_text_1 NoirProBold'>
                            TÚ TAMBIÉN PUEDES SUMARTE

                        </div>
                        <div className='fila6_postulate_cover_boton'>
                            <button id='btn_pagar' onClick={pagar} className='fila6_postulate_botonCorreo NoirProBold' variant="primary">QUIERO DONAR</button>
                            
                            <div>
                                <input
                                        className="fila1_contactanos_input"
                                        type='text'
                                        id='input_donar'
                                        placeholder='Ingresar Monto a donar'
                                        onChange={getCantidad}
                                        name='texto3'
                                    />
                            </div>
                            
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className='social_fila6_img1'></div>
                            <div className='social_fila6_img2'></div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    ) 
}
export default Social