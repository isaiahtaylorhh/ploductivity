import React from 'react';
import { Plugins } from '@capacitor/core';

import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList
} from '@ionic/react';

import Plod from '../components/plod';

import './dashboard.css';
import { PlodData } from '../utils/types';

const { Storage } = Plugins;

const Dashboard: React.FC = () => {
  const plods: PlodData[] = [
    {
      goal: 1000,
      completed: 300,
      units: 'practice tests'
    },
    {
      goal: 10000,
      completed: 8000,
      units: 'pushups'
    }
  ];



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
            {
              plods.map(plod => {
                return (<Plod plod={plod}></Plod>)
              })
            }
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard;