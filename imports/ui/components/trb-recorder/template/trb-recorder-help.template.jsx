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

const TrbRecorderHelpTemplate = (props) => {
  return (
    <div style={styles.container}>
      <h2>LABORATOIRE</h2>
      <img src="/help/trb-recorder1.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Application de visualisation et d'enregistrement de températures pour le controle des bétons au laboratoire.</p>
      <h3>Fonctionnalités:</h3>
      <ul style={{flex:1, overflowY:"auto"}}>
        <li>Visualisation des températures.</li>
        <li>Enregistrement des températures</li>
        <li>Calcul automatique de la température de pic.</li>
        <li>Export des données au format csv ou excel.</li>
        <li>Export des images des graphiques.</li>
        <li>Consultation des séries enregistrées.</li>
        <li>Retrouver une série par son nom.</li>
      </ul>
    </div>
  )
}
export default TrbRecorderHelpTemplate
    

    