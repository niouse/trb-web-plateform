import React, {Component} from 'react';

const styles={
  conatainer : {
    
  },
  firstImage : {
    width : "300px"
  }
}


const TrbCastTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>TRB PREFA MANAGEUR</h2>
      <img src="/help/trb-be.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Acces depuis un mobile aux données de fabrication de l'APF </p>
      <h3>Fonctionnalités:</h3>
      <ul>
        <li>Visualiser la liste des commandes.</li>
        <li>Visualiser la liste des OF.</li>
        <li>Filtrer les liste par le client, l'industrie, le type de pièce ou le pfinis.</li>
        <li>Pour chaque commande, consulter le détail des lots.</li>
        <li>Pour chaque lot, consulter les détails de fabrication.</li>
        <li>Outils statistiques.</li>
      </ul>
    </div>
  )
}
export default TrbCastTemplate