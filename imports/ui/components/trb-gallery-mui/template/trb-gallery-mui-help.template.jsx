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

const TrbGalleryMuiHelpTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>GALLERIE D'IMAGE</h2>
      <img src="/help/trb-gallery-mui.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Stocker et retrouver facilement les photos TRB. Envoyez les par mail.</p>
      <h3>Fonctionnalités:</h3>
      <ul style={{flex:1, overflowY:"auto"}}>
        <li>Visualisation des images mignature.</li>
        <li>Filtrer les images par industrie, client, type etc.</li>
        <li>Télecharger les images.</li>
        <li>Suprimmer les images.</li>
        <li>Envoyer les images par mail.</li>
      </ul>
    </div>
  )
}
export default TrbGalleryMuiHelpTemplate
    

    