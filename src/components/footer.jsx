import React from "react";
import "../css/footer.scss";
import {useNavigate} from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  function handleclick(url) {
    navigate(`/${url}`)
    navigate(0)
  }
  function facebook(){
    window.open('https://www.facebook.com/people/DPC-Asociados/100077413660376/', '_blank');
  }
  function linkedIn(){
    window.open('https://www.linkedin.com/company/dpc-asociados/?viewAsMember=true', '_blank');
  }

  return (
    
      <div>
        <div className="footer NoirProRegular">
          {/* Column1 */}
          <div className="footercolum">
            <div>CONTÁCTANOS</div>
            <ul className="list-unstyled">
              <li className="colorVerde">Correo: juntoshacemosladiferencia@dpc.pe</li>
              <li className="redes vinculofooter"><div onClick={linkedIn}>Linkedin</div><div onClick={facebook}>Facebook</div></li>
              
            </ul>
          </div>
          {/* Column2 */}
          <div className="footercolum">
            <div>EMPRESA</div>
            <ul className="list-unstyled vinculofooter">
              <li onClick={()=>{handleclick('Nosotros')}}>Nosotros</li>
              <li onClick={()=>{handleclick('Recursos')}}>Recursos</li>
              <li onClick={()=>{handleclick('Postulate')}}className="colorVerde">¡Postúlate!</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="footercolum">
            <div>ESPECIALIDADES</div>
            <ul className="list-unstyled vinculofooter">
              <li onClick={()=>{handleclick('BusquedaTalento')}}>Búsqueda de talento</li>
              <li onClick={()=>{handleclick('ClimaOrganizacional')}}>Clima organizacional</li>
              <li onClick={()=>{handleclick('EvaluacionTalento')}}>Evaluación de talento</li>
              <li onClick={()=>{handleclick('PotencialHumano')}}>Desarrollo del Potencial Humano</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="footercolum">
            <div>METODOLOGÍA DE ACCIÓN</div>
            <ul className="list-unstyled vinculofooter">
              <li onClick={()=>{handleclick('Metodologia')}} className="colorVerde">Cuatro grandes fases</li>
            </ul>
          </div>
          {/* Column5 */}
          <div className="footercolum">
            <div>DPC SOCIAL</div>
            <ul className="list-unstyled vinculofooter">
              <li onClick={()=>{handleclick('Social')}} className="colorVerde">Generamos impacto social</li>
            </ul>
          </div>
        </div>
        
        
      </div>
    
  );
}

export default Footer;