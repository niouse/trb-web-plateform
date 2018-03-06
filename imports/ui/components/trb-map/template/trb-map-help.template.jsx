import React, {Component} from 'react';

const styles={
  conatainer : {
    
  },
  firstImage : {
    width : "300px"
  }
}

const TrbMapHelpTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>GOOGLE MAP</h2>
      <img src="/help/trb-map1.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Utilitaire google map pour localiser les clients et récupérer des informations sur un client en particulier</p>
      <h3>Fonctionnalités:</h3>
      <ul>
        <li>Visualisation des clients sur google map</li>
        <li>Possibilité de filtrer les icones par industrie</li>
        <li>Récupération des informations clients</li>
        <li>Recherche d'un client par son nom</li>
        <li>Géolocalisation d'un client par son nom</li>
      </ul>
    </div>
  )
}
export default TrbMapHelpTemplate