import React from 'react';
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonList, IonItem } from '@ionic/react';

import Plod from '../components/plod';

import './dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ploductivity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="dashboard-main">
          <IonList>
            <IonItem>
              <Plod></Plod>
            </IonItem>
            <IonItem>
              <Plod></Plod>
            </IonItem>
            <IonItem>
              <Plod></Plod>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard;