import React, {Component} from 'react';

const styles={
  conatainer : {
    
  },
  firstImage : {
    width : "300px"
  }
}


const TrbNewCampaignHelpTemplate = (props)=>{
  return (
    <div style={styles.container}>
      <h2>GENERATEUR RAPPORTS HF</h2>
      <img src="/help/trb-hf-report.png" alt="#" style={styles.firstImage}/>
      <h3>Description:</h3>
      <p>Utilitaire pour générer automatiquement et stocker des rapports de réfection de haut fourneau </p>
      <h3>Fonctionnalités:</h3>
      <ul>
        <li>Eregistrer toutes les informations relative à une refection.</li>
        <li>Enregistrer automatiquement les informations sur un serveur distant.</li>
        <li>Fonctionnement hors ligne.</li>
        <li>Retrouver un rapport par date, utilisateur où par site.</li>
        <li>Générer automatiquement un rapport word ou pdf.</li>
        <li>Consulter toutes les opérations pour un site.</li>
        <li>Outils statistiques.</li>
      </ul>
    </div>
  )
}
export default TrbNewCampaignHelpTemplate