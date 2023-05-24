import React from "react";
import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//importamos los comp creados
import BusquedaTalento from './pages/busquedaTalento';
import ClimaOrganizacional from './pages/climaOrganizcional';
import EvaluacionTalento from './pages/evaluacionTalento';
import Metodologia from './pages/metodologiaAccion';
import Nosotros from './pages/nosotros';
import Postulate from './pages/postulate';
import PotencialHumano from './pages/potencialHumano';
import Recursos from './pages/recursos';
import Social from './pages/social';
import Header from './components/navbar';
import Footer from './components/footer';
import Inicio from './pages/inicio';
import Contactanos from "./pages/contactanos";
import Mantenimiento from "./pages/mantenimiento";
import SocialDonacion from "./pages/socialDonacion";
import Mante_lectura from "./pages/mante_lectura";
import Mante_video from "./pages/mante_video";
import Mante_postulate from "./pages/mante_postulate";
import Recursolectura from "./pages/recursoLectura";
import Recursovideo from "./pages/recursovideo";
import Detallerecursos from "./pages/detalle_recurso";
import Detallevideo from "./pages/detalle_video";
import { useState, useEffect } from 'react';

import * as AWS from 'aws-sdk';
AWS.config.update({
  region: 'us-east-1',
  endpoint: 'dynamodb.us-east-1.amazonaws.com',
  secretAccessKey: 'UHKoHsh4kKQPeA99aezpTBlxkatyBfLMKjxHXXLN',
  accessKeyId: 'AKIA3567SCNVP3RN2AWM'
});
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

function App() {
  const [mante, setmante] = useState(true);
  const onReadLectura = () => {
    let that = this;
    let params = {
      TableName: "paginaMante"
    };


    docClient.scan(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data)
        setmante(data.Items[0].activo)
      }
    });
  };
  useEffect(() => {
    onReadLectura();

  }, []);
  const x =
    <BrowserRouter>
      <Routes>/private/var/folders/cs/zxrd9xnx547ctxglhkf0jm7r0000gn/T/AppTranslocation/D71348A8-0536-41AC-847C-F14C235682D4/d/Visual Studio Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html
        <Route path='/' element={<Header />}>
          <Route index element={<Inicio />} />
          <Route path='BusquedaTalento' element={<BusquedaTalento />} />
          <Route path='ClimaOrganizacional' element={<ClimaOrganizacional />} />
          <Route path='EvaluacionTalento' element={<EvaluacionTalento />} />
          <Route path='Metodologia' element={<Metodologia />} />
          <Route path='Nosotros' element={<Nosotros />} />
          <Route path='Postulate' element={<Postulate />} />
          <Route path='PotencialHumano' element={<PotencialHumano />} />
          <Route path='Recursos' element={<Recursos />} />
          <Route path='Social' element={<Social />} />
          <Route path='Contactanos' element={<Contactanos />} />
          <Route path='Donacion' element={<SocialDonacion />} />

          <Route path='Recursolectura' element={<Recursolectura />} />
          <Route path='Recursovideo' element={<Recursovideo />} />
          <Route path='Detallerecurso' element={<Detallerecursos />} />
          <Route exact path="Detallerecurso" element={<Detallerecursos />} />
          <Route exact path="Detallevideo" element={<Detallevideo />} />
          <Route path='*' element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  const y = <BrowserRouter>
    <Routes>

      <Route index element={<Inicio />} />
      <Route path='BusquedaTalento' element={<BusquedaTalento />} />
      <Route path='ClimaOrganizacional' element={<ClimaOrganizacional />} />
      <Route path='EvaluacionTalento' element={<EvaluacionTalento />} />
      <Route path='Metodologia' element={<Metodologia />} />
      <Route path='Nosotros' element={<Nosotros />} />
      <Route path='Postulate' element={<Postulate />} />
      <Route path='PotencialHumano' element={<PotencialHumano />} />
      <Route path='Recursos' element={<Recursos />} />
      <Route path='Social' element={<Social />} />
      <Route path='Contactanos' element={<Contactanos />} />

      <Route path='MantenimientoLectura' element={<Mante_lectura />} />
      <Route path='MantenimientoVideo' element={<Mante_video />} />
      <Route path='MantenimientoPostulate' element={<Mante_postulate />} />
      <Route path='Recursolectura' element={<Recursolectura />} />
      <Route path='Recursovideo' element={<Recursovideo />} />
      <Route path='*' element={<Navigate replace to="/" />} />

    </Routes>
  </BrowserRouter>
  const z = <BrowserRouter>
    <Routes>

      <Route index element={<Mantenimiento />} />
      <Route path='BusquedaTalento' element={<Mantenimiento />} />
      <Route path='ClimaOrganizacional' element={<Mantenimiento />} />
      <Route path='EvaluacionTalento' element={<Mantenimiento />} />
      <Route path='Metodologia' element={<Mantenimiento />} />
      <Route path='Nosotros' element={<Mantenimiento />} />
      <Route path='Postulate' element={<Mantenimiento />} />
      <Route path='PotencialHumano' element={<Mantenimiento />} />
      <Route path='Recursos' element={<Mantenimiento />} />
      <Route path='Social' element={<Mantenimiento />} />
      <Route path='Contactanos' element={<Mantenimiento />} />
      <Route path='Donacion' element={<Mantenimiento />} />
      <Route path='Mantenimiento' element={<Mantenimiento />} />
      <Route path='Recursolectura' element={<Mantenimiento />} />
      <Route path='Recursovideo' element={<Mantenimiento />} />
      <Route path='Detallerecurso' element={<Mantenimiento />} />
      <Route exact path="Detallerecurso" element={<Mantenimiento />} />
      <Route exact path="Detallevideo" element={<Mantenimiento />} />
      <Route path='MantenimientoLectura' element={<Mante_lectura />} />
      <Route path='MantenimientoVideo' element={<Mante_video />} />
      <Route path='MantenimientoPostulate' element={<Mante_postulate />} />
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
  const href = window.location.href;
  var body = x;
  function inicio() {
    onReadLectura()

    var banderaPagina = href.indexOf('Mantenimiento')
    var banderaPaginaLectura = href.indexOf('MantenimientoLectura')
    var banderaPaginaVideo = href.indexOf('MantenimientoVideo')
    var banderaPaginaPostulate = href.indexOf('MantenimientoPostulate')
    if (mante) {
      if (banderaPagina > -1 || banderaPaginaLectura > -1 || banderaPaginaVideo > -1 || banderaPaginaPostulate > -1) {
        body = y
      }
    } else {
      body = z
    }


    return body
  }
  return (
    <div className="App">
      {
        inicio()
      }
    </div>
  );
}

export default App;