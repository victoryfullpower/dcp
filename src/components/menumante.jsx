import "../css/recursos.scss";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import * as AWS from 'aws-sdk';
import React, { useState, useEffect } from 'react';


function Menumante(){
    var docClient = new AWS.DynamoDB.DocumentClient();
    var activo = false
    AWS.config.update({
        region: 'us-east-1',
        endpoint: 'dynamodb.us-east-1.amazonaws.com',
        secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
        accessKeyId: 'AKIA3567SCNVP3RN2AWM'
    });
    const [Mante, setMante] = useState(false)
    const onRead = () => {


        let that = this;
        let params = {
            TableName: "paginaMante"
        };


        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {


               console.log("datoswitch", data.Items[0].activo)
               setMante(data.Items[0].activo)
               activo = data.Items[0].activo


            }
        });
    };

    useEffect(() => {
        onRead();
    }, []);
    const savechanges = () => {
        let that = this;
        
        if(Mante == true){
            console.log("setear en false")
            setMante(false)
            activo = false
        }else{
            console.log("setear en true")
            setMante(true)
            activo = true
        }
        let params = {
            TableName: 'paginaMante',
            Item: {codigo:'01',activo:activo},
            ReturnValues: 'ALL_OLD',
        }
        docClient.put(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log("se registro", data);

                onRead();
                /*  let gridCurrentData = that.state.gridData
                 gridCurrentData.shift(newItem) */
                /*  that.setState({
                     gridData: gridCurrentData // Set the new data to the Grid if INSERT is successful
                 }) */
            }
        });
    }
    function test() {
   
       console.log("test")
      
      }
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
       
       
     
        <Form>
         <Form.Check 
           type="switch"
           id="custom-switch"
           label="Estado de Pagina"
           onChange={savechanges}
           checked={Mante}
         />
        
       </Form>
    
      
        
        </Nav>
         
        

    )
}
export default Menumante


