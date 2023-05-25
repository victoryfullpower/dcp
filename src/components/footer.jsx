import React from "react";
import "../css/footer.scss";
import {useNavigate} from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  function handleclick(url) {
   
    window.open(`/${url}`,"_self");
  
  }
  function facebook(){
    window.open('https://www.facebook.com/people/DPC-Asociados/100077413660376/', '_blank');
  }
  function linkedIn(){
    window.open('https://www.linkedin.com/company/dpc-asociados/?viewAsMember=true', '_blank');
  }

  return (
    
      <div className="container-footer">
        <div className="footer NoirProRegular row">
          {/* Column1 */}
          <div className="col-6 col-md-4 col-xl-3">
            <div>CONTÁCTANOS</div>
            <ul className="list-unstyled">
              <li className="colorVerde">Correo: juntoshacemosladiferencia@dpc.pe</li>
              <li className="redes vinculofooter"><div onClick={linkedIn}>Linkedin</div><div onClick={facebook}>Facebook</div></li>
              
            </ul>
          </div>
          {/* Column2 */}
          <div className="col-6 col-md-2 col-xl-2">
            <div>EMPRESA</div>
            <ul className="list-unstyled vinculofooter">
              <li onClick={()=>{handleclick('Nosotros')}}>Nosotros</li>
              <li onClick={()=>{handleclick('Recursos')}}>Recursos</li>
              <li onClick={()=>{handleclick('Postulate')}}className="colorVerde">¡Postúlate!</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col-6 col-md-2 col-xl-3">
            <div>ESPECIALIDADES</div>
            <ul className="list-unstyled vinculofooter">
              <li onClick={()=>{handleclick('ClimaOrganizacional')}}>Desarrollo organizacional</li>
              <li onClick={()=>{handleclick('PotencialHumano')}}>Desarrollo del Potencial Humano</li>
              <li onClick={()=>{handleclick('BusquedaTalento')}}>Búsqueda de talento</li>
              <li onClick={()=>{handleclick('EvaluacionTalento')}}>Evaluación de talento</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="col-6 col-md-2 col-xl-2">
            <div>METODOLOGÍA DE ACCIÓN</div>
            <ul className="list-unstyled vinculofooter">
              <li onClick={()=>{handleclick('Metodologia')}} className="colorVerde">Cuatro grandes fases</li>
            </ul>
          </div>
          {/* Column5 */}
          <div className="col-6 col-md-2 col-xl-2">
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