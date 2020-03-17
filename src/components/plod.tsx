import React from 'react';

import { IonProgressBar, IonButton } from '@ionic/react';

import './plod.css';
import { PlodType } from '../utils/types';
import { PlodData } from '../utils/plodding';

interface PlodProps {
  plod: PlodData;
}

const Plod = (props: PlodProps) => {
  const { plod } = props;
  return (
    <div className="Plod">
      <div className="plodTop">
        <div className="plodName">{`${plod.goal} ${plod.units}`}</div>
        <IonButton onClick={() => {
          plod.completed = plod.completed + 1;
        }}>
          Did it
        </IonButton>
      </div>

      <IonProgressBar
        color="danger"
        value={plod.completed / plod.goal}></IonProgressBar>
    </div>
  )
}

export default Plod;