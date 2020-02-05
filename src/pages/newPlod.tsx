import React, { useState } from 'react';
import { Plugins } from '@capacitor/core';

import './newPlod.css';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonLabel
} from '@ionic/react';
import { RouteChildrenProps } from 'react-router';

const { Storage } = Plugins;

const saveNewPlod = async (goal: number, units: string): Promise<void> => {
  return Storage.set({
    key: 'newPlod',
    value: JSON.stringify({
      goal,
      units
    })
  })
}

const NewPlod = (props: RouteChildrenProps) => {
  const [goalValue, setGoal] = useState(0);
  const [unitsValue, setUnits] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Plod</IonTitle>
          <IonButton onClick={async () => {
            await saveNewPlod(goalValue, unitsValue);
            props.history.push('/dashboard')
          }}>Save</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="newPlod-main">
          <h2>What do you want to accomplish?</h2>
          <div className="newPlod-entry">
            <div className="newPlod-line">
              <IonLabel className="newPlod-label">I want to do</IonLabel>
              <IonInput
                value={goalValue !== 0 ? goalValue.toString() : ''}
                onIonChange={(e) => { setGoal(parseInt((e.target as HTMLInputElement).value)) }}
                placeholder="10000">
              </IonInput>

              <IonInput
                value={unitsValue}
                onIonChange={(e) => { setUnits((e.target as HTMLInputElement).value) }}
                placeholder="pushups">
              </IonInput>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default NewPlod;
