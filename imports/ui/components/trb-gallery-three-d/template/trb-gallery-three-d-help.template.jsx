import React, {Component} from 'react';

const styles={
  conatainer : {
    
  },
  firstImage : {
    width : "300px"
  }
}


const TrbGallery3dHelpTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>3D VISUALISATEUR</h2>
      <img src="/help/trb-3d.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Application permettant de stocker et visualiser des plans en 3D ainsi qu'au format pdf. </p>
      <h3>Fonctionnalités:</h3>
      <ul>
        <li>Visualiser une conseption en 3D.</li>
        <li>Visualiser chaque piècede la conception dans une fenetre séparée.</li>
        <li>Enregistrer une nouvelle conception.</li>
        <li>Télecharger les plans des conception au format pdf.</li>
      </ul>
    </div>
  )
}
export default TrbGallery3dHelpTemplate