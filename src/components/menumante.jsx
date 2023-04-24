import React from 'react'
import "../css/recursos.scss";
import Nav from 'react-bootstrap/Nav';
function Menumante(){
   
    return (
        <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/MantenimientoLectura">Mantenimiento Lecturas</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/MantenimientoVideo">Mantenimiento videos</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/MantenimientoPostulate">Mantenimiento Postulate</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}
export default Menumante


