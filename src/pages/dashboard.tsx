import React, { useState } from 'react';
import { useAsync } from 'react-async-hook';

import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonButton
} from '@ionic/react';

import Plod from '../components/plod';

import { Plugins } from '@capacitor/core';


import './dashboard.css';
import { PlodType } from '../utils/types';
import { PlodData, getAllPlods } from '../utils/plodding';
import { RouteChildrenProps } from 'react-router';
const { Storage } = Plugins;

const Dashboard = (props: RouteChildrenProps) => {
  const plods = useAsync(getAllPlods, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ploductivity</IonTitle>
          <IonButton onClick={() => {
            props.history.push('/new');
          }}>New</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="dashboard-main">
          {plods.result && <IonList>
            {
              plods.result.map(plod => {
                return (<Plod key={plod.prefix} plod={plod}></Plod>)
              })
            }
          </IonList>}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard;