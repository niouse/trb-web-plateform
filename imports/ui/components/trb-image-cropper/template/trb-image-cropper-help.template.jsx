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

const TrbImageCropperTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>IMAGE CROPPER</h2>
      <img src="/help/trb-image-cropper.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Stocker et retrouver facilement les photos TRB.</p>
      <h3>Fonctionnalités:</h3>
      <ul style={{flex:1, overflowY:"auto"}}>
        <li>Enregistrer une image.</li>
        <li>Cropper, redimensionner l'image.</li>
        <li>Appliquer des tags à l'image.</li>
      </ul>
    </div>
  )
}
export default TrbImageCropperTemplate
    

    