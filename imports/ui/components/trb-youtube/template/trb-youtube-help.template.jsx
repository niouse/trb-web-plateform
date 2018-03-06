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

const TrbYoutubeTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>YOUTUBE</h2>
      <img src="/help/trb-youtube.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Vidéothèque TRB</p>
      <h3>Fonctionnalités:</h3>
      <ul style={{flex:1, overflowY:"auto"}}>
        <li>Centraliser les vidéos youtube.</li>
        <li>Filtrer les vidéos en fonction de leur type.</li>
        <li>Enregistrer une nouvelle vidéo.</li>
      </ul>
    </div>
  )
}
export default TrbYoutubeTemplate
    

    