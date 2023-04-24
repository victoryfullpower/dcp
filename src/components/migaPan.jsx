import React from "react";
import "../css/migaPan.scss";
import {useNavigate} from 'react-router-dom';
function Migapan({miga}) {
  const navigate = useNavigate();
  
  
  
  function handleclick(url) {
    navigate(`/${url}`)
    navigate(0)
  }


  return (
    
      <div>
        
         <span>{miga}</span>
        
        
      </div>
    
  );
}

export default Migapan;