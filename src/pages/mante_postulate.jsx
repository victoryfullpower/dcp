import '../css/manlectura.scss'
import * as AWS from 'aws-sdk';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Menumante from '../components/menumante';

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
    accessKeyId: 'AKIA3567SCNVP3RN2AWM'
});

const Mante_postulate= () => {

    const [base64, setBase64] = useState('');
    const [fileName, setfileName] = useState('');
    var dato = [];
    var dynamodb = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    const [lecturas, setlecturas] = useState([]);
    const [CodigoPostulate, setCodigoPostulate] = useState('')
    const [aniosExperiencia, setaniosExperiencia] = useState('')
    const [Modalidad, setModalidad] = useState('')
    const [Pais, setPais] = useState('')
    const [Posicion, setPosicion] = useState('')
    const [skills, setskills] = useState([])
   
    const [item, setitem] = useState([])
   
    const onRead = () => {


        let that = this;
        let params = {
            TableName: "Postulate_Table"
        };


        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {



                dato = data.Items

                setlecturas(dato);


            }
        });
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        onRead();
    }, []);
    const enviaritem = (item) => {
        console.log(item)
        setShow(true);
        setitem(item)
        setCodigoPostulate(item.CodigoPostulate);
        setaniosExperiencia(item.aniosExperiencia);
        setModalidad(item.Modalidad);
        setPais(item.Pais);
        setPosicion(item.Posicion);
        setskills(item.skills);
        console.log('skills', item.skills)
    }
    const getCodigoPostulate = (e) => {
        setCodigoPostulate(e.target.value);
        console.log("codigo", CodigoPostulate)
    }
    const getaniosExperiencia = (e) => {
        setaniosExperiencia (e.target.value);
    }
    const getModalidad = (e) => {
        setModalidad(e.target.value);
    }
    const getPais= (e) => {
        setPais(e.target.value);
    }
    const getPosicion = (e) => {
        setPosicion(e.target.value);
    }
    const getskills = (e) => {
        setskills(e.target.value);
    }
   
    const savechanges = () => {
        let that = this;
        // Assign an id to the new item

        //model.id = guid(); // Use a method for creating the new id
        // The date has to be saved as an ISO string
        /*  newItem.release_date = model.release_date.toISOString(); */
        var nuevoItem = {
            CodigoPostulate: CodigoPostulate,
            aniosExperiencia: aniosExperiencia,
            Modalidad: Modalidad,
            Pais: Pais,
            Posicion: Posicion,
            skills: [skills],
        }

        let params = {
            TableName: 'Postulate_Table',
            Item: nuevoItem,
            ReturnValues: 'ALL_OLD',
        }
        setShow(false);
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
    const reset = () => {

        setitem([])
        setCodigoPostulate('');
        setaniosExperiencia('');
        setModalidad('');
        setPais('');
        setPosicion('');
        setskills([]);
    }
    const nuevoRegistro = () => {
        reset();
        setShow(true);
    }
    return (
        <div className='NoirProRegular'>
            <div className=''>
            <div style={{marginBottom:"20px"}}>
               <Menumante/>

              
               </div>

                <div className='mantenedor'>
                    <Button variant="primary" onClick={nuevoRegistro}>Nuevo Registro Posicion</Button>
                    <div className='table'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>CodigoPostulate</th>
                                    <th>aniosExperiencia</th>
                                    <th>Modalidad</th>
                                    <th>Pais</th>
                                    <th>Posicion</th>
                                    <th>skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lecturas.map((value, key) => {
                                    console.log(value)
                                    return (
                                        
                                        <tr key={key}>
                                            <td>{value.CodigoPostulate}</td>
                                            <td>{value.aniosExperiencia}</td>
                                            <td>{value.Modalidad}</td>
                                            <td>{value.Pais}</td>
                                            <td>{value.Posicion}</td>
                                            <td>{value.skills}</td>
                                            <td ><Button onClick={() => enviaritem(value)} variant="success">Editar</Button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>

                    <Modal size={'lg'} show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Mantenedor</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='formulario'>
                                <div className='mantelectura_cover_input2'>
                                    <div className='cssabel'>Codigo</div>
                                    <div>
                                        <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.CodigoPostulate}
                                            onChange={getCodigoPostulate}
                                        />
                                    </div>
                                    <div className='cssabel2'>Años</div>
                                    <div>
                                        <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.aniosExperiencia}
                                            onChange={getaniosExperiencia}
                                        />
                                    </div>
                                </div>

                                <div className='mantelectura_cover_input2'>
                                    <div className='cssabel'>Modalidad</div>
                                    <div>
                                        <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.Modalidad}
                                            onChange={getModalidad}
                                        />
                                    </div>
                                    <div className='cssabel2'>Pais</div>
                                    <div>
                                        <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.Pais}
                                            onChange={getPais}
                                        />
                                    </div>
                                </div>

                                <div className='mantelectura_cover_input'>
                                    <div style={{width:"77px"}} className='cssabel'>Posicion</div>
                                    <div>
                                    <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.Posicion}
                                            onChange={getPosicion}
                                        />


                                    </div>
                                </div>
                                <div className='mantelectura_cover_input'>
                                    <div className='cssabel'>skills</div>
                                    <div>

                                        <textarea
                                            className="classinput"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.skills}
                                            onChange={getskills}
                                        />
                                    </div>
                                </div>
                               


                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button variant="primary" onClick={savechanges}>
                                Guardar Cambios
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>

        </div>
    )
}
export default Mante_postulate