import React, {Component} from 'react';

const styles={
  conatainer : {
    display:"flex",
    flexDirection : "column",
  },
  firstImage : {
    width : "300px"
  }
}

const TrbIrCameraTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>IR CAMERA</h2>
      <img src="/help/trb-ir-camera.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Application de gestion de données issues de caméra thermiques</p>
      <h3>Fonctionnalités:</h3>
      <ul style={{flex:1, overflowY:"auto"}}>
        <li>Récupérer l'image en temps réel d'une ou plusieurs caméra.</li>
        <li>Récupérer la température en un point de l'image.</li>
        <li>Récupérer les températures mni et max.</li>
        <li>Mise en place de zone de controle rectangulaire.</li>
        <li>Mise en place d'alarme sur seuil.</li>
        <li>Recevoir les notification en temps réel.</li>
        <li>Génération automatique de rapport.</li>
      </ul>
    </div>
  )
}
export default TrbIrCameraTemplate
    

    