import React from 'react'
import "../css/recursos.scss";

function Cardlectura({ Codigo,Articulo,Autor,Descripcion,Fecha,imagen,titulo,clicklectura,item}){
    
   
  
    return (
        <div  className='fila1_recurso_video'>
                        <img
                                            src={imagen}
                                            width={"360px"} height={"300px"}
                                            alt='...'
                        />
                        <div className='fila1_recurso_tituloVideos NoirProBold'>{titulo} - {Autor}</div>
                        <div className='fila1_recurso_cover_detalle'><div className='fila1_recurso_detalle'>{Descripcion}</div></div>
                        <div className='fila1_recurso_cover_boton' onClick={()=>clicklectura(item)}><div className='fila2_recurso_boton NoirProBold'>LÉEME</div></div>



                       
        </div>
    )
}
export default Cardlectura