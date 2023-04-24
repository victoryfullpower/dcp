
import '../css/mantenimiento.scss'

const Mantenimiento = () => {
    const handleclick =()=> {
        /* navigate(`/${url}`, { replace: false })
        navigate(0) */
       
       window.open('https://api.whatsapp.com/send?phone=51988900839&text=Necesito%20mas%20info',"_self");
      }
    return (
        <div className='NoirProRegular'>
          <div className='mantenimiento_segundoCuadro'>
                
                    <div className='contentDescrp2_mantenimiento'>
                        <div className='titulo_segundoCuadro_mantenimiento NoirProBold'>
                        ¡ES GENIAL TENERTE POR AQUÍ! AHORA  ESTAMOS TRABAJANDO EN BRINDARTE UNA MEJOR EXPERIENCIA DENTRO DE NUESTRA WEB.
                            </div>

                            <div className='NoirProBold' style={{color:"#FFF",marginTop:"50px",fontSize:"28px",textAlign:"center"}}>Estamos aquí para ti</div>
                    </div>
                    <div className='botonConvemos NoirProBold' onClick={handleclick}>CONVERSEMOS</div>

                </div>
           
           

        </div>
    )
}
export default Mantenimiento