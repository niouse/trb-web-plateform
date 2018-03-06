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

const TrbEtuveHelpTemplate = (props) => {
  return (
    <div style={styles.container}>
      <h2>SURVEILLANCE ETUVE</h2>
      <img src="/help/trb-etuve.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Visualisation en direct des données issues des étuves de l'atelier de pièces préfabriquées.</p>
      <h3>Fonctionnalités:</h3>
      <ul style={{flex:1, overflowY:"auto"}}>
        <li>Visualisation en ligne des températures.</li>
        <li>Choix de l'étuve à surveiller.</li>
        <li>Visualisation de l'historique des température sur un graphique.</li>
        <li>Récupération des courbes de consigne.</li>
        <li>Récupératon des données de process de l'étuve.</li>
        <li>Alarme configurable sur seuil.</li>
        <li>Alarme sur l'écart de consigne</li>
      </ul>
    </div>
  )
}
export default TrbEtuveHelpTemplate
    