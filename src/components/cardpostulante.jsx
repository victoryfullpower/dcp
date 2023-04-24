import React from 'react'
import "../css/postulate.scss";

function Cardpostulante({CodigoPostulate, Modalidad, aniosExperiencia, Pais, Posicion, skills,clickFormCorreox}){
 
    return (
        <div onClick={()=>clickFormCorreox(skills,Posicion)} className='fila1_postulate_cuadro1'>
        <div className='fila1_postulate_main_text'>
            <div className='fila1_postulate_text1'>{Modalidad + ":" + Pais}<br />EXPERIENCIA: {aniosExperiencia}</div>

            <div className='fila1_postulate_text3 NoirProBold'>{Posicion}</div>
        </div>
        <div className='fila1_postulate_cover_arrow'><div className='fila1_postulate_arrow'></div></div>
    </div>
    )
}
export default Cardpostulante