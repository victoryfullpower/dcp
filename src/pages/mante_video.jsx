import '../css/manlectura.scss'
import * as AWS from 'aws-sdk';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noimage from '../assets/noimage.png'
import Menumante from '../components/menumante.jsx';

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
    accessKeyId: 'AKIA3567SCNVP3RN2AWM'
});

const Mante_video= () => {

    const [base64, setBase64] = useState('');
    const [fileName, setfileName] = useState('');
    var dato = [];
    var dynamodb = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    const [lecturas, setlecturas] = useState([]);
    const [Codigo, setCodigo] = useState('')
    const [Articulo, setArticulo] = useState('')
    const [Autor, setAutor] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [Fecha, setFecha] = useState('')
    const [imagen, setimagen] = useState('')
    const [titulo, settitulo] = useState('')
    const [video, setvideo] = useState('')
    const [item, setitem] = useState([])
    const openFile = (e) => {
        document.getElementById('filePostulacion').click()
    }
    const changefile = (e) => {
        const files = e.target.files;

        const file = files[0];

        if (file != undefined) {
            console.log('onchage', file)
            getBase64(file);
        }



    };
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {

            setfileName(file.name);
            console.log("file", fileName);
            onLoad(reader.result);
            document.getElementById('postulacionFront').src = reader.result;
            setimagen(reader.result)

        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    const onLoad = (fileString) => {
        setBase64(fileString);

        console.log("onload", imagen);


    };
    const onRead = () => {


        let that = this;
        let params = {
            TableName: "lecturaVideo"
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

    
    const eliminar = (item) => {
          let params = {
            TableName: 'lecturaVideo',
            Key:{
                'Codigo':item.Codigo
            },
        }



        var statusConfirm = confirm("¿Realmente desea eliminar esto?");
        if (statusConfirm == true)
        {
            docClient.delete(params, function(err, data) {
            
                if (err) {
                  console.log("Error", err);
                } else {
                  console.log("Success eliminado", data);
                  onRead();
                }
              });
    
    
        }
        else
        {
           
        }



        
          
    }
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
        setCodigo(item.Codigo);
        setArticulo(item.Articulo);
        setAutor(item.Autor);
        setDescripcion(item.Descripcion);
        setFecha(item.Fecha);
        settitulo(item.titulo);
        setimagen(item.imagen);
        setvideo(item.video)
    }
    const getCodigo = (e) => {
        setCodigo(e.target.value);
        console.log("codigo", Codigo)
    }
    const getArticulo = (event, editor) => {
        setArticulo(editor.getData());
    }
    const getAutor = (e) => {
        setAutor(e.target.value);
    }
    const getDescripcion = (e) => {
        setDescripcion(e.target.value);
    }
    const getFecha = (e) => {
        setFecha(e.target.value);
    }
    const gettitulo = (e) => {
        settitulo(e.target.value);
    }
    const getvideo= (e) => {
        setvideo(e.target.value);
    }
    const savechanges = () => {
        let that = this;
        // Assign an id to the new item

        //model.id = guid(); // Use a method for creating the new id
        // The date has to be saved as an ISO string
        /*  newItem.release_date = model.release_date.toISOString(); */
        var nuevoItem = {
            Codigo: Codigo,
            Articulo: Articulo,
            Autor: Autor,
            Descripcion: Descripcion,
            Fecha: Fecha,
            imagen: imagen,
            titulo: titulo,
            video: video
        }

        let params = {
            TableName: 'lecturaVideo',
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
        setCodigo('');
        setArticulo('');
        setAutor('');
        setDescripcion('');
        setFecha('');
        settitulo('');
        setimagen('');
        setitem([]);
        setvideo([]);
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
                    <Button variant="primary" onClick={nuevoRegistro}>Nuevo Registro Video</Button>
                    <div className='table'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Autor</th>
                                    <th>titulo</th>
                                    <th>Fecha</th>
                                    <th>Descripcion</th>
                                    <th>Articulo</th>
                                    <th>Video</th>

                                </tr>
                            </thead>
                            <tbody>
                                {lecturas.map((value, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{value.Codigo}</td>
                                            <td>{value.Autor}</td>
                                            <td>{value.titulo}</td>
                                            <td>{value.Fecha}</td>
                                            <td>{value.Descripcion.slice(0, 50)}</td>
                                            <td>{value.Articulo.slice(0, 50)}</td>
                                            <td>{value.video.slice(0, 50)}</td>
                                            <td ><Button onClick={() => enviaritem(value)} variant="success">Editar</Button></td>
                                            <td ><Button onClick={() => eliminar(value)} variant="success">Eliminar</Button></td>

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
                                            defaultValue={item.Codigo}
                                            onChange={getCodigo}
                                        />
                                    </div>
                                    <div className='cssabel2'>Autor</div>
                                    <div>
                                        <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.Autor}
                                            onChange={getAutor}
                                        />
                                    </div>
                                </div>

                                <div className='mantelectura_cover_input2'>
                                    <div className='cssabel'>titulo</div>
                                    <div>
                                        <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.titulo}
                                            onChange={gettitulo}
                                        />
                                    </div>
                                    <div className='cssabel2'>Fecha</div>
                                    <div>
                                        <input
                                            className="classinput2"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.Fecha}
                                            onChange={getFecha}
                                        />
                                    </div>
                                </div>

                                <div className='mantelectura_cover_input'>
                                    <div className='cssabel'>Imagen</div>
                                    <div>
                                        <input
                                            className="classinput"
                                            type='file'
                                            accept='application/svg'
                                            placeholder="Seleccionar archivo"
                                            id='filePostulacion'
                                            onChange={changefile}
                                            style={{ display: "none" }}

                                        />

                                        <img
                                            src={item.imagen ? (item.imagen) : noimage}
                                            width={"50px"} height={"50px"}
                                            alt='...' onClick={openFile} id='postulacionFront'
                                        />


                                    </div>
                                </div>
                                <div className='mantelectura_cover_input'>
                                    <div className='cssabel'>Descripcion</div>
                                    <div>

                                        <textarea
                                            className="classinput"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.Descripcion}
                                            onChange={getDescripcion}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className='cssabel'>Video</div>
                                    <div>
                                        <input
                                            className="classinput"
                                            type='text'
                                            name='texto3'
                                            defaultValue={item.video}
                                            onChange={getvideo}
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
export default Mante_video